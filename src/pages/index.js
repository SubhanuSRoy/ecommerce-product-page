import Head from "next/head";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Product from "../components/Product/Product";
import Side from "../components/SIde/Side";



export default function Home() {

  
  return (
    <div className="">
      <Head>
        <title>E-Commerce Product Page</title>
        <meta name="description" content="Made by Subhanu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light h-screen">
        <Header />
        <div className="flex items-center justify-between">
          <Main />
          <Side />
          {/* <Product /> */}
          
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
