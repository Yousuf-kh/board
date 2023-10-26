import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';

const Hero = () => {
	return (
		<Box w={'full'} pt={{ md: '60px', base: '0' }}>
			<Container maxW={'container.lg'}>
				<Box w={{ md: '60%', base: '100%' }}>
					<Heading
						color={'#fff'}
						fontSize={{ md: '60px', base: '40px' }}
						textTransform={'uppercase'}
						w={'90%'}
					>
						Let your
						<br /> mind{' '}
						<Heading
							as={'span'}
							fontSize={{ md: '60px', base: '40px' }}
							color={'transparent'}
							backgroundImage={
								'linear-gradient(90deg, rgba(141,0,255,1) 0%, rgba(170,13,148,1) 100%)'
							}
							style={{
								WebkitBackgroundClip: ' text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							explore
						</Heading>{' '}
						new world
					</Heading>
					<Text
						lineHeight={'25px'}
						fontSize={{ md: '20px', base: '18px' }}
						color={'#fff'}
						pt={5}
					>
						Playing electronic games, whether through consoles,
						computers, mobile phones or another medium altogether.
						Gaming is a nuanced term that suggests regular gameplay,
						possibly as a hobby.
					</Text>
					<Flex align={'center'} gap={'20px'} pt={5}>
						<Button
							backgroundImage={'url(/bg.png)'}
							backgroundSize={'cover'}
							backgroundColor={'transparent'}
							opacity={1}
							_hover={{ opacity: 1 }}
							color={'#fff'}
							fontWeight={'800'}
							fontSize={'20px'}
							p={{ md: '28px 40px', base: '24px 30px' }}
							cursor={'pointer'}
							style={{ transform: 'skew(-15deg)' }}
						>
							BUY NOW
						</Button>
						<Button
							backgroundImage={
								'linear-gradient(90deg, rgba(141,0,255,1) 0%, rgba(170,13,148,1) 100%)'
							}
							backgroundColor={'transparent'}
							opacity={1}
							_hover={{ opacity: 1 }}
							backgroundSize={'cover'}
							color={'transparent'}
							fontWeight={'800'}
							fontSize={'20px'}
							p={{ md: '26px 40px', base: '23px 30px' }}
							cursor={'pointer'}
							style={{
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								borderImage:
									'linear-gradient(90deg, rgba(141,0,255,1) 0%, rgba(170,13,148,1) 100%)',
								borderImageSlice: '1',
								transform: 'skew(-15deg)',
							}}
							border={'2px solid transparent'}
						>
							PLAY NOW
						</Button>
					</Flex>
				</Box>
			</Container>
			<Box
				bg={'url(/4x.png)'}
				backgroundPosition={'right'}
				mt={3}
				width={'full'}
				h={'50vh'}
				backgroundSize={'cover'}
			></Box>
		</Box>
	);
};

export default Hero;
