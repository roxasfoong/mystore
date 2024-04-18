import bcrypt from 'bcryptjs';

const users = [

    {

        name: 'SuperAdmin',
        email: 'admin@email.com',
        password: bcrypt.hashSync('12345678',10),
        isAdmin: true,

    },

    {

        name: 'Johnny',
        email: 'johnny@email.com',
        password: bcrypt.hashSync('12345678',10),
        isAdmin: false,

    },

    {

        name: 'Jahnny',
        email: 'jahnny@email.com',
        password: bcrypt.hashSync('12345678',10),
        isAdmin: false,

    },

];

export default users;