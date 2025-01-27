import bcrypt from 'bcryptjs';
import db from '../models/index';
import { where } from 'sequelize';
const salt = bcrypt.genSaltSync(10);


let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender == '1' ? true : false,
                roleID: data.roleID,
            })
            resolve('Create new user sussessfully!');
        } catch (error) {
            reject(error);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    })
}

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true,
            });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}

let getUserInfoByID = (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userID },
                raw: true,
            })
            if (user) {
                resolve(user);
            } else {
                resolve({})
            }
        } catch (error) {
            reject(error);
        }
    })
}

let updateUserInfo = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.update(data, {
                where: { id: data.id },
            })
            let allUsers = await db.User.findAll();
            resolve(allUsers);
        } catch (error) {
            console.log(error);
        }
    })
}

let deleteUserByID = (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userID },
            })
            if (user) {
                await user.destroy({
                })
            }
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUsers: getAllUsers,
    getUserInfoByID: getUserInfoByID,
    updateUserInfo: updateUserInfo,
    deleteUserByID: deleteUserByID,
}