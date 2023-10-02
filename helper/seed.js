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
        "_id": "64f4344c042d8411e46815e2",
        "name": "shashank",
        "age": 30,
        "address": "abc hospital",
        "specialty":"Cardiologist"
    },
    {
        "id": 999999,
        "_id": "64f434a7042d8411e46815e5",
        "name": "abc",
        "age": 36,
        "address": "xyz hospital",
        "specialty":"Oncologist"
    },
    {
        "id": 738282,
        "_id": "64f434df042d8411e46815e8",
        "name": "xyz",
        "age": 40,
        "address": "abc hospital",
        "specialty":"Dentist"
    }
];

const appointments = [
    {
        "doctor":"64f4344c042d8411e46815e2",
        "patient":{
            "name": "abcd",
            "age":30
        },
        "date": "2023-10-4"
    },
    {
        "doctor":"64f4344c042d8411e46815e2",
        "patient":{
            "name": "efgh",
            "age":30
        },
        "date": "2023-10-5"
    },
    {
        "doctor":"64f434a7042d8411e46815e5",
        "patient":{
            "name": "ijkl",
            "age":38
        },
        "date": "2023-10-4"
    },
    {
        "doctor":"64f434df042d8411e46815e8",
        "patient":{
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