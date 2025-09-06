import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Calendar, MapPin, Users, Zap } from "lucide-react";

export function PhoneMockup() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-[#FDE4E8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-[#333333]">
              Campus Dating, Reimagined
            </h2>
            <p className="text-lg text-[#333333]/70 mb-8 leading-relaxed">
              Swipe through verified student profiles curated by entertainment preferences. Find study partners, movie buddies, or your next relationship - all with Sonic-speed matching.
            </p>
            
            {/* Campus Events CTA Section */}
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg border border-[#E94B61]/10 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E94B61]/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#E94B61]" />
                </div>
                <h3 className="text-xl font-semibold text-[#333333]">Campus Events</h3>
              </div>
              <p className="text-[#333333]/70 mb-4">
                Discover and attend campus events with your matches. From movie nights to concerts, find activities you'll both love.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#E94B61]/10 text-[#E94B61] px-3 py-1 rounded-full text-sm">🎬 Movie Nights</span>
                <span className="bg-[#E94B61]/10 text-[#E94B61] px-3 py-1 rounded-full text-sm">🎵 Concerts</span>
                <span className="bg-[#E94B61]/10 text-[#E94B61] px-3 py-1 rounded-full text-sm">📚 Study Groups</span>
              </div>
              <Button className="w-full bg-[#E94B61] hover:bg-[#E94B61]/90 text-white rounded-full transition-all duration-300 hover:scale-105 group">
                <MapPin className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Explore Campus Events
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E94B61] mb-1">10k+</div>
                <div className="text-sm text-[#333333]/70">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E94B61] mb-1">500+</div>
                <div className="text-sm text-[#333333]/70">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E94B61] mb-1">&lt;1s</div>
                <div className="text-sm text-[#333333]/70">Match Speed</div>
              </div>
            </div>
            
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