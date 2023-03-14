const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors')
app.use(cors({origin:'*'}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{res.send('hello')});

const login = require('./API/login');
app.post('/login', (req, res)=>{login.login(req, res)});

const getvids = require('./API/getvideos');
app.get('/getvideos', (req, res)=>{getvids.x(req, res)});

const getvid = require('./API/getvideo');
app.post('/getvideo', (req, res)=>{getvid.x(req, res)});

const s = require('./API/signup');
app.post('/signup', (req, res)=>{s.signup(req, res)});

const ss = require('./API/getcomments');
app.post('/comments', (req, res)=>{ss.getcomments(req, res)});

const reps = require('./API/getreplies');
app.post('/replies', (req, res)=>{reps.get(req,res)});


const authmiddleware = require('./API/authmiddle');
//app.use(authmiddleware.x);

const comment = require('./API/comment');
app.post('/comment', authmiddleware.x,(req, res)=>{comment.x(req,res)});

const reply = require('./API/reply');
app.post('/reply', authmiddleware.x, (req, res)=>{reply.x(req,res)});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})