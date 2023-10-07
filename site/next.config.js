/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'X86 to Arm64',
    description: 'LavaFlows's X86 to Arm64 Registry',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxj0QF7T-XgaDdDnTgPadnXVfat9QdWCDt9eBq91HtXQ&s',
    listUrl: 'https://registry.kasmweb.com/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
