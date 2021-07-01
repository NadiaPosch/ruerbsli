import Head from "next/head";
import Link from "next/link";
import Chilli from "../data/chilli.json";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Workout Planner</title>
        <meta name="description" content="Fit as a Show" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main grid">
        <Link href="/rezept/chilli">
          <a>
            <div className="card">{Chilli.name}</div>
          </a>
        </Link>

        <div className="card">content</div>
        <div className="card">content</div>

        <div className="card">content</div>
        <div className="card">content</div>
        <div className="card">content</div>

        <div className="card">content</div>
        <div className="card">content</div>
        <div className="card">content</div>
      </main>
    </div>
  );
}
