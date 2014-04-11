var http = require('http');
var router = require('router');
var request = require('request');
var key = "";
var event_manager_url = 'http://merx-pbx-gateway-event-manager.herokuapp.com';

var route = router();
// Configure our HTTP server to respond with Hello World the root request
route.get("/{user_id}/{cid}", function (req, res) {
  var user_id = req.params.user_id;
  var cid = req.params.cid;

  res.writeHead(200); 
  res.end("Success");

  request({
    method: 'GET',
    headers:{
      'token': key
    },
    uri: event_manager_url,
    json:true
    },
    function(error, response, body) {
      if(error){
        console.log("Tenemos problemas houston!");
      }
    });
});

http.createServer(route).listen(8080);
