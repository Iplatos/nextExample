// @ts-nocheck
import {API} from "../../assets/api/api";
import {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {getLayout} from "../../components/Layout/BaseLayout/BaseLayout";
import * as path from "path";
import * as fs from "fs";


export const getStaticProps = async ()=>{
const getParseData = async ()=>{
  const filePath = path.join(process.cwd(), "public", "staticData")
  try{
const jsonData = await fs.readFile
    return JSON.parse(jsonData.toString())
  } catch (err){
return {title:"no Title"}
  }
}
  const title = ""
  return {
    props:{
      title
    },
  }
}

type PropsType = {
  title: string
}

const Test = (props:PropsType) => {
  const {title} = props


  return (
    <PageWrapper>
      <>asd</>
      {title}
    </PageWrapper>
  );
};
Test.getLayout = getLayout
export default Test;