const studentModel=require('../model/studentModel');


const add=(data)=>{
    const user=new studentModel(data);
    return user.save();
};


const getUsers=()=>{
    const projection={__v:0,_id:0,password:0};
    const filter={};
    return studentModel.find(filter,projection);
}
const getUser = (email) => {
    return studentModel.findOne({ email }, { password: 1, email: 1, firstName: 1, lastName: 1 });
}

const deleteStudentList = (email) =>{

    return studentModel.deleteOne(email);
       
}
module.exports={add,getUsers,getUser,deleteStudentList};