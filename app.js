const mongoose=require('mongoose')//1.node modules were missing
const url = 'mongodb://localhost:27017/Library'//2.mongoose or bodyparser
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log('connected...')
})

const express = require('express'); 
const bodyParser = require('body-parser');

    console.log("Server Ready on 3000");


const path = require ('path'); 
const cors = require('cors');//7..cors is not used

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');//const homeRouter = require('./src/routes/homeroute') was given
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute')(nav);

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 5000");// console.log("Server Ready on 3000"); were given
});