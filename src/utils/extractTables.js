export function extractTables(richTextDocument) {
  if (!richTextDocument?.content) return [];

  const tables = [];

  richTextDocument.content.forEach((node) => {
    if (node.nodeType !== "table") return;

    const rows = node.content.map((row) => {
      return row.content.map((cell) => {
        const cellData = {
          text: "",
          map: null,
        };

        cell.content.forEach((cellNode) => {
          // Text
          if (cellNode.nodeType === "paragraph") {
            cellNode.content?.forEach((textNode) => {
              if (textNode.nodeType === "text") {
                cellData.text += textNode.value;
              }
            });
          }

          // Embedded map entry
          if (cellNode.nodeType === "embedded-entry-inline") {
            const target = cellNode.data?.target;
            if (target?.fields?.location) {
              cellData.map = {
                title: target.fields.title,
                lat: target.fields.location.lat,
                lon: target.fields.location.lon,
                slug: target.fields.url,
              };
            }
          }
        });

        return cellData;
      });
    });

    tables.push(rows);
  });

  return tables;
}
