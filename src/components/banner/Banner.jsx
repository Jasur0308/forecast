import Container from "../../utils"
import { useSelector } from "react-redux"

const Banner = () => {
  const data = useSelector(state => state.searchData);
  

  return (
    <Container>
      <div className='bg-banner bg-cover bg-center rounded-[20px] h-[400px] mt-[50px] overflow-hidden shadow-3xl'>
        <div className="bg-linear-color w-full h-full p-10 flex items-end">
          {
            data && 
            <div className="flex items-end justify-between w-full">
              <div>
                <div className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-full">
                  <img width={100} src={data.current.condition.icon} alt="" />
                </div>
                <h1 className="text-9xl text-white font-bold">{data.current.temp_c}°</h1>
                <h2 className="text-4xl text-white">{data.location.name}, {data.location.country}</h2>
              </div>
              <div className="text-right font-semibold">
                <p className="text-white text-3xl">{data.current.last_updated.split(" ")[1]}</p>
                <p className="text-white">Last Updated time</p>
              </div>
            </div>
          }
        </div>
      </div>
    </Container>
  )
}

export default Banner

// https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=Tashkent&days=7&aqi=yes&alerts=yes