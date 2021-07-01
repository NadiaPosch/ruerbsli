import Head from "next/head";
import Chilli from "../../data/chilli.json";

export default function Rezept() {
  return (
    <div className="container">
      <Head>
        <title>Workout Planner</title>
        <meta name="description" content="Fit as a Show" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main grid">
        <div className="card">Rezept</div>
        <img src={Chilli.bild} alt="Chilli" />
      </main>
    </div>
  );
}
