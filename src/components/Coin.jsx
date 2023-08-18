import { TrendingDown, TrendingUp } from '../icons/icons'
import {currencyFormat} from '../utils'


const Coin = ( {coin}) => {
	//console.log(coin);
return (

	<div className="grid grid-cols-3 sm:grid-cols-4 mb-2 p-2 w-[100%] md:w-[80%] bg-white border-gray-400 border-2 rounded hover:bg-gray-200">
		<div className="flex items-center gap-1 w-full">
			<img src={coin.image} alt={coin.name} className="w-6 mr-1" />
			<p>{coin.name}</p>
			<span className='text-xs'>{coin.symbol}</span>
		</div>
		<span className='mt-2 ml-6 md:ml-0'>
			{currencyFormat(coin.current_price)} 
		</span>
		<span 
		className={`flex gap-1 mt-2 ${coin.price_change_percentage_24h < 0
					? 'text-red-400'  : 'text-green-400'} `} >
		{coin.price_change_percentage_24h < 0 ? <TrendingDown /> 
			: <TrendingUp /> }
			{coin.price_change_percentage_24h} 
		</span>

		<div className='hidden sm:block'>
			<p className='font-semibold italic'>Market Cap</p>
			<span>{currencyFormat(coin.market_cap)} </span>
		</div>
	</div>
	

	
)
}

export default Coin