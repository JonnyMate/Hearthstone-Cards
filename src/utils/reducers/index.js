import tokenReducer from './token'

const mainReducer = ({ token }, action) => ({
	token: tokenReducer(token, action),
})

export default mainReducer
