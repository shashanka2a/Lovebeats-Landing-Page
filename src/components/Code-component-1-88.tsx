import { Heart, Music, Film } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-[#E94B61]" />
              <span className="text-xl">LoveBeats</span>
            </div>
            <p className="text-white/70">
              Find love through the movies and music you both adore.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Product</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Connect</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Music className="w-5 h-5 text-[#E94B61]" />
            <Film className="w-5 h-5 text-[#E94B61]" />
            <span className="text-white/70">Built on Sonic</span>
          </div>
          <div className="text-white/70 text-sm">
            © 2025 LoveBeats. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}