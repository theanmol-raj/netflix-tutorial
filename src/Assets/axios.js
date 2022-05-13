import axios from "axios";

const answer = axios.create({baseURL : "https://api.themoviedb.org/3"})

export default answer;


