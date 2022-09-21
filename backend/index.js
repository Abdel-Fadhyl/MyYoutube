const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const app = express();
const userRoute = require("./routes/user");
const videoRoute = require("./routes/video");
//MONGODB
app.use(fileUpload({
    createParentPath: true
}));

mongoose.connect("mongodb+srv://raphael:test@cluster0.pmtzg.mongodb.net/myapi?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Mongodb is connect")
        else console.log("Connection error" + err)
    });

app.use(express.json());
app.use(cors());
app.use("/", userRoute,videoRoute);
//app.use("/", videoRoute);

port = 8080;
app.listen(port, () => console.log('Server listening on port '+ port));
