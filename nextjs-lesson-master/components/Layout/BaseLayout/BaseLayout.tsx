// @ts-nocheck
import { ReactNode } from "react";
import { Layout } from "../Layout";

interface BaseLayoutProps {
  children?: ReactNode;
}
// @ts-ignore
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return <Layout>{children}</Layout>;
};

export function getLayout(page: JSX.Element) {
  return <BaseLayout>{page}</BaseLayout>;
}