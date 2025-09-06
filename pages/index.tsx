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
        <title>LoveBeats - Find Love Over Movies & Music</title>
        <meta name="description" content="Connect with people who share your taste in entertainment. Discover meaningful relationships through the stories and soundtracks you love." />
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