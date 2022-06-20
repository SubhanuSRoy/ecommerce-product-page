import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Side from "../SIde/Side";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import HeaderIcon from "../Header/HeaderIcon";
import gsap from "gsap";
import styles from "../../styles/Product.module.css";

function Product() {
  // reference to the header of the page
  // const productRef = useRef();
  const productRef = useRef();

  // refernces for the images pf the product
  const imgRef1 = useRef();
  const imgRef2 = useRef();
  const imgRef3 = useRef();

  // reference for the timeline
  const tl = useRef();
  const t2 = useRef();

  const [image, setImage] = useState(1);

  // wait until DOM has been rendered
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(productRef.current, { x: -100, duration: 0.2 })
      .to(productRef.current, { x: 0, duration: 1, ease: "bounce" })
      .from(imgRef1.current, { opacity: 0, x: 100, duration: 1 })
      .to(imgRef1.current, { opacity: 1, x: 0, duration: 2 });
  }, []);
  

  const reverse = () => {
    t2.current.reverse()
  }
  return (
    <div className={styles.product} ref={productRef}>
      {/* product description */}
      <div className="flex flex-col items-start w-3/5 gap-y-2 pl-20">
        {/* name of product */}
        <div className="text-4xl uppercase font-bold">
          Tied green <br /> v-neck shirt
        </div>
        {/* price of product */}
        <div className="text-3xl font-normal">$67</div>
        <div className="flex w-full gap-x-12 items-center">
          <div>
            V Neck shirt with lapel collar. Long sleeves with cuffs. <br />
            Front tie at hem. Front button at closure.
          </div>
          <div>
            <div className="rounded-full  bg-red py-10 px-9  shadow-md text-white">
              {" "}
              ADD{" "}
            </div>
          </div>
        </div>
        <div className="uppercase font-bold">select size</div>
        <div className="flex w-1/3 items-center gap-x-4 mt-2 mb-6">
          <div className="py-3 px-5 rounded-full border-td border-2 shadow-md">
            S
          </div>
          <div className="py-3 px-4 rounded-full border-td border-2 shadow-md">
            M
          </div>
          <div className="py-3 px-5 rounded-full border-td border-2 shadow-md">
            L
          </div>
          <div className="uppercase text-td font-bold">size guide</div>
        </div>
        <div className="flex items-center gap-x-2 w-full">
          <Image
            className="shadow-md rounded-md"
            src={p1}
            height={180}
            width={120}
            onClick={() => {
              setImage(1);
            }}
          />
          <Image
            className="shadow-md rounded-md"
            src={p2}
            height={180}
            width={120}
            onClick={() => {
              setImage(2);
            }}
          />
          <Image
            className="shadow-md rounded-md"
            src={p3}
            height={180}
            width={120}
            onClick={() => {
              setImage(3);
            }}
          />
          <HeaderIcon Icon={ChevronRightIcon} />
        </div>
      </div>
      {/* image */}
      <div ref={imgRef1}>
        {image === 1 ? (
          <Image
            className="shadow-md rounded-md"
            src={p1}
            height={600}
            width={400}
          />
        ) : image === 2 ? (
          <Image
            className="shadow-md rounded-md"
            src={p2}
            height={600}
            width={400}
          />
        ) : (
          <Image
            className="shadow-md rounded-md"
            src={p3}
            height={600}
            width={400}
          />
        )}
      </div>
    </div>
  );
}

export default Product;
