let CallbackRequest= require('../models/callback-requests').CallbackRequest;
let express = require('express');
let uniqid= require('uniqid');
const callbackRequests = require('../models/callback-requests');
let router = express.Router();

let authMiddleware = require('../middleware/auth');

router.get('/',authMiddleware, async (req,resp) =>{
    resp.send(await CallbackRequest.find());

});
router.post('/', async (req,resp) =>{
    let RequestBody=req.body;
    let newRequest= new CallbackRequest({
        id: uniqid(),
        phoneNumber: RequestBody.phoneNumber,
        date: new Date()
    })
    await newRequest.save();
    resp.send('Accepted!');
    
});
router.delete('/:id',authMiddleware, async(req,resp) => {
    await CallbackRequest.deleteOne({id: req.params.id});
    resp.send('Deleted');
});

module.exports= router;
