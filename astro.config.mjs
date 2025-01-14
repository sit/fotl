// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://foundations-of-tech-leadership.pages.dev',
	integrations: [
		starlight({
			title: 'FoTL',
			social: {
				github: 'https://github.com/sit/fotl.dev',
			},
			sidebar: [
				'getting-started',
				{
					label: 'People',
					items: [
						{ label: 'Overview', slug: 'people/overview' },
					],
				},
				{
					label: 'Technical',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'tech/overview' },
					],
				},
				{
					label: 'Resources',
					collapsed: true,
					autogenerate: { directory: 'resources' },
				},
				'about',
			],
		}),
	],
});
