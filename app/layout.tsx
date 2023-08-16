import './globals.css'
import { Koulen } from 'next/font/google'
import {Analytics} from '@vercel/analytics/react';

const koulen = Koulen({weight: ['400'], subsets: ['latin'] })

export const metadata = {
  title: 'Rise Together',
  description: 'Home of Rise Bootcamp and CrossFit 822',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
			<head>
				<title>Rise Bootcamp</title>
				<link rel="icon" href="/rise-logo.png" type="image/png" />
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-P63TMZ1KR3">
				</script>
				<script>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-P63TMZ1KR3');
				`}
				</script>
			</head>
      <body className={koulen.className}>
				{children}
				<Analytics />
			</body>
    </html>
  )
}
