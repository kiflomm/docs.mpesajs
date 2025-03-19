import nextra from 'nextra'

const withNextra = nextra({
  // ... Other Nextra config options
  defaultShowCopyCode: true,
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/quickstart',
        permanent: true,
      },
    ]
  },
  // ... Other Next.js config options
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})
