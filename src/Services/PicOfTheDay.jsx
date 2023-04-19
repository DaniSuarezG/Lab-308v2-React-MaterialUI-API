import { api } from "./config";

function getPicOfTheDay() {
    const { copyright, date, explanation, title, url, hdurl } = api.get()
    return { copyright, date, explanation, title, url, hdurl }
}

export default getPicOfTheDay