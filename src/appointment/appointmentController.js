const appointment = require('./model/appointment.schema')
const appointmentService = require('./service/appointmentService')
const doctor = require('../doctor/model/doctor.schema')

exports.create = async(req, res) => {
    var date = new Date(req.body.date)
    //to check appointment date should be in future
    if(!appointmentService.isDateInFuture(date)){
        res.send('Date should be in future')
        return
    }
    //to check date is not sunday
    if(!appointmentService.isSunday(date)){
        res.send('Date should not be sunday')
        return
    }

    doctor.findOne({id: req.body.doctorId}).exec((err,doctorObject)=>{
        if (err) res.status(400).send(err);
        //to check doctor id is valid and to assign doctor id to doctor object id since we used doctor reference in schema
        if(doctorObject == null){
            res.send('Invalid doctorId, doctor does not exist.')
            return
        }
        let newAppointment = new appointment({
            doctor: doctorObject._id,
            patient: {
                name:req.body.pacient.name,
                age: req.body.pacient.age
            },
            date: date,
         })
    
        newAppointment.save((err, data) => {
            if (err) res.status(400).send(err);
    
            res.status(201).send(data)
        })
    })
}

exports.list = (req, res) => {
    appointment.find({}, {__v: 0 }).populate('doctor',['id', 'name', 'specialty']).exec((err, data) => {
        if (err) res.status(400).send(err);
        
        res.send(data)
    })
}

exports.listByDoctor = (req, res) => {
    doctor.findOne({id: req.params.doctorId}).exec((err,doctorObject)=>{
        if (err) res.status(400).send(err);

        if(doctorObject == null){
            res.send('Invalid doctorId, doctor does not exist.')
            return
        }
        appointment.find({ doctor: doctorObject._id },{ doctor:0,__v: 0 }).exec((err, data) => {
            if (err) res.status(400).send(err);

            if (data === null) {
                res.status(404).send("No appointment found for doctor id " + req.params.id)
            } else {
                res.send(data)
            }
        });
    });
}

exports.update = (req, res) => {
    var date = new Date(req.body.date)
    //to check appointment date should be in future
    if(!appointmentService.isDateInFuture(date)){
        res.send('Date should be in future')
        return
    }
    //to check date is not sunday
    if(!appointmentService.isSunday(date)){
        res.send('Date should not be sunday')
        return
    }
    appointment.findOneAndUpdate({ id: req.params.id }, req.body, (err, data) => {
        if (err) res.status(400).send(err);

        if (data === null) {
            res.status(404).send("No data found with appointment id " + req.params.id)
        } else {
            res.send(data)
        }
    });
}

exports.delete = (req, res) => {
    appointment.findOneAndDelete({ id: req.params.id }, (err, data) => {
        if (err) res.status(400).send(err);

        if (data === null) {
            res.status(404).send("No data found with appointment id " + req.params.id)
        } else {
            res.send(data)
        }
    });
}

