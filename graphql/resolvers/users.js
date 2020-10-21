const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

module.exports = {
    Mutation: {
        register(_, args, context, info){
            const {
                registerInput: {
                    username, 
                    email,
                    password, 
                    confirmPassword
                }
            } = args;
            // validate data
            // make sure user doesnt already exist
            // hash password and create  
            password = await bcrypt.hash(password, 12);
            const newUser = new User({
                email: email,
                username: username,
                password: password,
                createdAt: new Date().toString()
            });
            const res = await newUser.save();

            const token = kwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            });
        }
    }
}