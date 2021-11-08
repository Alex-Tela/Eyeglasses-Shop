import axios from "axios";

export const axios_ = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 
        post: {
            'Content-Type': 'application/json',
        },
        get: {
            'Content-Type': 'application/json',
        }
    }
});