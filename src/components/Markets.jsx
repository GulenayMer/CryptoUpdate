import useAxios from "../hooks/useAxios"
import Coin from "./Coin"
import Loading from "./Loading"

const Markets = () => {

	const { response, loading } = useAxios('/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
  //console.log(response);
  if(loading){
	return(
		<div className="flex flex-col justify-center items-center m-8 h-[100vh]">
			<h2>Loading...</h2>
			<Loading className="h-8 w-32 m-2"></Loading>
			<Loading className="h-8 w-32 m-2"></Loading>
			<Loading className="h-8 w-32 m-2"></Loading>
			<Loading className="h-8 w-32 m-2"></Loading>
		</div>
	)
}

	return (
	<section className="p-10 flex flex-col justify-center items-center bg-yellow-50">
		<h1 className="text-2xl font-bold mb-4 2xl:text-4xl">Markets</h1>
		{response && 
		response.map( coin => <Coin key={coin.id} id={coin.id} coin={coin}/>)}
	</section>
  )
}

export default Markets