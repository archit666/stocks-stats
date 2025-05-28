import { useState } from "react";
import  StockStat from '../../components/stockStats';
import { mockStockData } from './constants';

const StockDetails: React.FC  = () => {

  const [isin, setIsin] = useState<string>('');
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);


  const fetchData = async (): Promise<void> => {
    // setLoading(true);
    // try {
    //   const res = await axios.get(`http://localhost:3001/api/stock/${isin}`);
    //   setData(res.data);
    // } catch (err) {
    //   setError("Stock not found or failed to fetch data.");
    // } finally {
    //   setLoading(false);
    // }
    console.log('function clicked');
  };

  return (
    
    <div className="flex flex-col min-h-screen w-full p-6 bg-sky-50">
      {/* Search Section */}
      <div className="flex flex-col mb-8 w-1/2">
        <div className="text-4xl font-bold mb-4">{'Search Stock Details'}</div>
        <div className="flex flex-col gap-4">
          <input 
            className="p-5 border border-gray-300 rounded-lg shadow-sm"
            value={isin}
            onChange={(e) => setIsin(e.target.value)}
            placeholder="Enter ISIN code"
          />
          <button 
            onClick={fetchData}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {loading ? 'Seaching...' : 'Search'}
          </button>
        </div>
      </div>

      {/* Stock Data Display */}
      <div className="flex flex-col flex-1 w-1/2">
        <div className="flex flex-col pl-6">
          {/* Search Section */}
          <div className="flex justify-between items-center mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-gray-900 mb-1">{mockStockData.name}</div>
            <div className="flex flex-col">
                <div className="text-2xl font-bold text-600">{mockStockData.currentPrice}</div>
                <div className="text-sm text-gray-600 w-full text-right">{'Current Price'}</div>
            </div>
          </div>

          {/* Stock Stats Section */}
          <div className="flex flex-col mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <div className="text-lg font-semibold text-gray-800 mb-4">{'Stock Metrics'}</div>
              <div className="flex flex-wrap gap-6">
                <StockStat label="Market Cap" value={mockStockData.marketCap} />
                <StockStat label="Current Price" value={mockStockData.currentPrice} />
                <StockStat label="High / Low" value={`${mockStockData.high} / ${mockStockData.low}`} />
                <StockStat label="Stock P/E" value={mockStockData.pe} />
                <StockStat label="Book Value" value={mockStockData.bookValue} />
                <StockStat label="Dividend Yield" value={mockStockData.dividendYield} />
                <StockStat label="ROCE" value={mockStockData.roce} />
                <StockStat label="ROE" value={mockStockData.roe} />
                <StockStat label="Face Value" value={mockStockData.faceValue} />
            </div>
          </div>

          {/* Pros and Cons Section */}
          <div className="flex flex-col flex-row gap-4 max-h-60">
            {/* Pros Section */}
            <div className="flex flex-col flex-1 bg-green-50 p-4 rounded-lg border border-green-200 shadow-sm overflow-y-auto">
              <div className="flex items-center text-lg font-semibold text-green-800 mb-3">
                {'Pros'}
              </div>
              <ul className="list-disc pl-4">
                {mockStockData.pros.map((pro, index) => (
                  <li key={index} className={'py-2'}>
                    <span className="text-sm font-semibold">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons Section */}
            <div className="flex flex-col flex-1 p-4 bg-red-50 rounded-lg border border-red-200 shadow-sm overflow-y-auto">
              <div className="flex items-center text-lg font-semibold text-red-800 mb-3">
                {'Cons'}
              </div>
              <ul className="list-disc pl-4">
                {mockStockData.cons.map((con, index) => (
                  <li key={index} className={'py-2'}>
                    <span className="text-sm font-semibold">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;