"use client";

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import lucas from "../../../public/about/lucas.jpeg";
import matheus from "../../../public/about/matheus.png";
import eric from "../../../public/about/eric.jpeg";
import github from "../../../public/about/github.svg";
import linkedin from "../../../public/about/linkedin.svg";

function About() {
  return (
    <>
      <Header />

      <div className="title">
        <h1 className="text-3xl text-center">Who are we?</h1>
        <p className="text-center">
          We are students from UFC at the Jardins de Anita campus in Itapaje. We are currently in
          our third semester and built this platform to help the local community.
        </p>
      </div>

      <div className="card-group">
        <div className="card-eric max-w-sm rounded overflow-hidden shadow-lg">
          <div className="Image">
            <Image
              className="rounded-full"
              src={eric}
              height={400}
              width={400}
              alt="Foto de Eric"
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title text-2xl text-center">Eric</h5>
            <p className="card-text">Developer.</p>
            <p className="card-text">Responsible for building and programming the frontend.</p>
            <div className="flex items-stretch">
              <Image src={linkedin} width={30} height={30} className="icon pb-2" alt="LinkedIn" />
              <a
                href="https://www.linkedin.com/in/eric-mesquita-3826a7180/"
                target="_blank"
                rel="noreferrer"
                className="link text-center ps-2"
              >
                linkedin.com/in/eric-mesquita
              </a>
            </div>
            <div className="flex items-stretch">
              <Image src={github} width={30} height={30} className="icon pb-2" alt="GitHub" />
              <a
                href="https://github.com/EricmesquiBR"
                target="_blank"
                rel="noreferrer"
                className="link text-center ps-2"
              >
                https://github.com/EricmesquiBR
              </a>
            </div>
          </div>
        </div>
        <div className="card-lucas max-w-sm rounded overflow-hidden shadow-lg">
          <div className="Image">
            <Image
              className="rounded-full"
              src={lucas}
              height={400}
              width={400}
              alt="Foto de Lucas"
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title text-2xl">Lucas</h5>
            <p className="card-text">Developer.</p>
            <p className="card-text">Responsible for building and programming the backend.</p>
            <div className="flex items-stretch">
              <Image src={linkedin} width={30} height={30} className="icon pb-2" alt="LinkedIn" />
              <a
                href="https://www.linkedin.com/in/lucas-sousa-689b6a236/"
                target="_blank"
                rel="noreferrer"
                className="link text-center ps-2"
              >
                linkedin.com/in/lucas-sousa
              </a>
            </div>
            <div className="flex items-stretch">
              <Image src={github} width={30} height={30} className="icon pb-2" alt="GitHub" />
              <a
                href="https://github.com/1M0RR1V3L"
                target="_blank"
                rel="noreferrer"
                className="link text-center ps-2"
              >
                https://github.com/1M0RR1V3L
              </a>
            </div>
          </div>
        </div>
        <div className="card-matheus max-w-sm rounded overflow-hidden shadow-lg">
          <div className="Image">
            <Image
              className="rounded-full"
              src={matheus}
              height={400}
              width={400}
              alt="Foto de Matheus"
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title text-2xl">Matheus</h5>
            <p className="card-text">Developer and DBA.</p>
            <p className="card-text">Responsible for database design, creation, and maintenance.</p>
            <div className="flex items-stretch">
              <Image src={linkedin} width={30} height={30} className="icon pb-2" alt="LinkedIn" />
              <a
                href="https://www.linkedin.com/in/matheus-feitosa-de-oliveira-rabelo/"
                target="_blank"
                rel="noreferrer"
                className="link text-center ps-2"
              >
                linkedin.com/in/matheus-feitosa
              </a>
            </div>
            <div className="flex items-stretch">
              <Image src={github} width={30} height={30} className="icon pb-2" alt="GitHub" />
              <a
                href="https://github.com/Theus1990"
                target="_blank"
                rel="noreferrer"
                className="link text-center ps-2"
              >
                https://github.com/Theus1990
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
