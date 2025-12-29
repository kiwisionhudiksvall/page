import React from "react";
import "../styles/global.css";

const offices = [
    {
    id: "hudiksvall",
    name: "Hudiksvallskontoret",
    address: "Käppuddsgatan 5, Hudiksvall",
    lat: 61.728474765113724,
    lon: 17.108353824479785,
  },
  {
    id: "stockholm",
    name: "Stockholmskontoret",
    address: "Gustav III:s Boulevard 42, Solna",
    lat: 59.37331670344025,
    lon: 18.01669697846398,
  },
  {
    id: "goteborg",
    name: "Göteborgskontoret",
    address: "Privat adress, Göteborg",
    lat: 61.728474765113724,
    lon: 17.108353824479785,
  },
];

export default function CardComponent() {
  return (
    <>
      <div className="cards-row" role="list">
        {offices.map((office) => {
          const { id, name, address, lat, lon } = office;
          const src = `https://maps.google.com/maps?q=${lat},${lon}&z=13&output=embed`;

          return (
            <article
              className="card"
              key={id}
              role="listitem"
              aria-labelledby={`${id}-title`}
            >
              <h3 style={{ color: "var(--darkblue)" }} id={`${id}-title`}>
                {name}
              </h3>
              <p>{address}</p>
              <div className="map" aria-hidden="false">
                <iframe
                  style={{ filter: "saturate(0.25) hue-rotate(200deg)" }}
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
