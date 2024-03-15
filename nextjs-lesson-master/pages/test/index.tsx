import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import * as path from "path"
import fs from "fs/promises";


export const getStaticProps = async ()=>{
  const getParsedData = async () => {
    const filePath = path.join(process.cwd(), "public", "statiData.json")
    try{
      const jsonData = await fs.readFile(filePath)
      return JSON.parse(jsonData.toString())
    }catch (err){
    return "no title"
    }
  }
const {title} = await getParsedData()
  return {
    props:{
      title
    }
  }
}


const Test = (props:{title:string}) => {
  const {title} = props
  return (
    <div style={{backgroundColor:"red"}}>{title}</div>
  )
}
Test.getLayout = getLayout
export default Test