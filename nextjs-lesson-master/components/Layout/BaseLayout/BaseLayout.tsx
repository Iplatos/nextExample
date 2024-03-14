import {PropsWithChildren, ReactElement} from "react";
import {NextPage} from "next";
import {Layout} from "components/Layout/Layout";
import {Header} from "components/Header/Header";

export const BaseLayout  = (props:PropsWithChildren) => {
  const {children} = props
  return (<Layout>{children}</Layout>)
}

export function getLayout(page:ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
export const getSimpleLayout = (page:ReactElement) => {
  return (

    <>
      im simple
      {page}</>
  )
}