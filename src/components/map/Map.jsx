import Container from "../../utils/index";
import { useSelector } from "react-redux";

const Map = () => {
    const data = useSelector(state => state.searchData);

  return (
    <Container>
        <div className="w-full p-5 bg-white rounded-2xl">
            {
                data && 
                <iframe height={300} width={"100%"} src={`https://maps.google.com/maps?q=${data.location.name}%20Dates%10Products&amp;t=&amp;z=12&amp&output=embed`}></iframe>
            }
        </div>
    </Container>
  )
}

export default Map