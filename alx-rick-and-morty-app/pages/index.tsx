import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ALX Rick and Morty App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container">
        <h1>ALX Rick and Morty</h1>
        <p>Your app is running. Navigate to / to see this page.</p>
      </main>
    </>
  );
};

export default Home;
