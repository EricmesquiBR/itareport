"use client"

import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3030"

type Category = {
    id_categoria: number
    nome_categoria: string
}

type Report = {
    id_report: number
    title: string
    content: string
    lat?: number
    lng?: number
}

export default function Map() {
    const [markersData, setMarkersData] = useState<Report[] | null>([])
    const [idCat, setIdCat] = useState("")
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        axios.get<{ data: Category[] }>(`${API_URL}/category`).then((response) => {
            setCategories(response.data.data)
        })
    }, [])

    useEffect(() => {
        if (idCat === "") {
            axios
                .get(`${API_URL}/reports`)
                .then((response) => setMarkersData(response.data.data))
                .catch((error: unknown) => {
                    console.error("Error:", error)
                    setMarkersData(null)
                })
        } else {
            axios
                .get(`${API_URL}/category/${idCat}`)
                .then((response) => {
                    setMarkersData(response.data.data)
                })
                .catch((error: unknown) => {
                    console.error("Error:", error)
                    setMarkersData(null)
                })
        }
    }, [idCat])

    const pin = L.icon({
        iconUrl: "pinmap.svg",
        iconSize: [20, 20],
        iconAnchor: [17, 20],
        popupAnchor: [17, -48]
    })

    return (
        <>
            <div className='flex'>
                <label htmlFor='category' className='px-1'>
                    Filtro:
                </label>
                <select
                    id='category'
                    className='flex border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                    value={idCat}
                    onChange={(e) => setIdCat(e.target.value)}
                >
                    <option value=''>Todas as categorias</option>
                    {categories.map((category) => (
                        <option
                            key={category.id_categoria}
                            value={category.id_categoria}
                        >
                            {category.nome_categoria}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {!markersData ? (
                    <div className='loading flex items-center justify-center z-50'>
                        Erro: Recarregue a página
                    </div>
                ) : (
                    <MapContainer
                        center={[-3.9, -39.5]}
                        zoom={10}
                        scrollWheelZoom={true}
                        minZoom={3}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        {markersData
                            .filter(
                                (report) =>
                                    typeof report.lat === "number" &&
                                    typeof report.lng === "number"
                            )
                            .map((report) => (
                                <Marker
                                    key={report.id_report}
                                    position={[report.lat as number, report.lng as number]}
                                    icon={pin}
                                >
                                    <Popup>
                                        <h3>{report.title}</h3>
                                        <p>{report.content}</p>
                                    </Popup>
                                </Marker>
                            ))}
                    </MapContainer>
                )}
            </div>
        </>
    )
}
