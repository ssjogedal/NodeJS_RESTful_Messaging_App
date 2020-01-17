var express = require('express') // web framework for Node.js
var bodyParser = require('body-parser') // Auto parses body of post and put requests
var morgan = require('morgan') // Logs HTTP requests to the console
var app = express()
app.use(express.static('static'));    // makes the files in /static folder available
app.use(bodyParser.urlencoded({ extended: true })) //
app.use(bodyParser.json());                        // Hooking on functions that will be called for each request
app.use(morgan('dev'));                            //

var data = require('./data');
var port = 13169;
// HTTP SERVER
app.listen(port, function () {
  console.log('Message app listening on port '+port+'!')
});

// HOME PAGE
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

// MESSAGES ENDPOINT
app.post('/messages', function(request, response) {
if (request.body.userName != "" && request.body.text != "")
 {
  console.log(request.body);
  data.addMessage(request.body.userName, request.body.text);
  response.sendStatus(201);
 }
 else 
 {
   response.sendStatus(400);
 }
});

app.get('/messages', function(request, response)
{
  response.json(data.messages);
});

// GET message by id
app.get('/messages/:id', function(request, response)
{
  var id = request.params.id;
  var resp = data.getMessageById(id)

// Check if getMessageById return null
  if (resp != null)
  {
    // If not null send message in response
    response.json(data.getMessageById(id));
  }
  else 
  {
    response.sendStatus(404);
  }

});

//Delete message by id
app.delete('/messages/:id', function(request, response)
{
  var id = request.params.id;
  var tryRemove = data.removeMessage(id)

  if (tryRemove != null)
  {
    response.sendStatus(200);
  }
  else 
  {
    response.sendStatus(404);
  }

})
