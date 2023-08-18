import {Link }from 'react-router-dom'


const TrendCoin = ( { coin } ) => {
	//console.log(coin);

return (
	<div className="mb-1 py-2 px-1 w-[60%] border-purple-200 bg-white hover:bg-trend border-2 rounded hover:bg-purple-100">
		<Link to={`/coin/${coin.item.id}`}>
		<div className="flex items-center gap-1">
			<span className="mr-4 font-semibold">{coin.item.score+1}.</span>
			<img src={coin.item.small} alt={coin.item.name} className="w-[5%] mr-1"/>
			<p>{coin.item.name}</p>
			<small className="text-xs">{coin.item.symbol}</small>
		</div>
	</Link>
	</div>
)
}

export default TrendCoin