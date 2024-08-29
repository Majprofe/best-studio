/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	  './src/styles/**/*.{css,scss}',
	],
	theme: {
	  fontFamily: {
		sans: ['Gotham SSm A', 'sans-serif'],
	  },
	  extend: {
		colors: {
		  primary: '#000000',
		  secondary: '#FFFFFF',
		  tertiary: '#fde047',
		},
	  },
	},
	plugins: [
	  require('@midudev/tailwind-animations'),
	],
  }
  