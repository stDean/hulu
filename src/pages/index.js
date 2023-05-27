import Head from "next/head";

import { Header } from "@/components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu - Clone</title>
        <link rel="icon" href="/hulu.png" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  )
}
