import	'babel-polyfill'
import	React from 'react'
import	{ render } from	'react-dom'
import	{ Provider } from 'react-redux'
import	App from './Containers/map.js'
import	configureStore from './Store/configureStore'

const store = configureStore();

render(
<Provider store={store}>
	<App />
</Provider>,
	document.getElementById('root')
)


