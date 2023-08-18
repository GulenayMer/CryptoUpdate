import useAxios from "../hooks/useAxios"
import {useParams} from 'react-router-dom'
import Loading from "./Loading"

const CoinDetail = () => {
	
	const { id } = useParams();
	const { response, loading } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);

	//console.log(response);
	if(loading){
		return(
			<div className="flex flex-col justify-center items-center m-8 h-[100vh]">
				<h2>Loading...</h2>
				<Loading className="h-8 w-32 mb-4"></Loading>
				<Loading className="h-72 w-full mb-10"></Loading>
			</div>
		)
	}

  return (
	<div className="px-40 mt-5">
		<div className="flex flex-col gap-2 items-center justify-center">
			<img src={response.image.small} alt={response.name} />
			<h1 className="text-2xl font-bold my-2">{response.name} </h1>
			<p className="px-20">{response.description.en}</p>
		</div>

	</div>
  )
}

export default CoinDetail