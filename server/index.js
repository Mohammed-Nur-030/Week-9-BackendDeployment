const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.get("/",(req,res)=>res.json(
    `This is the Change is made and this was updated on website through github CD.............
    And After Some Erros and changing the INstance and Modifying the code for the New Url i could do it
    Changing the INdex and Push it to github and doing nothing...Github CD is going it..
    `
    ));


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://xyznur786:aKcPsKhPFL0A3ZDK@cluster0.ao6uktc.mongodb.net/week-9', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000'));
