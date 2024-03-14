import {getLayout, getSimpleLayout} from "components/Layout/BaseLayout/BaseLayout";

import {CharacterType, ResponseType} from "assets/api/rick-and-morty-api";
import {CharacterCard} from "components/Card/CharacterCard/CharacterCard";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import {API} from "assets/api/api";


export const getStaticPaths = async () => {
  const {results} = await API.rickAndMorty.getCharacters()
  const paths = results.map(character => ({params: {id: String(character.id)}
  }))

  return {
    paths,
  fallback: true
  }
}


export const getStaticProps = async ({params}) => {
  const {id} = params || {}
  const character = await API.rickAndMorty.getCharacter(id as string)
  if (!character){
    return {
      notFound:true
    }
  }

  return {props: {character}}
}

type PropsType = {
  character:ResponseType<CharacterType>
}

const Character = (props:PropsType) => {
  const router = useRouter()
  if (router.isFallback) return <>loading...</> ///что то ненерируется
  const {character} = props

  return (<>
    <div>{router.query.id}</div>
    <div>{character.id}</div>
    <CharacterCard character={character}  />
    <button onClick={()=>router.push("/")}>back</button>
    </>

  )

}
Character.getLayout = getLayout
export default Character