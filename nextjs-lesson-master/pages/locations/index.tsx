import {API} from "../../assets/api/api";
import {CharacterType, LocationType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Header} from "../../components/Header/Header";
import {useQuery} from "@tanstack/react-query";



const getLocations = ()=> {
  return fetch("https://rickandmortyapi.com/api/location", {
    method: "GET"
  } ).then(res=>res.json())
}

const Locations = () => {

  const {data: locations,  } = useQuery<ResponseType<LocationType>>(["locations"], getLocations)

  if (!locations)
    return null
  console.log(locations)
    const locationsList = locations.results.map(location=>
      <div key={location.id}>{location.name}</div>
    )




  return (
    <PageWrapper>
      <Header/>
      {locationsList}
    </PageWrapper>
  );
};

export default Locations;