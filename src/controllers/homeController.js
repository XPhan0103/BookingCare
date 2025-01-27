import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        // console.log('--------------------------------');
        // console.log(data);
        // console.log('--------------------------------');
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (exception) {
        console.log(exception)
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUDPage = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('POST CRUD from Server');
}

let getCRUD = async (req, res) => {
    let data = await CRUDService.getAllUsers();
    console.log('--------------------------------');
    console.log(data);
    console.log('--------------------------------');

    return res.render('displayCRUD.ejs', {
        dataTable: data //truyen bien sang file view
    })
}

let editCRUD = async (req, res) => {
    let userID = req.query.id;
    if (userID) {
        let userData = await CRUDService.getUserInfoByID(userID);
        //check user data not found

        //let userData

        return res.render('editCRUD.ejs', {
            userInfo: userData, // x <- y
        });

    } else {
        return res.send('User not found!');
    }
}

let putCRUD = async (req, res) => {
    let data = await req.body;
    let allUsers = await CRUDService.updateUserInfo(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}

// object: {
//     key: ''
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUDPage: getCRUDPage,
    postCRUD: postCRUD,
    getCRUD: getCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
}