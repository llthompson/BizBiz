//api-key.js

import path from 'path'
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

export const apiKey = process.env.REACT_APP_MAPS_API_KEY;

export const geocodeApiKey = process.env.REACT_APP_GEOCODE_API_KEY;