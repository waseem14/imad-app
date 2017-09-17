var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
          'article-one' :{
        title :  'Article One | Waseem Ibrahim',
        heading:'Article One ',
        date   : 'sep 17, 2017',
        content: ` <p>
           this is the article one content.this is the article one content.this is the article one content.this is the article one content.
           this is the article one content.this is the article one content.this is the article one content.this is the article one content.
           this is the article one content.this is the article one content.this is the article one content.this is the article one content.
       </p>
       <p>
           this is the article one content.this is the article one content.this is the article one content.this is the article one content.
           this is the article one content.this is the article one content.this is the article one content.this is the article one content.
           this is the article one content.this is the article one content.this is the article one content.this is the article one content.
       </p>`},
           'article-two' :{
    title :  'Article two | Waseem Ibrahim',
    heading:'Article Two ',
    date   : 'sep 20, 2017',
    content: ` <p>
       this is the article two content.this is the article two content.
   </p>
   `},
           'article-three' :{
    title :  'Article three | Waseem Ibrahim',
    heading:'Article three ',
    date   : 'sep 22, 2017',
    content: ` <p>
       this is the article three content.this is the article three content.
   </p>
   `}
};       
function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var date=data.date;

var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
        <body>
           <div Class=container>
                <a href="/">Home</a> 
           
           <h3>
               ${heading}
           </h3>
           <div>
               ${date}
           </div>
         <div>
          ${content}
         </div>
         </div>
         
        </body>
        </html>
    
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req,res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
  res.send(createTemplate(article-two));
});

app.get('/article-three',function(req,res) {
    res.send(createTemplate(article-three));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
