/** @format */

import React from 'react';
import InputBox from './InputBox';
import Stories from './Stories';
import Posts from './Posts';

function Feed({ posts }) {
	return (
		<div className='flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40 scrollbar-hide'>
			<div className='max-w-md mx-auto md:max-w-lg lg:max-w-2xl'>
				<Stories />
				<InputBox />
				<Posts posts={posts} />
			</div>
		</div>
	);
}

export default Feed;
