import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="description" content="Find Love Over Movies & Music - Connect with people who share your taste in entertainment" />
        <meta name="keywords" content="dating, movies, music, entertainment, relationships, matching" />
        <meta name="author" content="LoveBeats" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LoveBeats - Find Love Over Movies & Music" />
        <meta property="og:description" content="Connect with people who share your taste in entertainment. Discover meaningful relationships through the stories and soundtracks you love." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="LoveBeats - Find Love Over Movies & Music" />
        <meta property="twitter:description" content="Connect with people who share your taste in entertainment. Discover meaningful relationships through the stories and soundtracks you love." />
        <meta property="twitter:image" content="/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}