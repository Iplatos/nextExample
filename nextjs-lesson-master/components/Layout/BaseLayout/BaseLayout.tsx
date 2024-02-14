import {NextPage} from "next";
import {PropsWithChildren, ReactElement} from "react";
import {Layout} from "../Layout";

const BaseLayout = (props:NextPage<PropsWithChildren>) => {
  const {children} = props
  return <Layout>{children}</Layout>
}

export function getLayout (page:ReactElement) {
return <BaseLayout>{page}</BaseLayout>
}