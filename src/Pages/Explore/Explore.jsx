import { PgWrapper, Post } from 'Components';
import React from 'react';

const Explore = () => {
	return (
		<PgWrapper>
			<Post img={'https://www.picsum.photos/300'} />
			<Post />
			<Post />
		</PgWrapper>
	);
};

export { Explore };
