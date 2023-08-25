import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Head from 'next/head';

export const metadata = {
	title: 'Promptly',
	description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<Head>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<body>
				<Provider>
					<main className='app'>
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
