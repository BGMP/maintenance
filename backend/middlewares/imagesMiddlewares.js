const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const route ='./upload/'+req.params.archivo
        if(!fs.existsSync(route)){
            fs.mkdirSync(route, {recursive: true})
        }
        cb(null,ruta)
    },
    filename:function (req, file, cb){
        let fecha = new Date();
        fecha = fecha.getFullYear() + '-' + fecha.getMonth() + '-' + fecha.getDate() + '-' + fecha.getHours + ':' + fecha.getMinutes()
        const nameFile = fecha+' '+file.originalname
        cb(null,nameFile)
    }
})

const upload = multer({
    storage:storage,
    fileFilter:function (req,file,cb){
        if(file.mimeType === 'image/png'){
            console.log("el archivo es un png")
        }else{
            console.log("el archivo tiene otra extension")
        }
        cb(null, true)
    },
    limits: {
        fileSize: 1024 * 1024
    }
})

function authPostRegistry(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}
module.exports ={
    upload,
    authPostRegistry
}