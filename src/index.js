require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');

const app = express();

/*
app.method(path, handler);
app.use("/", (req, res, next)=>{
    res.send("Hello World");
     res.json({
         message:"Welcome Home! (GET)"
     });
});
*/

//Route ke => Middleware
app.use(middlewareLogRequest);
app.use(express.json());        //Mengijinkan JSON Request
app.use('/assets',express.static('public/images'));
app.post('/upload',upload.single('photo'),(req, res) => {
    res.json({
        message: "Upload Berhasil!"
    })
});
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})
//Route ke => Controller
app.use('/users', usersRoutes);

//Running Server at Port
app.listen(PORT, ()=>{
    console.log(`Server runing di port ${PORT}`);
});