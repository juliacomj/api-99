const express = require('express');

const server = express();

server.use(express.json());

const info = [];

function checkInfo(req, res, next){
    if(!req.body.user){
        return res.status(400).json({error: 'user cannot be empty ' })
    }
    if(!req.body.address){
        return res.status(400).json({error: 'address cannot be empty ' })
    }
    if(!req.body.pet){
        return res.status(400).json({error: 'pet cannot be empty ' })
    }
    if(!req.body.phone){
        return res.status(400).json({error: 'phone cannot be empty ' })
    }
    return next();
}

server.get('/info/', (req ,res) =>{
    return res.json(info);
})


server.post('/info', checkInfo, (req, res) =>{
    const user = req.body.user;
    const address = req.body.address;
    const pet = req.body.pet;
    const phone = req.body.phone;
    const data = {
        user: user,
        address: address,
        pet: pet,
        phone: phone,    
        }
    info.push(data); 
    return res.json(info);
});

server.listen(3000);