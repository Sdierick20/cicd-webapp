import * as mongodb from './mongodb.js';
import * as sqlite from './sqlite.js'; 
//labo test

const database = process.env.MONGO_URL ? mongodb : sqlite;
export default database;
