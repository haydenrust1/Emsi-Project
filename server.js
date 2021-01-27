const express = require('express');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded(
    {extended: true}
));
app.use(express.json());

// heroku assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

//Add created routes
app.use(routes);

app.listen(PORT, function() {
    console.log(`API Server listening on Port ${PORT}`)
});