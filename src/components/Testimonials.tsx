import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah & Mike",
      story: "We matched over our shared love for sci-fi movies and discovered we both had the same favorite soundtrack. Six months later, we're planning our wedding!",
      image: "https://images.unsplash.com/photo-1627964807070-e19d3ca29bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB5b3VuZyUyMGhhcHB5JTIwZGF0aW5nfGVufDF8fHx8MTc1NzE4OTkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Alex & Jordan",
      story: "LoveBeats connected us through our indie music taste. Our first date was at a concert for a band we both loved. Perfect match!",
      image: "https://images.unsplash.com/photo-1618436210414-9722c3e87d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGhlYWRwaG9uZXMlMjByb21hbnRpY3xlbnwxfHx8fDE3NTcxODk5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Emma & Chris",
      story: "The privacy features made me feel safe while dating online. Finding someone who loves the same obscure films was incredible.",
      image: "https://images.unsplash.com/photo-1627964807070-e19d3ca29bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB5b3VuZyUyMGhhcHB5JTIwZGF0aW5nfGVufDF8fHx8MTc1NzE4OTkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#FDE4E8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-[#333333]">
          Love Stories Start Here
        </h2>
        <p className="text-lg text-center text-[#333333]/70 mb-16 max-w-2xl mx-auto">
          Real couples who found their perfect match through shared entertainment preferences.
        </p>
        
        <div className="testimonials-container">
          <div className="testimonials-grid grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                </div>
                <blockquote className="text-[#333333]/80 mb-4 leading-relaxed text-center">
                  "{testimonial.story}"
                </blockquote>
                <cite className="text-[#E94B61] block text-center">— {testimonial.name}</cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}