exports.isDateInFuture = (date) =>{
    return date > new Date();
}

exports.isSunday = (date) =>{
    return date.getDay() !== 0;
}