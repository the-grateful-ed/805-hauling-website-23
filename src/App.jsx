import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<span className='flex justify-center bg-green-800 text-8xl'>page</span>
		</div>
	);
}

export default App;
