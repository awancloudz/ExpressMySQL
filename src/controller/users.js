const UserModel = require('../models/users');
const getAllUsers = async (req, res)=>{
    try {
        const [data] = await UserModel.getAllUsers();
        res.json({
            message:"GET All Users Success!",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error!",
            serverMessage: error,
        })
    }
}

const createNewUsers = async(req, res)=>{
    const {body} = req;
    if(!body.name || !body.email || !body.address){
        return res.status(400).json({
            message: "Anda mengirimkan data yang salah",
            data: null,
        })
    }
    try {
        await UserModel.createNewUsers(body);
        res.status(201).json({
            message:"CREATE New Users Success!",
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error!",
            serverMessage: error,
        })  
    }
}

const updateUsers = async (req, res)=>{
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UserModel.updateUsers(body, idUser);
        res.json({
            message:"UPDATE User Success!",
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error!",
            serverMessage: error,
        })         
    }
}

const deleteUsers = async (req, res)=>{
    const {idUser} = req.params;
    try {
        await UserModel.deleteUsers(idUser);
        res.json({
            message:"DELETE User Success!",
            data: null,
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error!",
            serverMessage: error,
        })         
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers,
}