import {PropsWithChildren, ReactElement} from "react";
import {Layout} from "components/Layout/Layout";

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