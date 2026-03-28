"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import Loading from "../components/loading";
import { useGlobalContext } from "../context/store";
import axios from "axios";

const ReportFormMap = dynamic(() => import("../components/formMap"), {
  loading: () => <Loading />,
  ssr: false,
});

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3030";

type Category = {
  id_categoria: number;
  nome_categoria: string;
};

export default function Forms() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [idCat, setIdCat] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const { markerData, userId } = useGlobalContext();
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get<{ data: Category[] }>(`${API_URL}/category`).then((response) => {
      setCategories(response.data.data);
    });
  }, []);

  useEffect(() => {
    console.log(idCat);
  }, [idCat]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof markerData[0] !== "number" || typeof markerData[1] !== "number") {
      alert("Selecione um local no mapa");
      return;
    }

    if (
      title === "" ||
      content === "" ||
      street === "" ||
      district === "" ||
      idCat === "" ||
      city === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    axios
      .post(`${API_URL}/report`, {
        title,
        content,
        id: userId,
        idCat,
        street,
        district,
        city,
        lat: markerData[0],
        lng: markerData[1],
      })
      .then((response) => {
        console.log(response.data);

        if (response.data) {
          alert(response.data.message);
          if (response.data.error) {
            return;
          }
          router.push("/mapa");
        }
      })
      .catch((error: unknown) => {
        console.log(error);
        alert("Erro ao cadastrar denúncia");
      });
  };

  return (
    <>
      <Header />
      <div className="grid grid-cols-2">
        <form className="flex justify-center items-center pt-36 pb-36" onSubmit={handleSubmit}>
          <div className="form-register grid grid-cols-2 gap-3 p-6 shadow-lg bg-slate-50 rounded-md">
            <h1 className="text-3xl block text-center font-semibold col-span-2">
              Formulário de Denúncia
            </h1>
            <hr className="mt-3 col-span-2" />
            <div className="mt-3 col-span-2">
              <label htmlFor="title" className="block text-base mb-2">
                Título
              </label>
              <input
                type="text"
                id="title"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Tema da denúncia..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-3 col-span-2">
              <label htmlFor="content" className="block text-base mb-2">
                Descrição
              </label>
              <input
                type="text"
                id="content"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Descreva a denúncia..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="mt-3 col-span-2 grid grid-cols-12 gap-3">
              <div className="col-span-8">
                <label htmlFor="cpf" className="block text-base mb-2">
                  Endereço
                </label>
                <input
                  type="text"
                  id="cpf"
                  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                  placeholder="Digite o endereço..."
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="col-span-4">
                <label htmlFor="category" className="block text-base mb-2">
                  Categoria
                </label>
                <select
                  id="category"
                  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                  value={idCat}
                  onChange={(e) => setIdCat(e.target.value)}
                >
                  <option value="">Selecione a categoria</option>
                  {categories.map((category) => (
                    <option key={category.id_categoria} value={category.id_categoria}>
                      {category.nome_categoria}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="cpf" className="block text-base mb-2">
                Cidade
              </label>
              <input
                type="text"
                id="cpf"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Digite a cidade..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="cpf" className="block text-base mb-2">
                Bairro
              </label>
              <input
                type="text"
                id="cpf"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Digite o bairro..."
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div className="mt-3 flex justify-between items-center col-span-2">
              <div className="block text-base mb-2">
                <p>Selecione a localização da denúncia ao lado</p>
              </div>
            </div>
            <div className="mt-5 col-span-2">
              <button
                type="submit"
                className="border-2 border-gray-900 bg-gray-900 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-900 font-semibold"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
        <ReportFormMap />
      </div>
      <Footer />
    </>
  );
}
