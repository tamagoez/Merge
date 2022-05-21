import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import { LoginComponent } from "../components/Auth";

const Home: NextPage = () => {
  return (
    <div className="bg-base-200">
      <Head>
        <title>Merge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left pl-3">
            <h1 className="text-5xl font-bold">Merge</h1>
            <p className="py-8">
              Web application to work / enjoy by yourself or with community!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <LoginComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
