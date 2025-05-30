import { useState } from "react";
import axios from 'axios';
import  StockStats from '../../components/stockStats';

export type StockDetails = {
  companyName: string;
  currentValue: string;
  ratios: { [key: string]: string };
  pros: string[];
  cons: string[];
};

const StockDetails: React.FC  = () => {

  const [stockName, setStockName] = useState<string>('');
  const [stockData, setStockData] = useState<StockDetails | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError('');
    try {
      const name = stockName.trim();
      const res = await axios.get(`http://localhost:3001/stockStats/${name}`);
      if (res.data.success) {
        setStockData(res.data.details);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-6 pl-6 bg-sky-50">
      {/* Search Section */}
      <div className="flex flex-col mb-8 w-1/2">
        <div className="text-4xl font-bold mb-4">{'Stock Metrics'}</div>
        <div className="flex flex-col gap-4">
          <input
            className="p-5 border border-gray-300 bg-white rounded-lg shadow-sm"
            value={stockName}
            onChange={(e) => setStockName(e.target.value)}
            placeholder={'Enter Company Name'}
          />
          <button
            onClick={fetchData}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {loading ? 'Seaching...' : 'Search'}
          </button>
        </div>
      </div>

      {error && <div className={'text-xl text-red-600'}>{error}</div>}

      {/* Stock Data Display */}
      {stockData && !error &&
        <div className="flex flex-col flex-1 w-1/2">
          <div className="flex flex-col">
            {/* Search Section */}
            <div className="flex justify-between items-center mb-6 p-4 border border-gray-200 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-1">{stockData.companyName}</div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-600">{stockData.currentValue}</div>
                <div className="text-sm text-gray-600 w-full text-right">{'Current Price'}</div>
              </div>
            </div>

            {/* Stock Stats Section */}
            <div className="flex flex-col mb-6 p-4 border border-gray-200 bg-white rounded-lg shadow-sm">
              <div className="flex flex-wrap justify-between gap-6">
                <StockStats label="Market Cap" value={stockData.ratios.market_cap} />
                <StockStats label="High / Low" value={stockData.ratios.high_low} />
                <StockStats label="Stock P/E" value={stockData.ratios.stock_pe} />
                <StockStats label="Book Value" value={stockData.ratios.book_value} />
                <StockStats label="Dividend Yield" value={stockData.ratios.dividend_yield} />
                <StockStats label="ROCE" value={stockData.ratios.roce} />
                <StockStats label="ROE" value={stockData.ratios.roe} />
                <StockStats label="Face Value" value={stockData.ratios.face_value} />
              </div>
            </div>

            {/* Pros and Cons Section */}
            <div className="flex gap-4 max-h-60">
              {/* Pros Section */}
              <div className="flex flex-col flex-1 bg-green-50 p-4 rounded-lg border border-green-200 shadow-sm overflow-y-auto">
                <div className="flex items-center text-lg font-semibold text-green-800 mb-3">
                  {'Pros'}
                </div>
                <ul className="list-disc pl-4">
                  {stockData.pros.map((pro, index) => (
                    <li key={index} className={'py-2'}>
                      <span className="text-sm">{pro}</span>
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
                  {stockData.cons.map((con, index) => (
                    <li key={index} className={'py-2'}>
                      <span className="text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default StockDetails;