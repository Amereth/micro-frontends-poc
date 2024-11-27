import { useState } from 'react'

export const Button = () => {
	const [state, setState] = useState(0)

	return (
		<button onClick={() => setState((state) => state + 1)}>
			remote app button clicked {state} times
		</button>
	)
}
