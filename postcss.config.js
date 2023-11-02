import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const settings = {
	plugins: [
		tailwindcss(),
		autoprefixer(),
	],
};

export default settings;
