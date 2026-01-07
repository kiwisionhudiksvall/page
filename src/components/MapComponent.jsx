

export default function MapComponent({ tables }) {
  return (
    <section className="maps">
      {tables.map((table, tableIndex) => (
        <div key={tableIndex} className="map-table">
          {table.map((row, rowIndex) => (
            <div key={rowIndex} className="map-row">
              {row.map((cell, cellIndex) => (
                <div key={cellIndex} className="map-cell">
                  {cell.text && <p>{cell.text}</p>}

                  {cell.map && (
                    <iframe
                      title={cell.map.title}
                      src={`https://www.google.com/maps?q=${cell.map.lat},${cell.map.lon}&z=14&output=embed`}
                      width="250px"
                      height="250px"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
