export const sortByDate = (posts, sortBy) => {
	if (sortBy === 'oldest') {
		return [...posts].sort(
			(a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
		);
	} else if (sortBy === 'newest') {
		return [...posts].sort(
			(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
		);
	} else return posts;
};
