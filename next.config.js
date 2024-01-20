/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  generateMetadata: {
    metadataBase: 'https://yuki-snow1823.github.io/onryo-button.github.io/',
  },
}

module.exports = nextConfig