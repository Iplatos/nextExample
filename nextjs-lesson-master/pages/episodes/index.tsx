import {CharacterType, RickAndMortyApi, ResponseType, EpisodeType} from "assets/api/rick-and-morty-api";
import {API} from "assets/api/api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";

import Image from "next/image";
import {Header} from "components/Header/Header";


export const getServerSideProps = async () => {
  const episodes = await API.rickAndMorty.getEpisodes()
  if (!episodes){
    return {
      notFound: true
    }
  }
  return { props: { episodes } }
}
type PropsType = {
  episodes: ResponseType<EpisodeType>
}

const Episodes = (props: PropsType) => {
  const {episodes} = props
  return (
    <PageWrapper>
      <Header/>
      <>{episodes.results.map(episodes=><div key={episodes.id}>{episodes.name}</div>)}</>
    </PageWrapper>

  )
}
export default Episodes