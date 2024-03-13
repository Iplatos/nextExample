import {CharacterType, RickAndMortyApi,ResponseType} from "assets/api/rick-and-morty-api";
import {API} from "assets/api/api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";

import Image from "next/image";
import {Header} from "components/Header/Header";
import {CharacterCard} from "components/Card/CharacterCard/CharacterCard";


export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters()
  return { props: { characters } }
}
type PropsType = {
  characters: ResponseType<CharacterType>
}

const Characters = (props: PropsType) => {
  const {characters} = props
  return (
    <PageWrapper>
      <Header/>
      <>{characters.results.map(character=><CharacterCard key={character.key} character={character}  />)}</>
    </PageWrapper>

  )
}
export default Characters