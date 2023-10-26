import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
	return (
		<>
			<Box
				w={'full'}
				h={'100vh'}
				backgroundImage={'url(/4x.png)'}
				backgroundSize={'cover'}
				backgroundRepeat={'no-repeat'}
			>
				<Header />
				<Hero />
			</Box>
		</>
	);
};

export default App;
