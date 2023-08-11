import './globals.css';
import { Nunito_Sans } from 'next/font/google'
// import { QueryClient, QueryClientProvider } from 'react-query';
import Providers from "@/utils/provider";
const nunitoSans = Nunito_Sans({ subsets: ['latin']});

export const metadata = {
  title: 'ITX Telecoms',
  description: 'Fast and reliable internet access provider',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://itx-redesign.vercel.app/" />
          <meta name="twitter:site" content="@MEEDNetworks" />
          <meta name="twitter:title" content="ITX Telecoms" />
          <meta name="twitter:description" content="Fast and reliable internet access provider"/>
          <meta name="twitter:image" content="https://itx-redesign.vercel.app/assets/banner.png"/>
          <meta name="twitter:creator" content="@MEEDNetworks" />

          <meta property="og:site_name" content="ITX Telecoms" />
          <meta property="og:url" content="https://itx-redesign.vercel.app/" />
          <meta
            property="og:image"
            content="https://itx-redesign.vercel.app/assets/banner.png"
          />
        <meta 
        name="keywords"
        content="internet, radio internet, wifi, radio, business wifi"/>
          <body className={nunitoSans.className}>
            <Providers>{children}</Providers>
          </body>
    </html>
  )
}
