import Head from "next/head";

import { Header, NavBar, Result } from "@/components";
import request from "@/utils/request";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu - Clone</title>
        <link rel="icon" href="/hulu.png" />
      </Head>

      <main>
        <Header />
        <NavBar />
        <Result results={results} />
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const { genre } = context.query;
  const res = await fetch(`${request[genre]?.url || request.fetchTrending.url}`);
  const { results } = await res.json();

  return {
    props: {
      results
    }
  }
}