import {LocationType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Header} from "../../components/Header/Header";
import {dehydrate, useQuery} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import {Card} from "components/Card/Card";
import {getSimpleLayout} from "components/Layout/BaseLayout/BaseLayout";


const getLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location", {
    method: "GET"
  }).then(res => res.json())
}


const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.fetchQuery(["locations"], getLocations)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const Locations = () => {
  const {data: locations} = useQuery<ResponseType<LocationType>>(["locations"], getLocations)

  if (!locations)
    return null


  const locationsList = locations.results.map(location =>
    <Card key={location.id} name={location.name}/>)


  return (
    <PageWrapper>
<Header/>
      {locationsList}
    </PageWrapper>
  );
}
Locations.getLayout = getSimpleLayout
export default Locations;