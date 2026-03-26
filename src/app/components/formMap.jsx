"use client"

import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useGlobalContext } from "../context/store"
import { React, useEffect, useState } from "react"

export default function ReportFormMap() {
    const { markerData, setMarkerData } = useGlobalContext("")
    const pin = L.icon({
        iconUrl: "pinmap.svg",
        iconSize: [20, 20],
        iconAnchor: [17, 20],
        popupAnchor: [17, -48]
    })

    return (
        <MapContainer
            center={[-3.9, -39.5]}
            zoom={10}
            scrollWheelZoom={true}
            minZoom={3}
            whenReady={(mapInstance) => {
                mapInstance.target.on("click", function (e) {
                    const { lat, lng } = e.latlng
                    setMarkerData([lat, lng])
                })
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {markerData && <Marker position={markerData} icon={pin} />}
        </MapContainer>
    )
}
