const express=require('express');
const app=express();
app.use(()=>{
    console.log('Hello')
    console.log('Hello lagi')
})
app.listen(4000);