import { useEffect, useState } from "react"
import getPicOfTheDay from "../../Services/PicOfTheDay"
import PicCard from "../../components/PicCard/PicCard"

function PicOfTheDay() {
  const [ pic, setPic ] = useState()

  async function getPic() {
    setPic(await getPicOfTheDay())
  }

  useEffect(() => {
    getPic()
  }, [])
  
  return (
    <div>
      <PicCard pic={ pic }/>
    </div>
  )
}

export default PicOfTheDay