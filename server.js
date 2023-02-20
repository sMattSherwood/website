const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// this will talk to the html and css in contact info
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/contactInfo/contact.html')
});

app.listen(PORT, ()=>{
    console.log(`Server on running on port ${PORT}`)
});