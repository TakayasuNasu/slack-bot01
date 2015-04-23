// var cronJob = require('cron').CronJob;

// module.exports = function(robot) {
//   var cronOmikujiByHarada;
//   cronOmikujiByHarada = new cronJob('* */2 * * * 1,2,3,4,5', (function(_this) {
//     return function() {
//       var envelope;
//       envelope = {
//         room: "#random"
//       };
//       return robot.send(envelope, "原田さんおみくじ");
//     };
//   })(this));
//   return cronOmikujiByHarada.start();
// };