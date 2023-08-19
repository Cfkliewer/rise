import './globals.css'
import { Koulen } from 'next/font/google'
import {Analytics} from '@vercel/analytics/react';
import Script from 'next/script'
import Head from 'next/head'

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
				<link rel="icon" href="/rise-logo.png" type="image/png" />
				<meta name="robots" content="all" charSet='utf-8'/>
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-P63TMZ1KR3"/>
				<Script id="google-analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-P63TMZ1KR3');
				`}
				</Script>
			</head>
      <body className={koulen.className}>
				<Head>
					<title>Rise Together</title>
					<meta property="og:title" content="Rise Together" key="title" />
				</Head>
				{children}
				<Analytics />
			</body>
    </html>
  )
}
