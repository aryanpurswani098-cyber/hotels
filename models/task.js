const mongoose=require('mongoose');
const taskSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:['High','Low','Medium'],
        default:'Medium'
    },
    dueDate:{
        type:Date,
        required:true
    }
});
const taskItem=mongoose.model('taskItem',taskSchema);
module.exports = taskItem;