import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios"
import moment from "moment";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
		Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Loading from "./Loading";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const HistoryChart = () => {
	const { id } = useParams();
	const { response, loading } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);

	if(loading){
		return(
			<div className="flex flex-col justify-center items-center m-8 h-[100vh]">
				<h2>Loading...</h2>
				<Loading className="h-72 w-full m-2"></Loading>
			</div>
		)
	}

	const coinChartData = response.prices.map(value => ({ x:value[0], y:value[1].toFixed(2) }))
	console.log(coinChartData);

	const options = {
		responsive: true
	}
	const data = {
		labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
		datasets: [
			{
				fill: true,
				label: id,
				data: coinChartData.map(val => val.y),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			}
		]
	}
	return (
		<div className="px-40 mt-10">

			<Line options={options} data={data} />
		</div>
	)
}

export default HistoryChart 