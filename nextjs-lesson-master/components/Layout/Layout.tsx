import {PropsWithChildren} from "react";

import styled from "styled-components";
import {Header} from "components/Header/Header";

export const Layout = (props:PropsWithChildren) => {
const {children} = props
  return (
    <Container>
      <Header/>
      <>{children}</>
    </Container>
  )
}

const Container = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`
