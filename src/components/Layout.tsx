import { ReactNode, memo, FC } from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children: ReactNode;
  title: string;
};

export const Layout: FC<Props> = memo((props) => {
  const { children, title = "HP by Next.js" } = props;

  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex item-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="flex items-center text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="flex items-center text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Blog
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="flex items-center text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-1 flex-col justify-center items-center min-h-screen">
        {children}
      </main>

      {/* フッター */}
      <footer className="w-full h-12 flex justify-center items-center border-t bg-gray-200">
        koda-momo
      </footer>
    </div>
  );
});
