import {API} from "../../assets/api/api";
import {getLayout} from "../../components/Layout/BaseLayout/BaseLayout";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {CharacterType} from "../../assets/api/rick-and-morty-api";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import styled from "styled-components";

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
      <Button onClick={()=>router.push("/characters")}>go to characters</Button>
      <IdText>id:{router.query.id}</IdText>
      <CharacterCard  character={character}/>
    </div>

  )
}
Character.getLayout = getLayout
export default Character

const IdText = styled.div`
font-size:38px
`
const Button = styled.button`
background-color: #fa52d3;
`