import {FC, PropsWithChildren, ReactElement} from "react";
import {useRouter} from "next/router";


export const LoginNavigate = ({children}) => {

  const router = useRouter()

  let isAuth = false

  if (!isAuth) { router.push("/") }


  return <div>{children}</div>
}