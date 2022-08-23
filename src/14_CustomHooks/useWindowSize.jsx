import { useState, useEffect } from 'react'

const useWindowSize = () => {
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}

		// lắng nghe event resize của trình duyệt
		window.addEventListener('resize', handleResize);

		return () => {
			//trước khi component bị unmount, sẽ removeEventListener
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return size;
}

export default useWindowSize