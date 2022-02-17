import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        <p className="text-4xl font-bold underline">ようこそ</p>
      </Layout>
    </>
  );
};

export default Home;
