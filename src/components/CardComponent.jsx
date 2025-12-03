import React from "react";
import "../styles/global.css";

const offices = [
    {
        id: "goteborg",
        name: "Göteborgskontoret",
        address: "Göteborg, Sweden",
        lat: 57.70887,
        lon: 11.97456,
    },
    {
        id: "stockholm",
        name: "Stockholmkontoret",
        address: "Stockholm, Sweden",
        lat: 59.3293,
        lon: 18.0686,
    },
    {
        id: "hudiksvall",
        name: "Hudiksvallkontoret",
        address: "Hudiksvall, Sweden",
        lat: 61.7250,
        lon: 17.1058,
    },
];

export default function CardComponent() {
    return (
        <>
            <div className="cards-row" role="list">
                {offices.map((office) => {
                    const { id, name, address, lat, lon } = office;
                    // Using simple google maps embed via query (no API key)
                    const src = `https://maps.google.com/maps?q=${lat},${lon}&z=13&output=embed`;

                    return (
                        <article className="card" key={id} role="listitem" aria-labelledby={`${id}-title`}>
                            <h3 id={`${id}-title`}>{name}</h3>
                            <p>{address}</p>
                            <div className="map" aria-hidden="false">
                                <iframe
                                    title={`${name} map`}
                                    src={src}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </article>
                    );
                })}
            </div>
        </>
    );
}