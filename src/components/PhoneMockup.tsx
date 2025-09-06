import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PhoneMockup() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-[#FDE4E8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-[#333333]">
              See LoveBeats in Action
            </h2>
            <p className="text-lg text-[#333333]/70 mb-8 leading-relaxed">
              Swipe through profiles curated by your entertainment preferences. Our AI understands your taste in movies and music to find truly compatible matches.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#E94B61] rounded-full"></div>
                <span className="text-[#333333]">Smart matching based on entertainment DNA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#E94B61] rounded-full"></div>
                <span className="text-[#333333]">In-app movie and music discovery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#E94B61] rounded-full"></div>
                <span className="text-[#333333]">Real-time compatibility scoring</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwJTIwYXBwJTIwc2NyZWVufGVufDF8fHx8MTc1NzE4NjMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="LoveBeats app mockup on smartphone"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating UI elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-[#FDE4E8]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-[#333333]">Match found!</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[#E94B61] rounded-lg shadow-lg p-3 text-white">
                <div className="text-sm">98% compatibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}