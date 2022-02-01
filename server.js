const express = require('express');
const app = express();
const mongoose =  require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

const port=  process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());

//mongodb database connected
const db = process.env.ATLAS_URI;
mongoose.connect(db,() => {
	console.log('Mongodb database connected')
})

//routes
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);

app.listen(port,()=> {
	console.log(`Server is running at port ${port}`)
})