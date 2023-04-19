import { api } from "./config";

async function getPicOfTheDay() {
    const { copyright, date, explanation, title, url, hdurl } = await api.get()
    return { copyright, date, explanation, title, url, hdurl }
}

export default getPicOfTheDay