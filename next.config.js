/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.postimg.cc',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
