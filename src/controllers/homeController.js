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
}