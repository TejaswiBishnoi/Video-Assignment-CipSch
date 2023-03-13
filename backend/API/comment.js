var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function getcomments(req, res){
    if (!req.body.videoid || !req.body.content || !req.user){
        res.status(400);
        return;
    }
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }
    let db = client.db('video');
    let col = db.collection('comments');
    
    var dt = new Date().toISOString().slice(0, 10).split('-').reverse().join('/');

}