const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

////////////

//const api=require('./server/routes/api')

const app=express();

const port=2111;

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use('/api',api);

///////////////
////////////
//var app=express();
var mongojs=require('mongojs');
var mongoose  = require('mongoose');
var db=mongojs('collections',['loginDetails','projectSelection'])



var methodOverride = require('method-override');
var bson = require('bson');
var Promise = require('es6-promise').Promise;
var Decimal128 = require('mongodb').Decimal128;
app.use(bodyParser.json({limit: '50mb'})); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({limit: '50mb', extended: true,parameterLimit:50000}));// parse application/x-www-form-urlencoded

app.use(bodyParser.json());
 //console.log("mmmmmmmmmmmmmooooooooooooooooooo")

app.get('/loginDetails',function(req,res){
     
   // console.log("ooooooooooooooooooo")
    db.loginDetails.find({"userName":"Admin"},function(err,doc){        
        res.json(doc);
        // console.log("kkkkkkkkkkkkkkk"+doc)
    })
})
app.get('/selectionProject',function(req,res){
     
  
    db.projectSelection.find({},function(err,doc){        
        res.json(doc);
        // console.log("mm"+doc)
    })
})

app.post('/postModuleName',function(req,res)
{
   //var moduleName=req.params.moduleName;
   
    //var moduleName = str_array[1];
//console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

    db.moduleName.insert(req.body ,function(err,doc)
        {
        res.json(doc);
        //console.log(doc)
       });


})
app.post('/postFeatureName',function(req,res)
{
   //var moduleName=req.params.moduleName;
   
    //var moduleName = str_array[1];
//console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

    db.featureName.insert(req.body ,function(err,doc)
        {
        res.json(doc);
        //console.log(doc)
       });


})

app.get('*',(req, res)=> {

  res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(port,function() {
	console.log("server running on port"+port);
	// body...
});





