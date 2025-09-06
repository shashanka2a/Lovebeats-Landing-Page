import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GraduationCap, Zap } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah & Mike",
      university: "Stanford University",
      story: "We matched over our shared love for Studio Ghibli films and discovered we both had the same favorite indie playlist. Now we're study partners and so much more!",
      image: "https://images.unsplash.com/photo-1627964807070-e19d3ca29bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB5b3VuZyUyMGhhcHB5JTIwZGF0aW5nfGVufDF8fHx8MTc1NzE4OTkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Alex & Jordan",
      university: "UC Berkeley",
      story: "LoveBeats connected us through our love for K-pop and Marvel movies. Our first campus event together was a movie marathon - instant connection!",
      image: "https://images.unsplash.com/photo-1618436210414-9722c3e87d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGhlYWRwaG9uZXMlMjByb21hbnRpY3xlbnwxfHx8fDE3NTcxODk5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Emma & Chris",
      university: "MIT",
      story: "The .edu verification made me feel safe connecting with fellow students. Finding someone who loves the same obscure sci-fi films was amazing!",
      image: "https://images.unsplash.com/photo-1627964807070-e19d3ca29bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB5b3VuZyUyMGhhcHB5JTIwZGF0aW5nfGVufDF8fHx8MTc1NzE4OTkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#FDE4E8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-[#E94B61] animate-pulse" />
            <span className="text-[#E94B61] text-sm font-medium">Powered by Sonic ⚡</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-[#333333]">
            Campus Love Stories
          </h2>
          <p className="text-lg text-[#333333]/70 max-w-3xl mx-auto">
            Real student couples who found their perfect match through shared entertainment preferences and campus connections.
          </p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonials-grid grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="mb-6">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-16 h-16 rounded-full object-cover mx-auto group-hover:ring-4 group-hover:ring-[#E94B61]/20 transition-all duration-300"
                  />
                </div>
                <blockquote className="text-[#333333]/80 mb-4 leading-relaxed text-center">
                  "{testimonial.story}"
                </blockquote>
                <div className="text-center">
                  <cite className="text-[#E94B61] block font-medium">— {testimonial.name}</cite>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <GraduationCap className="w-4 h-4 text-[#333333]/50" />
                    <span className="text-[#333333]/50 text-sm">{testimonial.university}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 text-[#333333] font-semibold">Ready to Write Your Story?</h3>
            <p className="text-[#333333]/70 mb-6">Join thousands of students finding meaningful connections through shared entertainment tastes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#E94B61] hover:bg-[#E94B61]/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Sign Up with .edu Email
              </button>
              <button className="border-2 border-[#E94B61] text-[#E94B61] hover:bg-[#E94B61] hover:text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Browse Campus Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}