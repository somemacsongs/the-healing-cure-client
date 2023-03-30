import axios from "axios";

const apiURLs = {
    development: "http://localhost:4000/the-healing-cure",
    production: "https://the-healing-cure.cyclic.app/the-healing-cure"
}

const api = axios.create({baseURL: apiURLs[process.env.NODE_ENV]});

export {api};