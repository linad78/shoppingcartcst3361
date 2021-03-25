const express =require('express');

const app = express();
app.set("view engine", "ejs");
app.use

app.get('/', (req,res) =>{
    res.render('test');
});
app.listen(3000, ()=>{
    console.log('server runnig');
});