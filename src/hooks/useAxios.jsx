import { useEffect, useState } from "react"
import axios from 'axios';

const useAxios = (param) => {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

	const fetchData = async (param) => {
		try{
			setLoading(true);
			const response = await axios(param)
			setResponse(response.data);
		}catch(error){
			setError(error);
			console.log(error);
		}finally{
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData(param);
	}, []);

  return (
	{response, loading, error}
  )
}

export default useAxios