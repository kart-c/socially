import { Response } from 'miragejs';

/**
 * All the routes related to post are present here.
 * */

/**
 * This handler handles lazy loading in explore page
 * send GET Request at /api/posts/:pgNumber
 * */

export const getExplorePostsHandler = function (schema, request) {
	const { pgNumber } = request.params;
	const posts = this.db.posts.slice(0, pgNumber * 3);
	return new Response(200, {}, { posts });
};
