# gem install pusher

require 'io/console'
require 'pusher'


pusher_client = Pusher::Client.new(
  app_id: ENV['APP_ID'],
  key: ENV['KEY'],
  secret: ENV['SECRET'],
  cluster: ENV['CLUSTER'],
  encrypted: true
)


loop do
  key = STDIN.getch

  if key
    pusher_client.trigger('text', 'event', {key: key})
  end

  # ctrl-c
  exit if key == "\u0003"
end
