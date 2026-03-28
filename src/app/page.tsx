"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import cta from "../../public/img/CTA-BG.jpg";
import { useGlobalContext } from "./context/store";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const { userId } = useGlobalContext();

  useEffect(() => {
    console.log("userId", userId);
  }, [userId]);
  return (
    <>
      <Header />
      <div className="landingpage">
        <div className="text-center text-2xl">
          <div className="Desc">
            <h2 className="text-4xl pt-10 font-bold">Report an issue, make a difference!</h2>{" "}
            <br />
            <p className="pb-10">
              Collaborate with other citizens and help make our city a better place.
            </p>
          </div>
          <div className="CTA">
            <div className="BG-CTA-Bottom card-img-top border-solid flex justify-center items-center">
              <Image src={cta} className="cta-img" alt="..." />
              <Button
                asChild
                className="cta-bottom absolute rounded border-2 border-black bg-gray-500 text-gray-200 hover:bg-gray-600"
              >
                <a href="/map/">View Issue Map</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-10">
          <div className="card border-solid  border-black border-2 p-2">
            <Image
              src={cta}
              className="card-img-top border-solid  border-black border-2"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center text-3xl">Step 1</h5>
              <p className="card-text text-2xl">
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </p>
            </div>
          </div>
          <div className="card border-solid  border-black border-2 p-2">
            <Image
              src={cta}
              className="card-img-top border-solid  border-black border-2"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center text-3xl">Step 2</h5>
              <p className="card-text text-2xl">
                This card has supporting text below as a natural lead-in to additional content.
              </p>
            </div>
          </div>
          <div className="card border-solid  border-black border-2 p-2">
            <Image
              src={cta}
              className="card-img-top border-solid  border-black border-2"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center text-3xl">Step 3</h5>
              <p className="card-text text-2xl">
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This card has even longer content than the first to show that equal height
                action.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
