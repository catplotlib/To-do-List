const express=require('express');
const app=express();


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

var newItems=[];
var workItems=[];

app.get("/",function(req,res){
var today=new Date();
var options={
  weekday:'long',
  day:'numeric',
  month:'long'
};


app.get("/about",function(req,res){
res.render("about")
});


var tday = new Date().toLocaleString('en-us', options);
res.render("list",{listTitle:tday,newItems:newItems});
});

app.post("/",function(req,res){
var newItem=req.body.newItem;
console.log(req.body.list);
if(req.body.list=="Work list"){
  workItems.push(newItem);
  res.redirect("/work");
}
else{
  newItems.push(newItem);
  res.redirect("/");
}



});

app.get("/work",function(req,res){
res.render("list",{listTitle:"Work list",newItems:workItems});
});

app.listen(process.env.PORT || 3000,function(){
  console.log("listening!");
})



app.post("/work",function(req,res){
var newItem=req.body.newItem;
workItems.push(newItem);


});
