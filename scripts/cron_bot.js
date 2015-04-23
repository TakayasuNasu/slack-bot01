var cron = require('cron').CronJob;

module.exports = function(robot) {
  return new cron('0 */2 * * * 1-5', (function(_this) {
    return function() {
      return robot.send({
        room: "rails-project01"
      }, "原田さんおみくじ");
    };
  })(this), null, true, "Asia/Tokyo");
};