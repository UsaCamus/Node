import mongoose from "mongoose";
import { TodelModel  } from "./todo.model";
import { UserModel } from "./user.model";

mongoose.set('strictQuery',true)

/* #1
async function createTodo(){
    await( mongoose.connect('mongodb+srv://Futureskill-user:admin1234@cluster0.a3zz8pm.mongodb.net/') );
    const newTodo = new TodelModel({name:"Node js Task1",status:"In Progress"});
    const result = await newTodo.save()

    console.log('result',result)
}

createTodo();
*/

/* #2 Operator 
    in                      $in:['test-uer-0.7564005182408331','test-uer-0.13597298704687844']
    and                     findOneAndUpdate({ username: 'update-future-user', password: '1112223344' }
    or                      $or: [ { password: '1112223344',} , {username: 'usa sawadee'} ]
    less than               $lt
    greater than            $qt
    less than or Equal      $lte
    greater than or Equal   $qte

    Partail Search
    regular expression
    $regex: /^test/,    //ขึ้นต้น
    $regex: /2$/,       //ลงท้าย
    $regex: /Test/i,    //sensitive ตัวเล็กใหญ่
*/

mongoose.connect('mongodb+srv://Futureskill-user:admin1234@cluster0.a3zz8pm.mongodb.net/')

async function createUser(){
    const newUser = new UserModel({
        username: `test-uer-${Math.random()}`,
        password: "1112223344",
        email: `test-uer-${Math.random()}@test.com`
    });
    const result = await newUser.save();
    console.log('result',result)
    await newUser.save()
}
// createUser();

/* delete one */
async function deleteUser(){
    await UserModel.deleteOne({
        _id: '67edecac943ab08ba76182d3'
    })
    console.log('delete')
}
// deleteUser();

/* delete many */
async function deleteUsers(){
    await UserModel.deleteMany({
        username: {
            $in:['test-uer-0.7564005182408331','test-uer-0.13597298704687844']
        }
    })
    console.log('deleteIn')
}
// deleteUsers();

/* update */
async function updateUser(){
    await UserModel.findByIdAndUpdate('67ed1584d171a0ca5de5db37' , {
        username: 'update-future-user',
        birthDate: new Date(),
    });

    /* update by username คล้ายๆ where*/
    // await UserModel.findOneAndUpdate({
    //     username: 'update-future-user',
    //     password: '1112223344'
    // },{
    //     birthDate: new Date(0)
    // });
}
// updateUser();

async function findUser(){
    /* all */
        // const listUser = await UserModel.find({});
    /* all where */
        const listUser = await UserModel.find({
            // password: '1112223344' // #1
            $or: [ { password: '1112223344',} , {username: 'usa sawadee'} ] // #2
        });
    console.log(listUser);
}
// findUser();