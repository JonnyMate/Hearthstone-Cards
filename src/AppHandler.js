import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { useStateValue } from './utils/state/state'
import Card from './views/Card'
import Home from './views/Home'

export default function AppHandler() {
	const [{ token }, dispatch] = useStateValue()

	useEffect(() => {
		console.log(token)
	})

	return (
		<Router>
			<Route path='/card/:cardId' component={Card} />
			<Route path='/' exact component={Home} />
		</Router>
	)
}
