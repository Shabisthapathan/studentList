const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const config=require('./config/index');
const studentRouter=require('./routes/studentRouter');
const app=express();
const port =3000;

app.use(bodyParser.json());
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(config.dbConStr)
.then(res=>console.log('Connected to MongoDb'))
.catch(err=> console.log('failed to connect to db'));



app.use('/api/studentlist', studentRouter );