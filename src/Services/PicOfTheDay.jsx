import { api } from "./config";

async function getPicOfTheDay() {
    const { data } = await api.get('/apod?api_key=DEMO_KEY')
    console.log(data)
    const { copyright, date, explanation, title, url, hdurl } = data
    return { copyright, date, explanation, title, url, hdurl }
}

export default getPicOfTheDay