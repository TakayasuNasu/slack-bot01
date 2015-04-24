
module.exports = function(robot) {
  robot.hear(/死ね/i, function(res) {
    return res.send("オマエモナー");
  });

  robot.hear(/三谷てめぇ/i, function(res) {
    return res.send("呼んだ?");
  });

  robot.hear(/俺の給料は45万/i, function(res) {
    return res.send("へぇー スゴっ... ちなみに俺は120万だけどね");
  });

  robot.hear(/大吉|凶/i, function(msg) {
    return msg.send("```\n  Λ＿Λ     ＼＼\n（  ・∀・）  | | ｶﾞｯ\n と     ）  | |\n  Ｙ /ノ     人\n   / ）    < >   _Λ  ∩\n＿/し'   ／／  Ｖ｀Д´）/\n（＿フ彡             / ←>> @" + msg.message.user.name + "\n```");
  });

  robot.respond(/今日の運勢/i, function(res) {
    luck = [
    ':harachev: < 大吉。俺の給料は45万だけど',
    ':harachev: < 中吉。死ね',
    ':harachev: < 吉。レベル低いね',
    ':harachev: < 凶。相変わらずだね',
    ':harachev: < 大凶。電気つけてもいいよ',
    ':sawachev: < 大吉。論理的には大も中も関係ないけどね',
    ':sawachev: < 中吉。うん、で？',
    ':sawachev: < 大吉出したら俺の仕事代わりにやってくれんの？'
    ];
    return res.send(res.random(luck));
  });
};
