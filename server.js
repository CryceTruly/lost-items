const express=require ('express');
const mongoose=require ('mongoose');
const bodyParser=require ('body-parser');
const items=require('./routes/Items')
const users=require('./routes/users')


const app=express()

app.use(bodyParser.json())
app.use('/api/items',items)
app.use('/api/users',users)


//config
const db=require('./env/keys').mongoURI;

//connect
mongoose.connect(db).then(()=>{
    console.log('MongoDB connected');
    
}) 
const port=process.env.PORT||3000;
app.listen(port,()=>{
console.log('Server Running on port '+port );
}
)