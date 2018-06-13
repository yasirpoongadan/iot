var mosca = require("./mosca");

var moscaSettings = {
  port: 1883,
  persistence: mosca.persistence.Memory
};

var server = new mosca.Server(moscaSettings, function() {
  console.log('Mosca server is up and running')
});

server.published = function(packet, client, cb) {
  if (packet.topic.indexOf('echo') === 0) {
    return cb();
  }

  var newPacket = {
    topic: 'echo/' + packet.topic,
    payload: packet.payload,
    retain: packet.retain,
    qos: packet.qos
  };

  server.publish(newPacket, cb);
}



var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.1.119:1883');
var models = require('./models');

var express = require('express');
const app = express();
const http = require("http");
// const socketIo = require("socket.io");

// const server1 = http.Server(app);
// const io = socketIo(server1);
// var router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var env = process.env.NODE_ENV || 'development';
console.log(__dirname);
var config = require(__dirname + '/config/config.json')[env];
var Track = models.tbl_track_details;
var TableKey = models.tbl_key;


if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }


var extServerOptions = {
    host: 'localhost',
    port: '3000',
    path: '/user/newUserActivity',
    method: 'GET'
}; 

  client.on('connect', () => {
    console.log('topic connected');
     client.subscribe('topic')
   })

var appKey = 'smartschool';
TableKey.findOne().then(respkey => {
    appKey = respkey.key;

    client.on('message',  (topic, message) =>{
        console.log(message);
        response = message.toString();
        console.log(response);
       
         var obj = JSON.parse(response);
        str = obj.rfid;
        str = str.substring(str.lastIndexOf("$")+1,str.lastIndexOf("\n"));
        if(appKey == obj.key){
              myobj = {
                rf_id: pad(str, 10),
                s_id: obj.stid,
                direction: obj.dir,
            }
            if( obj.errorid != 0){
              myobj.error_code = obj.errorid;
            }
            const track = Track.build(myobj)
            track.save().then((newdivision) => {
                process.on('uncaughtException', function (err) {
                }); 
                http.request(extServerOptions, function (res) {
                }).end();
            });
        }else{
            console.log('invalid key');
        }
    })
   
});

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
