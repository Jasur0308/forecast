import { GiBroadheadArrow } from "react-icons/gi"; 
import { BsSunrise } from "react-icons/bs"; 
import { BsSunset } from "react-icons/bs"; 
import { BiSun } from "react-icons/bi"; 
import { BiDroplet } from "react-icons/bi"; 
import { useSelector } from 'react-redux'
import Container from '../../utils/index'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Indicators = () => {
    const data = useSelector(state => state.searchData);
    if (!data) return null;

    const labels = data.forecast.forecastday[0].hour.map(hour => hour.time.slice(10, 16));
    const chartdata = {
        labels: labels,
        datasets: [
            {
                label: "Weather data for " + data.location.name,
                backgroundColor: "#4338ca",
                borderColor: "#4338ca",
                data: data.forecast.forecastday[0].hour.map(hour => hour.temp_c),
            },
        ],
    };

    return (
        <Container>
            <div className='flex h-[500px] gap-5'>
                <div className='max-w-[400px] w-full flex flex-col gap-5'>
                    <div className='bg-white shadow-3xl max-h-[250px] flex-1 grid grid-cols-2 grid-rows-2 rounded-2xl p-5'>
                        <div className="flex items-center gap-4 p-4">
                            <BiDroplet className="text-3xl text-indigo-700" />
                            <div>
                                <span>Humidity</span>
                                <br />
                                <span className="text-lg font-bold">{data.current.humidity}%</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-4 border-l-2 border-indigo-200">
                            <BsSunset className="text-3xl text-indigo-700" />
                            <div>
                                <span>Sunset</span>
                                <br />
                                <span className="text-lg font-bold">{data.forecast.forecastday[0].astro.sunset}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-4">
                            <BiSun className="text-3xl text-indigo-700" />
                            <div>
                                <span>UV index</span>
                                <br />
                                <span className="text-lg font-bold">{data.current.uv}</span>
                            </div>                    
                        </div>
                        <div className="flex items-center gap-2 p-4 border-l-2 border-indigo-200">
                            <BsSunrise className="text-3xl text-indigo-700" />
                            <div>
                                <span>Sunrise</span>
                                <br />
                                <span className="text-lg font-bold">{data.forecast.forecastday[0].astro.sunrise}</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-3xl items-center flex gap-4 flex-1 px-5 rounded-2xl'>
                        <div className="flex-1 aspect-square flex items-center justify-center rounded-full bg-pressure bg-cover bg-no-repeat bg-center">
                            <p className="text-2xl">{data.current.pressure_mb + "Pa"}</p>
                        </div>
                        <div className="flex-1 aspect-square rounded-full bg-compass bg-90 bg-no-repeat bg-center flex items-center justify-center shadow-4xl">
                            <div style={{transform: `rotate(${data.current.wind_degree}deg)`}} className="w-[2px] h-[50%] bg-black relative transition-all duration-500">
                                <GiBroadheadArrow className="transform rot" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 bg-white shadow-3xl p-5 rounded-2xl'>
                    <h4 className="text-center mb-4 font-bold">Weather data for {data.location.name} with charts</h4>
                    <Line data={chartdata}/>
                </div>
            </div>
        </Container>
    )
}

export default Indicators;