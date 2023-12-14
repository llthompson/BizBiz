import path from 'path'
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log(process.env)
export const apiKey = process.env.REACT_APP_API_KEY;
