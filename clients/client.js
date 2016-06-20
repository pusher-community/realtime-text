// npm install pusher

const Pusher = require('pusher')

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER
})

const stdin = process.stdin
stdin.setRawMode(true)
stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (key) {
  if (key) {
    pusher.trigger('text', 'event', {key: key})
  }

  if (key === '\u0003') {
    process.exit()
  }
})
