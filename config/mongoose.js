const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/feed-facebook-challenge')
.then ( result => console.log('DB connected'))
.catch( err => console.log(err))
