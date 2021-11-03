import axios from "axios";

export const axios_ = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 'Content-Type': 'application/json'}
});