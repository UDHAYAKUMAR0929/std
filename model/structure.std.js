const {Schema,model}=require('mongoose');

const schema=new Schema({
 name:{
    type:String,
    require:true
 },
 age:{
    type:Number,
    require:true,
 },
 city:{
    type:String,
    require:true
 }
});
const student=model('student',schema);

module.exports=student;