type StockStatProps = {
  label: string
  value: string | number
}

const StockStats: React.FC<StockStatProps>  = ({ label, value }) => {
  return (
    <div className="flex flex-col justify-between w-36">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-lg font-semibold text-gray-900">{value}</div>
    </div>
  )
}

export default StockStats;