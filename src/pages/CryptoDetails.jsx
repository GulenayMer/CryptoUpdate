import HistoryChart from '../components/HistoryChart'
import CoinDetail from '../components/CoinDetail'

const CryptoDetails = () => {
  return (
	<div className='flex flex-col justify-center m-10'>
		<CoinDetail />
		<HistoryChart /> 
	</div>
  )
}

export default CryptoDetails