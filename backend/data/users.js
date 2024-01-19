import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Rahul',
    email: 'rahul@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rohan',
    email: 'rohan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
