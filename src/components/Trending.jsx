import useAxios from "../hooks/useAxios"
import Loading from "./Loading";
import TrendCoin from "./TrendCoin";

const Trending = () => {

	const { response , loading } = useAxios('search/trending');
	//console.log(response);

	if(loading){
		return(
			<div  className="flex flex-col justify-center items-center m-8 h-[100vh]">
				<h2>Loading...</h2>
				<Loading className="h-8 w-32 m-2"></Loading>
				<Loading className="h-8 w-32 m-2"></Loading>
				<Loading className="h-8 w-32 m-2"></Loading>
				<Loading className="h-8 w-32 m-2"></Loading>
			</div>
		)
	}

return (
	<div className="p-10 flex flex-col justify-center items-center h-[100vh] bg-yellow-50">
		<h1 className="text-2xl font-bold mt-8 mb-4 2xl:text-4xl">Trending</h1>
		{response && 
			response.coins.map( coin =>  <TrendCoin key={coin.item.coin_id} coin={coin} />)
		}

	</div>
)
}

export default Trending