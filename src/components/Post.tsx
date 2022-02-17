import { memo, FC } from "react";
import { postType } from "../types/type";
import Link from "next/link";

type Props = { post: postType };

export const Post: FC<Props> = memo((props) => {
  const { post } = props;

  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <span>
          {post.id}
          {" : "}
          <span className="cursor-pointer text-blue-500 border-blue-500 border-b hover:bg-gray-200">
            {post.title}
          </span>
        </span>
      </Link>
    </div>
  );
});
