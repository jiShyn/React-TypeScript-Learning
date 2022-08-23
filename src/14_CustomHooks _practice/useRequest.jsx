import axios from 'axios'
import { useState, useEffect } from 'react'

const useRequest = (config, depedencies = []) => {
	const [data, setData] = useState(null)

	const fetchData = async () => {
		try {
			const { data } = await axios(config)

			//thành công
			setData(data)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData()
	}, depedencies)
	return { data };
}

export default useRequest