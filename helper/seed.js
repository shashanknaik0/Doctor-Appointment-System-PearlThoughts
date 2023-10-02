// to seed random data
const mongoose = require('mongoose');
const mongodbSetup = require('./mongodb')
mongodbSetup()

db = mongoose.connection

const doctor = require('../src/doctor/model/doctor.schema')
const appointment = require('../src/appointment/model/appointment.schema')

const doctors = [
    {
        "id": 234555,
        "name": "shashank",
        "age": 30,
        "address": "abc hospital",
        "specialty":"Cardiologist"
    },
    {
        "id": 999999,
        "name": "abc",
        "age": 36,
        "address": "xyz hospital",
        "specialty":"Oncologist"
    },
    {
        "id": 738282,
        "name": "xyz",
        "age": 40,
        "address": "abc hospital",
        "specialty":"Dentist"
    }
];

const appointments = [
    {
        "doctorId":234555,
        "pacient":{
            "name": "abcd",
            "age":30
        },
        "date": "2023-10-4"
    },
    {
        "doctorId":234555,
        "pacient":{
            "name": "efgh",
            "age":30
        },
        "date": "2023-10-5"
    },
    {
        "doctorId":999999,
        "pacient":{
            "name": "ijkl",
            "age":38
        },
        "date": "2023-10-4"
    },
    {
        "doctorId":738282,
        "pacient":{
            "name": "pqrs",
            "age":32
        },
        "date": "2023-10-4"
    },
];

db.once('open', async() => {
    await doctor.insertMany(doctors)
    .then(() => {
        console.log('Inserted doctor data');
    })

    await appointment.insertMany(appointments)
    .then(() => {
        console.log('Inserted appointment data');
    })

    mongoose.connection.close();
})