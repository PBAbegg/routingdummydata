// define
console.log("Hello Node!");

// tell to use express
const express = require("express");

// dummy data
const contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

// define port to run on
const port = 3001;

// define application
const app = express();

//middleware should be defined here
app.use(middle);

app.use(express.static('public'));//'static' needs a folder to reference

function middle(req, res, next)
{
    console.log(`Incoming request: ${request.original}`)


        next();//always at end of middleware function
}

app.get('/other', (req, res, next) => {
    //set response header
    res.set({
        'Content-type': 'text/html'
    });
    //define response body as HTML (in a string)
    const body = `
        <h1>Other route</h1>
        <p>HTML response</p>
    `;
    res.send(body);
});

//rout to contact info, name"(Akira)whatever" prop"(likes)anything"
app.get('/lookup/:name/:prop', (req, res, next) => {
  console.log('req: ', req.method); //method is get because app.get
  console.log('params: ', req.params); //look up request on expressjs.com for more info
  const { //so we don't have to write out the props every time
    name,
    prop
  } = req.params;

  lookUpProfile(name. prop)
  .then ((result) =>
  {
  //set response header
  res.set({
    "Content-Type": "application/json"
  });
  res.json(result);
  })
  .catch((err => {
  console.error("Error fetching profile", err)
  res.send(err);
  }));

  // create a route at which to listen
  // -----all routs should be defined here----
  app.get("/test", function (req, res, next) {
    res.send("Its working");
  });


  // tell app to listen for requests on port number
  app.listen(port, (err) => {
    if (err) {
      console.err(`Error trying to start app: ${err}`);
    }
    console.log(`Application running on port: ${port}...`);
  });
  
});
