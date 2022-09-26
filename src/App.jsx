import { Home } from '../src/pages/home/home'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../src/pages/login/login'
import { AdminPanel } from './pages/adminPanel/adminPanel'
import { AddInput } from './pages/addInput/addInput'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/admin-panel' element={<AdminPanel />} />
			<Route path='/add-input' element={<AddInput />} />
			<Route path='*' element={<h1>Not Found</h1>} />
		</Routes>
	)
}

export default App
