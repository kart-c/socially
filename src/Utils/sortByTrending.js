export const sortByTrending = (posts, trending) => {
	if (trending) {
		return [...posts].sort(
			(a, b) =>
				parseInt(b.likes.likeCount) +
				b.comments.length -
				parseInt(a.likes.likeCount + a.comments.length)
		);
	} else return posts.reverse();
};
