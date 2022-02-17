import { Layout } from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Link from "next/link";
import {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from "next";

//型を推測してくれる
type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<Props> = ({ post }) => {
  if (!post) {
    return <div>loading…</div>;
  }

  return (
    <Layout title="post.title">
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
            <span>Back to blog-page</span>
          </svg>
        </div>
      </Link>
    </Layout>
  );
};

export default Post;

//全てのIDを取得
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  //paths→IDが入っている
  //fallback→アイテムがこれ以上増える可能性がない時false(404対策用)
  return { paths, fallback: false };
};

//params(ID)を受け取って詳細ページの情報を取得
export const getStaticProps: GetStaticProps = async ({ params }) => {
  //このpostは何？
  const { post: post } = await getPostData(String(params?.id));

  return {
    props: { post },
  };
};
