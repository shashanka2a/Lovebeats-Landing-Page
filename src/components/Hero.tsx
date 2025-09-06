import { Button } from "./ui/button";
import { Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#E94B61] via-[#FDE4E8] to-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Powered by Sonic logo */}
        <div className="hero-text animate-fade-in-down mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-[#E94B61]" />
            <span className="text-[#333333] text-sm">Powered by Sonic</span>
          </div>
        </div>

        <h1 className="hero-text animate-fade-in-up text-4xl md:text-6xl mb-6 text-[#333333] leading-tight">
          Find Love Over Movies & Music 🎶🎬
        </h1>
        <p className="hero-subtitle animate-fade-in-up animate-delay-200 text-lg md:text-xl text-[#333333]/80 mb-8 max-w-2xl mx-auto">
          Connect with people who share your taste in entertainment. Discover meaningful relationships through the stories and soundtracks you love.
        </p>
        <div className="hero-cta animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-sweep bg-[#E94B61] hover:bg-[#E94B61]/90 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Start Matching Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-sweep border-2 border-[#E94B61] text-[#E94B61] hover:bg-[#E94B61] hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Watch Demo
          </Button>
        </div>
      </div>
      
      {/* Enhanced decorative background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/8 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-12 h-12 bg-white/6 rounded-full animate-pulse"></div>
    </section>
  );
}