const mongoose=require('mongoose');


const connectDB=async () => {
try{
    // mongodb connection String
    mongoose.set("strictQuery", false);

    const con=await mongoose.connect('mongodb+srv://Shivangi:1234@cluster0.honmyzv.mongodb.net/?retryWrites=true&w=majority',{
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
        
        // useFindAndModify:false,
        // useCreateIndex:true
        
})
    console.log(`MongoDB connected:${con.connection.host}`);

}
catch(err){
    console.log(err);
    process.exit(1);

}
}
module.exports=connectDB


