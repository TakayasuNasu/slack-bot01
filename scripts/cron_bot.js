var cron = require('cron').CronJob;

module.exports = function(robot) {
  return new cron('10 */2 * * * 1-5', (function(_this) {
    return function() {
      return robot.send({
        room: "rails-project01"
      }, "今日の運勢は?");
    };
  })(this), null, true, "Asia/Tokyo");
};