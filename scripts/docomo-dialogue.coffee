module.exports = (robot) ->
  status  = {}

  robot.respond /(?:雑談\s+|(?:(?:(様|さま|サマ|殿|どの|さん|サン|はん|どん|やん|ちゃん|チャン|氏|君|くん|クン|たん|タン|社長|しゃちょう|先生|せんせ(?:い|ー))(?:、|。|!|！)?))|(?:(?:、|。|!|！)\s*))(.*)/, (res) ->
    message = res.match[2]
    return if message is ''

    d = new Date
    now = d.getTime()
    nickname = res.message.user.name

    if now - status['time'] > 2 * 60 * 1000
      status =
        "id": ''
        "mode": ''
        "nickname": nickname
        "nickname_y": "ユーザー"
        "t": ''

    if /(たん|タン)/.test(res.match[1])
      status.t = 30
    else if /(はん|どん|やん)/.test(res.match[1])
      status.t = 20
    else if d.getDay() is 2
    # 火曜日は関西弁
      status.t = 20

    res
      .http('https://api.apigw.smt.docomo.ne.jp/dialogue/v1/dialogue')
      .query(APIKEY: process.env.HUBOT_DOCOMO_DIALOGUE_API_KEY)
      .header('Content-Type', 'application/json')
      .post(JSON.stringify({
        utt: message,
        context: status['id'],
        mode: status['mode'],
        t: status['t'],
        nickname: status['nickname'],
        nickname_y: status['nickname_y']
      })) (err, response, body) ->
        if err?
          console.log "Encountered an error #{err}"
        else if body is ''
          res.send "へんじがない。ただのしかばねのようだ"
        else
          console.log body
          res.send JSON.parse(body).utt
          status =
            "time": now
            "id": JSON.parse(body).context
            "mode": JSON.parse(body).mode
            "nickname": nickname
            "nickname_y": "ユーザー"