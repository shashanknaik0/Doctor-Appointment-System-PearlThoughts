const mongoose = require("mongoose");
const schema = mongoose.Schema;

appointmentSchema = new schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctors',
        required: true,
    },
    patient: {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
    },
    date: {
        type: Date,
        required: true,
    }
})

appointment = mongoose.model('appointments', appointmentSchema);
module.exports = appointment;