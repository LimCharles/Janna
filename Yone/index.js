const express = require('express')
const app = express()
var formattedstring = "";   
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://LimCharles:examplepassword*@mapdata.dfull.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

app.post('', function (request, response) {
    formattedstring = formattedstring.concat(request.body.inboundSMSMessageList.inboundSMSMessage[0].message);
    try {
        data = JSON.parse(formattedstring);
        mongo.connect(async err => {
          const collection = mongo.db("DisasterInformation").collection("UserInfo");
          await collection.insertOne(data);
        });
        formattedstring = "";
    } catch {
    }
})

app.listen(3000, function (err) {
  if (err) {
    throw err
  } 
});

