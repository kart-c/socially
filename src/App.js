import { Login, Signup } from 'Pages';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</>
	);
}

export default App;
