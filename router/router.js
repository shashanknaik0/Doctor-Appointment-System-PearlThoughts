module.exports = (app) =>{
    router = require('express').Router()

    doctor = require('../src/doctor/doctorController')

    router.get('/',(req,res)=>{
        res.send('hello word')
    })

    router.post('/doctor', doctor.create)
    router.get('/doctor', doctor.list)
    router.get('/doctor/:id', doctor.details)
    router.put('/doctor/:id', doctor.update)
    router.delete('/doctor/:id', doctor.delete)

    app.use(router)
}