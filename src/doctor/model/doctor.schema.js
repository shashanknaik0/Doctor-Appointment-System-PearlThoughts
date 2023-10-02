const mongoose = require("mongoose");
const schema = mongoose.Schema;

doctorSchema = new schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name: {
        type: String,
        required: true,
    },
    age: Number,
    address: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
})

doctor = mongoose.model('doctors', doctorSchema);
module.exports = doctor;