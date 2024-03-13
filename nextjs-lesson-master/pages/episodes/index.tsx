// @ts-nocheck
import {API} from "assets/api/api";
import {EpisodeType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {Card} from "components/Card/Card";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import {GetServerSideProps} from "next";


export const getServerSideProps = async ({res}) => {

  const episodes = await API.rickAndMorty.getEpisodes()
/*
  res.setHeader("Cache-Control", "public", "s-maxage=10", "state-while-revalidate=100")
*/

  const isAuth = false
  if (!episodes){
    return {
      notFound:true
    }
  }
if (!isAuth){
  return {
    redirect:{
      destination:"/test",
      permanent:false
    }
  }
}
  return {
    props:{
      episodes
    }
  }
}

type PropsType = {
  episodes: ResponseType<EpisodeType>
}

const Episodes = (props:PropsType) => {
  const {episodes} = props
const episodesList = episodes.results.map(ch=><Card key={ch.id} name={ch.name}/>)


  return (
    <PageWrapper>
      {episodesList}
    </PageWrapper>
  );
};
Episodes.getLayout = getLayout
export default Episodes;