const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
const PORT = 5050;


//Public Static Path
const static_path = (path.join(__dirname,"../public"));
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set("views",template_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));


//Routing
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('*',(req,res)=>{
    res.render('404',{
        errormsg : "oops!! Page Not Found."
    });
});

app.listen(PORT, "127.0.0.1",()=>{
    console.log(`listening to 5050...`);
});