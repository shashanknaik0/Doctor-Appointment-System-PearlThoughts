module.exports = (app) =>{
    router = require('express').Router()

    doctor = require('../src/doctor/doctorController')
    appointment = require('../src/appointment/appointmentController')

    router.get('/',(req,res)=>{
        res.send('hello word')
    })

    router.post('/doctor', doctor.create)
    router.get('/doctor', doctor.list)
    router.get('/doctor/:id', doctor.details)
    router.put('/doctor/:id', doctor.update)
    router.delete('/doctor/:id', doctor.delete)
    
    router.post('/appointment', appointment.create)
    router.get('/appointment', appointment.list)
    router.get('/appointment/:doctorId', appointment.listByDoctor)
    router.put('/appointment/:id', appointment.update)
    router.delete('/appointment/:id', appointment.delete)

    app.use(router)
}