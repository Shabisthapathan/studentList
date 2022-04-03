const express=require('express');
const studentCtrl=require('../controllers/studentCtrl');
const router=express.Router();


router.post('/signup', studentCtrl.register)
router.post('/signin', studentCtrl.signin);
router.get('/',studentCtrl.getUsers);
router.delete('/:email',studentCtrl.deleteStudentList);
module.exports=router;