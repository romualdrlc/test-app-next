import react from "react";
import Link from "next/link";
import Head from "next/head";
import { Card, Button } from "react-bootstrap";
import { Layout } from "../pages/layout";

function HomePage() {
  return (
    <>
      <div>
        <Head>
          <title>App next de romu</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>
      <Layout></Layout>
    </>
  );
}

export default HomePage;
