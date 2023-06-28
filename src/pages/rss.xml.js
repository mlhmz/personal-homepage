import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const projects = await getCollection('portfolio');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: projects.map((project) => ({
			...project.data,
			link: `/portfolio/${post.slug}/`,
		})),
	});
}
