import React from 'react'
import useCount from './useCount'
import useForm from './useForm'
import useRequest from './useRequest'
import useWindowSize from './useWindowSize'

const Custom__Hooks = () => {
	const { count, handleDecrease, handleIncrease } = useCount()

	const { values, handleChange } = useForm({ username: "", password: "" })

	const { data } = useRequest({
		url: "https://jsonplaceholder.typicode.com/users",
		method: "GET"
	})

	const { size } = useWindowSize()

	return (
		<div>
			<h1>Custom__Hooks</h1>

			{size.width < 768 ? <p>Mobile nè</p> : <p>Desktop nè</p>}


			<p>Count: {count}</p>
			<button onClick={handleIncrease}>Increase</button>
			<button onClick={handleDecrease}>Decrease</button>

			<br />
			<br />

			<p>Username: {values.username} - Password: {values.password}</p>
			<input type="text" value={values.username} name="username" onChange={handleChange} />
			<input type="password" value={values.password} name="password" onChange={handleChange} />

			<br />
			<br />

			{data && data.map((user) => {
				return (
					<div key={user.id}>
						<p><strong>Name</strong>: {user.name}</p>
						<p><strong>Email</strong>: {user.email}</p>
						<p><strong>Phone</strong>: {user.phone}</p>
						<p><strong>Username</strong>: {user.username}</p>
						<p><strong>Website</strong>: {user.website}</p>
						<br />
					</div>
				)
			})}

		</div>
	)
}

export default Custom__Hooks