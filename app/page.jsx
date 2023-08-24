import Feed from '@components/Feed';

const Home = () => {
	return (
		<section className='w-full flex-center flex-col'>
			<h1 className='head_text text-center'>
				Discover & Share
				<br />
				<span className='purple_gradient text-center'>AI-Powered Prompts</span>
			</h1>
			<p className='desc text-center'>Promptly is an open-source AI prompting tool for the modern world to discover, create and share creative AI prompts</p>

			{/* Feed */}
			<Feed />
		</section>
	);
};

export default Home;
