import {CharacterType, ResponseType} from "assets/api/rick-and-morty-api";
import {API} from "assets/api/api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
/*
import {CharacterCard} from "components/Card/CharacterCard/CharacterCard";
*/
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import dynamic from "next/dynamic";

const CharacterCard = dynamic(()=> import("components/Card/CharacterCard/CharacterCard")
  .then(module => module.CharacterCard),
  )

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters()
  return {
    props: { characters } ,
  revalidate:10
  }
}
type PropsType = {
  characters: ResponseType<CharacterType>
}
//test
const Characters = (props: PropsType) => {
  const {characters} = props
  return (
    <PageWrapper>
      <>{characters.results.map(character=><CharacterCard key={character.id}  character={character}  />)}</>
    </PageWrapper>

  )
}
Characters.getLayout = getLayout
export default Characters