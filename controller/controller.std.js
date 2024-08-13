const student=require('../model/structure.std')


const getallstd=async(req,res)=>{
  try{
    const stds=await student.find();
    return res.json(stds);  
  }catch(error){
   return res.status(500).json({message:"this is error from getallstd"})
  }
}
const createstd= async(req,res)=>{
   //validation 
   const newwstd= new student({
    name:req.body.name,
    age:req.body.age,
    city:req.body.city
   });
   try{
    const std=await newwstd.save();
  return res.status(201).json(std);
   }catch(error){
  return res.status(400).json({message:"error in creation of std"})
   }
}
const updatestd=async(req,res)=>{
try{
    const result= await  student.findByIdAndUpdate(
        {_id:req.params.id},
        {
            name:req.body.name,
            age:req.body.age,
            city:req.body.city
        },
        {
            new:true
        }
        );
        return res.status(200).json(result);
}
catch(error){
    return res.status(400).json({"message":"this update error"})
}
}

const delstd=async(req,res)=>{
try{
    await student.deleteOne({_id:req.params.id});
    return res.json({"message":"deleted succefully"});
} catch(error){
    return res.status(400).json({"message":"the error in delete"})
}
}

module.exports={getallstd,createstd,updatestd,delstd};