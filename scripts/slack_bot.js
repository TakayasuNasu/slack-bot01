module.exports = function(robot) {
  robot.hear(/死ね/i, function(res) {
    return res.send("オマエモナー");
  });

  robot.hear(/澤野|原田|吉田/i, function(msg) {
    return msg.send("```\n   Λ＿Λ     ＼＼\n（  ・∀・）  | | ｶﾞｯ\n と     ）  | |\n  Ｙ /ノ     人\n   / ）    < >   _Λ  ∩\n＿/し'   ／／  Ｖ｀Д´）/\n（＿フ彡             / ←>> @" + msg.message.user.name + "\n```");
  });
};