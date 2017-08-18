/**
 * Created by bagjeongtae on 2017. 8. 18..
 */
/**
 * Created by bagjeongtae on 2017. 8. 16..
 */
'use strict';

var should = require('should');
var sms = require('../sms');

// describe('cafe24.sms.node', function () {
//
//   it('should send sms', function (done) {
//     sms.send({
//       msg: '카페24 SMS 테스트',
//       mobile: '01065003591'
//     }).then(function (result) {
//       console.log(result);
//       should(result).ok;
//       done();
//     }).done(null, done);
//   });
//
// });

sms.send({
    msg: '카페24 SMS 테스트',
    mobile: '010-1234-5678'
}).then(function (result) {
    console.log(result);
}, err=>{
    console.log(err)
    console.log(err.split(',')[0])
});