const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN || 'keyst.one'

module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: cdnDomain,
        pathname: '**',
      },
    ],
  },
}
