import { useState, useEffect } from 'react'
import axios from "axios"

// VD: useRequest({url: "https://example.com", method: "GET"})
const useRequest = (config, depedencies = []) => {
	//state lưu trữ data từ api
	const [data, setData] = useState(null)


	const fetchData = async () => {
		try {
			//call api
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

	return {data}
}

export default useRequest