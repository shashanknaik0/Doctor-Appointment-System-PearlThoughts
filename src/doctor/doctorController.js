const doctor = require('./model/doctor.schema')

exports.create = (req, res) => {
    let newdoctor = new doctor({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        specialty: req.body.specialty,
     })

    newdoctor.save((err, data) => {
        if (err) res.status(400).send(err);

        res.status(201).send(data)
    })
}

exports.list = (req, res) => {
    doctor.find({}, {_id:0, age:0, address:0, __v: 0 }).exec((err, data) => {
        if (err) res.status(400).send(err);

        res.send(data)
    })
}

exports.details = (req, res) => {
    doctor.findOne({ id: req.params.id }, (err, data) => {
        if (err) res.status(400).send(err);

        if (data === null) {
            res.status(404).send("No data found with doctor id " + req.params.id)
        } else {
            res.send(data)
        }
    });
}

exports.update = (req, res) => {
    doctor.findOneAndUpdate({ id: req.params.id }, req.body, (err, data) => {
        if (err) res.status(400).send(err);

        if (data === null) {
            res.status(404).send("No data found with doctor id " + req.params.id)
        } else {
            res.send(data)
        }
    });
}

exports.delete = (req, res) => {
    doctor.findOneAndDelete({ id: req.params.id }, (err, data) => {
        if (err) res.status(400).send(err);

        if (data === null) {
            res.status(404).send("No data found with doctor id " + req.params.id)
        } else {
            res.send(data)
        }
    });
}

