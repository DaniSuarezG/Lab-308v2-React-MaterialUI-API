import { useEffect, useState } from "react"
import getPicOfTheDay from "../../Services/PicOfTheDay"
import PicCard from "../../components/PicShow/PicShow"
import './PicOfTheDay.css'

function PicOfTheDay() {
  const [ pic, setPic ] = useState({})

  async function getPic() {
    setPic(await getPicOfTheDay())
  }

  useEffect(() => {
    getPic()
  }, [])

  return (
    <div id='picCard'>
      <div>
      <h2>Nasa´s Picture Of The Day</h2>
      <PicCard pic={ pic }/>
      </div>
    </div>
  )
}

export default PicOfTheDay