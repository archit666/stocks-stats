import StockDetails from './containers/StockDetails';

const App = () => {
  return (
      <StockDetails />
  );
};

export default App;





// return (
//   <div className="p-6 max-w-3xl mx-auto font-sans">
//     <h1 className="text-2xl font-bold mb-4">🔎 Search Stock by ISIN</h1>
//     <input
//       value={isin}
//       onChange={(e) => setIsin(e.target.value)}
//       placeholder="Enter ISIN code"
//       className="border p-2 w-full mb-4"
//     />
//     <button onClick={fetchData} className="bg-blue-600 text-white px-4 py-2 rounded">
//       Search
//     </button>

//     {error && <p className="text-red-500 mt-4">{error}</p>}

//     {data && (
//       <div className="mt-6 bg-gray-100 p-4 rounded">
//         <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
//         <div className="grid grid-cols-2 gap-4 text-sm">
//           {Object.entries(data.metrics).map(([key, value]) => (
//             <div key={key}>
//               <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong> {value || "N/A"}
//             </div>
//           ))}
//         </div>
//         <div className="mt-4">
//           <h3 className="font-semibold">✅ Pros</h3>
//           <ul className="list-disc ml-5">
//             {data.pros.map((item, idx) => <li key={idx}>{item}</li>)}
//           </ul>
//         </div>
//         <div className="mt-4">
//           <h3 className="font-semibold">❌ Cons</h3>
//           <ul className="list-disc ml-5">
//             {data.cons.map((item, idx) => <li key={idx}>{item}</li>)}
//           </ul>
//         </div>
//       </div>
//     )}
//   </div>
// );