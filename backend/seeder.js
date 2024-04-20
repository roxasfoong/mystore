import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import users from "./data/user.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        // Create user documents
        const createdUsers = await User.create(users);

        // Extract the _id of the first user (assuming it's the admin user)
        const adminUserId = createdUsers[0]._id;

        // Map over products and assign the admin user's _id to each product
        const sampleProducts = products.map(product => ({
            ...product,
            user: adminUserId,
        }));

        // Insert products into the database
        await Product.insertMany(sampleProducts);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async() => {

    try{

        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!');
        process.exit();

    } catch (error){

        console.error(`${error}`);
        process.exit(1);

    }

};

if(process.argv[2] === '-d'){

    destroyData();

} else{

    importData();

}