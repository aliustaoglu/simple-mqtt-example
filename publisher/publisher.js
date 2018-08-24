var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://192.168.1.77');
client.on('connect', function() {
  setInterval(function() {
    client.publish('myTopic', 'New message');
    console.log('Message Sent');
  }, 5000);
});
