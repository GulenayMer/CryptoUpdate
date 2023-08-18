import {Routes, Route } from 'react-router-dom'
import CryptoHome from '../pages/CryptoHome'
import CryptoDetails from '../pages/CryptoDetails'
import Markets from "../components/Markets"

const MainContent = () => {
	return (
	<Routes>
		<Route path='/' element={<CryptoHome />} />
		<Route path='/markets' element={<Markets />} />
		<Route path='/coin/:id' element={< CryptoDetails />} />
	</Routes>
)
}

export default MainContent