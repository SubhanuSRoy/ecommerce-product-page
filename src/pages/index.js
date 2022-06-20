import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Product from "../components/Product/Product";
import Side from "../components/SIde/Side";
import gsap from "gsap";
import { PlusIcon } from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/solid";
import HeaderIcon from "../components/Header/HeaderIcon";

export default function Home() {
  const [reversed, setReversed] = useState(false);
  const [animate, setAnimate] = useState(false);
  const el = useRef();
  // const q = gsap.utils.selector(el);
  const mainRef = useRef(null);

  // store the timeline in a ref.
  const tl = useRef();

  useEffect(() => {
    // add a box and circle animation to our timeline and play on first render
    tl.current = gsap.timeline().to(mainRef.current, {
      x: -200,
    });
  }, []);

  useEffect(() => {
    console.log(reversed);
    // toggle the direction of our timeline
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div className="bg-pl h-screen" style={{overflow: "hidden"}}>
      <Head>
        <title>E-Commerce Product Page</title>
        <meta name="description" content="Made by Subhanu" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-light h-screen m-4 rounded-xl">
        <Header />
        {!animate && (
          <div className="flex items-center justify-between" ref={el}>
            <Main className="main" ref={mainRef}>
              <div>
                <PlusIcon className="rounded-full bg-black p-2 shadow-md text-white" />
              </div>
            </Main>

            <button
              onClick={() => setAnimate(true)}
              className="cursor-pointer px-3 text-red stroke-0 border-red rounded-full border-2 shadow-md"
            >
              <HeaderIcon Icon={ChevronRightIcon} />
            </button>

            <Side />
          </div>
        )}

        {animate && <Product />}
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
