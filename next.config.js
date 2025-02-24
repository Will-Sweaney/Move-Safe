/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === 'production'

const nextConfig = {
	output: 'export',
  basePath: production ? '/Move-Safe' : '',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
