import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="description" content="The dating app built for students. Connect with verified classmates through shared entertainment preferences. Secure .edu verification and Sonic-speed matching." />
        <meta name="keywords" content="student dating app, college dating, campus dating, .edu verification, music matching, movie preferences, university dating, sonic speed" />
        <meta name="author" content="LoveBeats" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LoveBeats - Student Dating App | Find Your Campus Crush" />
        <meta property="og:description" content="The dating app built for students. Connect with verified classmates through shared entertainment preferences. Secure .edu verification and Sonic-speed matching." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="LoveBeats - Student Dating App | Find Your Campus Crush" />
        <meta property="twitter:description" content="The dating app built for students. Connect with verified classmates through shared entertainment preferences. Secure .edu verification and Sonic-speed matching." />
        <meta property="twitter:image" content="/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}