const {FEED} = require('../models/FEED')
const {handlerError} = require('../config/handlerErrors')

const getHomePage = (req,res) =>{
    if(req.method === 'GET'){
        FEED.find().sort({createdAt: -1})
        .then(result=> res.render('index', {result, errors: null}))        
    } 

    if (req.method ==='POST'){
        const feed = new FEED(req.body)
        feed.save()
        .then( () => 
            res.redirect('/feed')
            )
        .catch(err => {
            const errors = handlerError(err)
            FEED.find()
            .then(result => res.render('index', {errors, result}))
        })
    }
}

const showOnePost = (req,res) =>{
    FEED.findById(req.params.id)
    .then(result => {
        console.log(result)
        res.render('showOne', { result})}
        )
    .catch(err => console.log(err))
     
    } 

const deleteOnePost =(req,res)  =>{
    FEED.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/feed')) 
        .catch(err => console.log(err))
}

const updateOnePost = (req,res) =>{
    if(req.method === 'GET'){
    FEED.findById(req.params.id)
        .then(result => {
            console.log(result)
            res.render('editPost', { result, errors: false})}
            )
        .catch(err => console.log(err))
    } 

    if (req.method ==='POST'){
    FEED.findByIdAndUpdate(req.params.id, {runValidators: true})
        .then(result => {
            result.name = req.body.name
            result.message = req.body.message
            result.save() 
            .then((result) => 
                res.render('showOne', {result})) 

                .catch(err => {
                    const errors = handlerError(err)
                    FEED.findById(req.params.id)
                    .then(result => {
                        res.render('editPost', {errors, result})})
                })
                })
    }
}   

module.exports = {
getHomePage,
showOnePost,
updateOnePost,
deleteOnePost
}