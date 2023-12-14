
import Head from "next/head";
import Link from "next/link";
import Nav from "~/components/Nav";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>mxtchjohnston</title>
        <meta name="description" content="A Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#023b6d] to-[#000000]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Mitch Johnston
          </h1>
         </div>
         
      </main>
    </>
  );
}


