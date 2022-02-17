import { Layout } from "../components/Layout";
import { Post } from "../components/Post";
import { getAllPostsData } from "../lib/posts";
import { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";

//型を推測してくれる
type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post: any) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};
