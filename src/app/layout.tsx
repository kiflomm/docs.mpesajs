import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: "mpesajs V 1.0"
}

const banner = <Banner storageKey='mpesajs-banner'>Mpesajs 1.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Mpesajs</b>}
    projectLink='https://github.com/kiflomm/mpesajs'
  >
    <Link className="nx-p-2" href="https://linkedin.com/in/kiflom-berihu" target="_blank">LinkedIn</Link>
    <Link className="nx-p-2" href="https://t.me/Brogrammer_kiflom" target="_blank">Chat</Link>
  </Navbar>
)

// Custom styles for the footer
const footerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  textAlign: 'center' as const
}

const footer = (
  <Footer className="nx-py-4">
    <div style={footerStyle}>
      Created with ❤️ by Kiflom Berihu | Fullstack Developer & API Specialist | {new Date().getFullYear()}. 😊
    </div>
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/kiflomm/mpesajs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}