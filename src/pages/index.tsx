import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        <p className="text-4xl font-bold underline">Hello world!</p>
      </Layout>
    </>
  );
};

export default Home;
