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
		  tertiary: '#F4F91D',
		},
		scrollMargin: {
			'header': '80px', // Ajusta el valor a la altura de tu encabezado
		},
	  },
	},
	plugins: [
	  require('@midudev/tailwind-animations'),
	],
  }
  