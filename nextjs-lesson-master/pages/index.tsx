import Image from 'next/image';
import {NextPageWithLayout} from './_app';
import {PageWrapper} from '../components/PageWrapper/PageWrapper';
import {Header} from '../components/Header/Header';
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import {QueryClient} from "@tanstack/query-core";
import {dehydrate, useQuery} from "@tanstack/react-query";
import {LocationType, ResponseType} from "assets/api/rick-and-morty-api";


const getHello = () => {
  return fetch("/api/hello", {
    method: "GET"
  }).then(res => res)
}

const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.fetchQuery(["hello"], getHello)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const Home: NextPageWithLayout = (props:{name:string}) => {
  const {name} = useQuery(["hello"], getHello)
  console.log(name)
  return (
    <PageWrapper>
      <div>{name}</div>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </PageWrapper>
  );
}
Home.getLayout = getLayout
export default Home;
