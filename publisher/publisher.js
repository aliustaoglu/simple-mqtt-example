var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');
client.on('connect', function() {
  setInterval(function() {
    client.publish('myTopic', 'New message');
    console.log('Message Sent');
  }, 5000);
});
