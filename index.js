const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const db = require("./models")
db.sequelize.authenticate()
.then(() => {
    console.log('Connection has been established succesfully.');
})
.then(()=> {
    db.Hewan.sync().then(() => console.log('table Hewan created'))
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

require('./routes/hewan.routes')(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`app running on port: ${port}`);
})
