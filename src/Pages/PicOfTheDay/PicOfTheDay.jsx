import { useEffect, useState } from "react"
import getPicOfTheDay from "../../Services/PicOfTheDay"
import PicShow from "../../components/PicShow/PicShow"
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
    <div id='picShow'>
      <div>
      <h2>Nasa´s Picture Of The Day</h2>
      <PicShow pic={ pic }/>
      </div>
    </div>
  )
}

export default PicOfTheDay