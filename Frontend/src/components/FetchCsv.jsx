// import React, { useEffect, useState } from "react";
// import Papa from "papaparse";

// const FetchCsv = () => {
//   const [data, setData] = useState([]);
//   console.log(data);

//   useEffect(() => {
//     fetch("/Seloger_Properties.csv") // Public folder se CSV fetch karna
//       .then((response) => response.text())
//       .then((csvText) => {
//         Papa.parse(csvText, {
//           header: true, // Agar CSV me headers hain
//           skipEmptyLines: true, // Khali rows hata dega
//           delimiter: ",",
//           complete: (result) => {
//             console.log(result);

//             setData(result.data);
//           },
//         });
//       })
//       .catch((error) => console.error("CSV Load Error:", error));
//   }, []);

//   return (
//     <div>
//       <h2>CSV Data from Public Folder</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             {data.length > 0 &&
//               Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index}>
//               {Object.values(row).map((value, i) => (
//                 <td key={i}>{value}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FetchCsv;

// import React, { useEffect, useState } from "react";
// import Papa from "papaparse";

// const FetchCsv = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("/Seloger_Properties.csv")
//       .then((response) => response.text())
//       .then((csvText) => {
//         console.log("CSV Raw Data:\n", csvText); // Debug CSV content

//         Papa.parse(csvText, {
//           header: true, // Header ko consider karega
//           skipEmptyLines: true, // Khali rows hata dega
//           delimiter: ",", // Manually set karein kyunki CSV comma-separated hai
//           quoteChar: '"', // Multi-line description handle karega
//           complete: (result) => {
//             console.log("Parsed Data:", result.data); // Debug parsed data
//             setData(result.data);
//           },
//           error: (error) => {
//             console.error("CSV Parse Error:", error);
//           },
//         });
//       })
//       .catch((error) => console.error("CSV Load Error:", error));
//   }, []);

//   return (
//     <div>
//       <h2>CSV Data from Public Folder</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             {data.length > 0 &&
//               Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index}>
//               {Object.values(row).map((value, i) => (
//                 <td key={i}>{value}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FetchCsv;

import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const FetchCsv = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Seloger_Properties.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          delimiter: ",",
          quoteChar: '"', // Handle multi-line descriptions
          complete: (result) => {
            setData(result.data);
          },
          error: (error) => {
            console.error("CSV Parse Error:", error);
          },
        });
      })
      .catch((error) => console.error("CSV Load Error:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        🏡 Property Listings
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
        <table className="min-w-full bg-white border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th
                    key={key}
                    className="p-3 text-left border border-gray-600"
                  >
                    {key}
                  </th>
                ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-300">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {/* Property Name */}
                <td className="p-3 border">{row["Property Name"]}</td>
                {/* Price */}
                <td className="p-3 border font-bold text-green-600">
                  {row["Price (€)"]} €
                </td>
                {/* Description (Truncated for better view) */}
                <td className="p-3 border max-w-xs text-sm">
                  {row["Description"].length > 100
                    ? row["Description"].substring(0, 100) + "..."
                    : row["Description"]}
                </td>
                {/* Address */}
                <td className="p-3 border">{row["Address"]}</td>
                {/* Phone Number */}
                <td className="p-3 border">{row["Phone Number"] || "N/A"}</td>
                {/* Image (If available) */}
                <td className="p-3 border">
                  {row["Image URL"] ? (
                    <img
                      src={row["Image URL"]}
                      alt="Property"
                      className="h-16 w-24 object-cover rounded"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                {/* Website Name */}
                <td className="p-3 border">{row["Website Name"]}</td>
                {/* Expired */}
                <td className="p-3 border">
                  {row["Expired"] === "False" ? "✅ Active" : "❌ Expired"}
                </td>
                {/* Status */}
                <td className="p-3 border">{row["Status"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchCsv;
