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
              <h3 id={`${id}-title`}>{name}</h3>
              <p>{address}</p>
              <div className="map" aria-hidden="false">
                <iframe
                  style={{ filter: "saturate(0.1) hue-rotate(270deg)" }}
                  title={`${name} map`}
                  src={src}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                style={{
                  fontSize: "0.9rem",
                  fontFamily: "'bc-novatica-cyr', sans-serif",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.1rch",
                  borderRadius: "100px",
                  margin: "20px 60px",
                  padding: "8px 0",
                }}
                href="mailto:kontakt@kiwision.se"
                className="card-button"
              >
                Kontakt
              </a>
            </article>
          );
        })}
      </div>
    </>
  );
}
