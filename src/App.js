import AppHandler from './AppHandler'
import mainReducer from './utils/reducers'
import { StateProvider } from './utils/state/state'

function App() {
	const initialState = {
		accessToken: null,
	}

	return (
		<StateProvider initialState={initialState} reducer={mainReducer}>
			<AppHandler />
		</StateProvider>
	)
}

export default App
