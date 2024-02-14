import {API} from "../../assets/api/api";
import {getLayout} from "../../components/Layout/BaseLayout/BaseLayout";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {CharacterType} from "../../assets/api/rick-and-morty-api";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";

export const getStaticPaths = async () => {
  const {results} = await API.rickAndMorty.getCharacters()

  const paths = results.map(character=>({
    params: {id:String(character.id)}
  }))
return {
    paths,
  fallback:"blocking"
}
}

 export const getStaticProps: GetStaticProps = async ({params})=>{
    const {id} = params || {}
    const character = await API.rickAndMorty.getCharacter(id as string)
    console.log(character)
    if(!character){
      return {
        notFound:true
      }
    }
  return {
      props: {
        character
      }
  }
}

type PropsType = {
    character:CharacterType
}

const Character = (props:PropsType) => {
const {character} = props

  const router = useRouter()
  if (router.isFallback) return <h1>loading</h1>

  return (
    <div>
      <CharacterCard  character={character}/>
    </div>

  )
}
Character.getLayout = getLayout
export default Character