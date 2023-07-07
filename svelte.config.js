import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$stores: './src/stores',
			$lib: './src/lib',
			$hooks: './src/hooks',
			$src: './src'
		},
		prerender: {
			entries: [
				'/campaign/Track-oh09wsy/time-attack',
				'/campaign/Track-e6sf4od/time-attack',
				'/campaign/Track-kex7wtv/time-attack',
				'/campaign/Track-o5of60o/time-attack',
				'/campaign/Track-6i3pgd9/time-attack',
				'/campaign/Track-b5sognn/time-attack',
				'/campaign/Track-ylalbsx/time-attack',
				'/campaign/Track-92zwxs1/time-attack',
				'/campaign/Track-1ol45dm/time-attack',
				'/campaign/Track-xapaw93/time-attack',
				'/',
				'/menu/campaign',
				'/menu/main',
				'/menu/options',
				'/menu/user-tracks',
				'/track-elements/render',
				'/user/oh09wsy/time-attack',
				'/user/e6sf4od/time-attack',
				'/user/kex7wtv/time-attack',
				'/user/o5of60o/time-attack',
				'/user/6i3pgd9/time-attack',
				'/user/b5sognn/time-attack',
				'/user/ylalbsx/time-attack',
				'/user/92zwxs1/time-attack',
				'/user/1ol45dm/time-attack',
				'/user/xapaw93/time-attack',
				'/user/oh09wsy/edit',
				'/user/e6sf4od/edit',
				'/user/kex7wtv/edit',
				'/user/o5of60o/edit',
				'/user/6i3pgd9/edit',
				'/user/b5sognn/edit',
				'/user/ylalbsx/edit',
				'/user/92zwxs1/edit',
				'/user/1ol45dm/edit',
				'/user/xapaw93/edit',
				'/user/oh09wsy/validate',
				'/user/e6sf4od/validate',
				'/user/kex7wtv/validate',
				'/user/o5of60o/validate',
				'/user/6i3pgd9/validate',
				'/user/b5sognn/validate',
				'/user/ylalbsx/validate',
				'/user/92zwxs1/validate',
				'/user/1ol45dm/validate',
				'/user/xapaw93/validate'
			]
		}
	}
}

export default config
