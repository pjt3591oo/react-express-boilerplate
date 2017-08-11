import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

import path from 'path';

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
app.use(express.static(path.join(__dirname, '../server/public')));



/* ==== 리엑트로 만든 페이지 라우트 ==== */
app.use('/react', express.static(__dirname + '/../public'));



/* ==== API 라우트 ====*/
import API01V from './routes/API1.0V';

app.use('/posts', API01V);



/* ==== utils 테스트 ==== */
import email from './utils/email';

//email 테스트
app.get('/email', function(req, res, next){
    let toEmail = 'pjt3591oo@naver.com';
    let infos = {
        a: 'email',
        b: 'test',
        c: 'mung'
    };
    email({toEmail: toEmail, infos: infos}).then(()=>{
        res.send(toEmail + ' 이메일 발송 성공')
    }, err => {
        console.log(err);
        res.send(toEmail + ' 이메일 발송 실패')
    })
});

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
