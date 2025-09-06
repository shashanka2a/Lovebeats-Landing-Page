import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#FDE4E8] to-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl mb-6 text-[#333333] leading-tight">
          Find Love Over Movies & Music 🎶🎬
        </h1>
        <p className="text-lg md:text-xl text-[#333333]/80 mb-8 max-w-2xl mx-auto">
          Connect with people who share your taste in entertainment. Discover meaningful relationships through the stories and soundtracks you love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-[#E94B61] hover:bg-[#E94B61]/90 text-white px-8 py-4 text-lg rounded-full"
          >
            Start Matching Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-[#E94B61] text-[#E94B61] hover:bg-[#FDE4E8] px-8 py-4 text-lg rounded-full"
          >
            Watch Demo
          </Button>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#E94B61]/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#E94B61]/5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#E94B61]/8 rounded-full"></div>
    </section>
  );
}