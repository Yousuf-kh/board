import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';

const Header = () => {
	const navs = [
		{
			name: 'PRODUCTS',
		},
		{
			name: 'APP & GAMES',
		},
		{
			name: 'FEATURES',
		},
		{
			name: 'SUPPORT',
		},
		{
			name: 'ABOUT',
		},
	];

	return (
		<Box w={'full'} h={{ md: '15vh', base: '10vh' }}>
			<Container maxW={'container.lg'}>
				<Flex
					justify={'space-between'}
					align={'center'}
					h={{ md: '15vh', base: '10vh' }}
				>
					<Flex align={'center'}>
						<Image src='/logo.png' />
						<Heading color={'#fff'}>Board</Heading>
					</Flex>

					<Flex
						display={{ md: 'flex', base: 'none' }}
						align={'center'}
						gap={'20px'}
					>
						{navs.map((c, i) => (
							<Text cursor={'pointer'} color={'#fff'} key={i}>
								{c.name}
							</Text>
						))}
					</Flex>
					<Box>
						<Image src='/cart.png' />
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
