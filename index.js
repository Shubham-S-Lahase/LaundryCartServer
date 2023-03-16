const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const url = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);
 
const app = require('./app');
dotenv.config();

async function main() {
    await mongoose.connect(url);
    console.log('Connected to database');
    app.listen(port, () => console.log(`Server is running at PORT => ${port}`));
};
main();