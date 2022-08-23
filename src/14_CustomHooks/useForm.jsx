import { useState } from 'react'

// VD: useForm({username: '', email: ''})
const useForm = (defaultValues) => {
	const [values, setValues] = useState(defaultValues)

	const handleChange = evt => {
		const { name, value } = evt.target
		setValues({ ...values, [name]: value })
	}

	return { values, handleChange }
}

export default useForm