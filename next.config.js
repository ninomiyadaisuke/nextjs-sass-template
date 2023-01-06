/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname,'styles')],
    additionalData: `@use './src/styles/variables.scss' as *;`,
  },
}

module.exports = nextConfig
