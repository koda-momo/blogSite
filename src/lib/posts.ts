//サーバサイドでのfetch
import fetch from "node-fetch";
import { ParsedUrlQuery } from "querystring";
import { postType } from "../types/type";

//エンドポイント
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

//データの取得
export const getAllPostsData = async () => {
  const res = await fetch(apiUrl);
  const posts = await res.json();
  return posts;
};

export const getAllPostIds: () => Promise<
  {
    params: {
      id: string;
    };
  }[]
> = async () => {
  //ここまでは上記と同じpostsデータの取得
  const res = await fetch(apiUrl);
  const posts: Array<postType> = (await res.json()) as Array<postType>;

  //念のためブログが0件だった際の処理も書いておく
  if (!posts) {
    return [];
  }

  //データの中のidだけを順々に抜き取ってreturnしていく
  //idを順番に取り出し、下のAPIに渡していく
  return posts.map((post: postType) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

//ブログ詳細ページ情報を取得するAPI
//上記のgetAllPostIdsからIDを順々に受け取って生成していく
export const getPostData = async (id: string) => {
  const res = await fetch(`${apiUrl}/${id}/`);
  const post = await res.json();

  return {
    post,
  };
};
