import express from 'express';
import session from 'express-session';

import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import path from 'path';
import Passport from './utils/passport';

const app = express();
const port = 3000;
const devPort = 3001;


if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    
    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

app.set('views', path.join(__dirname, '../server/views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use( session({
    secret: '2C44774A-D649-4D44-9535-46E296EF984F',
    cookie: { maxAge: 600000 * 1000 }, // 단위 1/1000초 == ms
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, '../server/public')));

// passport를 사용하기 위해 미들웨어 추가해줘야 한다.
app.use(Passport.initialize());
app.use(Passport.session());

/* ==== 리엑트로 만든 페이지 라우트 ==== */
app.use('/react', express.static(__dirname + '/../public'));



/* ==== API 라우트 ====*/
import API01V from './routes/API1.0V';

app.use('/posts', function(req, res, next){}, API01V);


/* ==== utils 테스트 ==== */

// 1. email 테스트
import email from './utils/email';

app.get('/email', function(req, res, next){
    let toEmail = 'pjt3591oo@naver.com';
    let infos = {
        a: 'email',
        b: 'test',
        c: 'mung'
    };
    email({toEmail: toEmail, infos: infos}).then(()=>{
        res.send(toEmail + ' 이메일 발송 성공');
    }, err => {
        console.log(err);
        res.send(toEmail + ' 이메일 발송 실패');
    })
});

// 2. authenticate 테스트
import authenticate from './utils/authenticate';

app.get('/authenticate', authenticate, function(req, res, next){
    res.send('authenticate success');
});

// authenticate 인증 실패시 호출
app.get('/authenticate/failed', function(req, res, next){
    res.send('authenticate failed');
});

// 3. file upload(multer) 테스트
import {local} from './utils/file';

app.get('/file', function(req, res){
    console.log(local);
    res.end(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
            <form action="/file/upload" method="post" enctype="multipart/form-data">
              <input type="file" name="name">
              <input type="submit">
            </form>
          </body>
        </html>`
    )
});

// multer 테스트
app.post('/file/upload', local.single('name'), function(req, res, next){
    res.send('file upload success');
});

// aws s3 보류

// 4. passport 테스트
import passport from './utils/passport'

app.get('/passport/facebook/signin', passport.authenticate('facebook'));

app.get('/passport/callback',
    passport.authenticate('facebook',
        {
            successRedirect: '/passport/success',
            failureRedirect: '/passport/failed'
    })
);

app.get('/passport/success', function(req, res, next){
    res.send(req.user);
});

app.get('/passport/failed', function(req, res, next){
    res.send('passport facebook login failed');
});

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
