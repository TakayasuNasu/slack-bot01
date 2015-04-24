
module.exports = (robot) ->
  robot.respond /教えて (.*)/i, (msg) ->
    googleMe msg, msg.match[3], (url) ->
      msg.send url

googleMe = (msg, query, cb) ->
  msg.http('http://www.google.com/search')
    .query(q: query)
    .get() (err, res, body) ->
      cb body.match(/class="r"><a href="\/url\?q=([^"]*)(&amp;sa.*)">/)?[1] || "へんじがない ただのしかばねのようだ"