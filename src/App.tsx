import React, { useEffect, useRef } from 'react';
import Box from './components/Box/Box';
import Button from './components/Button/Button';
import Image from './components/Image/Image';

function App() {
	const testRef = useRef<any>(null);

	useEffect(() => {
		console.log(testRef);
	}, []);

	return (
		<div className="App">
			<Box as="h1" css={{ color: '$blue500' }}>
				Testing
			</Box>
			<Image
				src="https://picsum.photos/536/354"
				ref={testRef}
				css={{ bob: false }}
				loading="lazy"
			/>
			<br />
			<Button>Hello</Button>
		</div>
	);
}

export default App;
