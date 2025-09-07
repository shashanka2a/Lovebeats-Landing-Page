import Head from 'next/head'
import { Hero } from '../src/components/Hero'
import { Features } from '../src/components/Features'
import { PhoneMockup } from '../src/components/PhoneMockup'
import { Testimonials } from '../src/components/Testimonials'
import { Footer } from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>LoveBytes - Student Dating App | Find Your Campus Crush Through Movies & Music</title>
        <meta name="description" content="The dating app built for students. Connect with verified classmates through shared entertainment preferences. Secure .edu verification, Sonic-speed matching, and campus events." />
        <meta name="keywords" content="student dating app, college dating, campus dating, .edu verification, music matching, movie preferences, university dating" />
      </Head>
      <div className="min-h-screen">
        <Hero />
        <Features />
        <PhoneMockup />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}