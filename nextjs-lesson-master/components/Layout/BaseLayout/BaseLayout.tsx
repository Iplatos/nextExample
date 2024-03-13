import {PropsWithChildren, ReactElement} from "react";
import {NextPage} from "next";
import {Layout} from "components/Layout/Layout";

export const BaseLayout  = (props:PropsWithChildren) => {
  const {children} = props
  return (<Layout>wut{children}</Layout>)
}

export function getLayout(page:ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
export const getSimpleLayout = (page:ReactElement) => {
  return (
    <>{page}</>
  )
}