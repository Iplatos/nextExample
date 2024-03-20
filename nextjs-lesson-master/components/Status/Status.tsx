import Image, {StaticImageData} from "next/image";

type PropsType = {
  status:string
  src:StaticImageData
}

export const Status = (props:PropsType) => {
  const {status, src} = props
  return (

    <Image src={src} width={30} height={30} alt={"status"}/>


  )

}