import { Heart, Music, Film, Zap, GraduationCap, Shield, Calendar } from "lucide-react";

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
            <p className="text-white/70 mb-4">
              The dating app built for students. Find love through shared entertainment tastes.
            </p>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 w-fit">
              <Zap className="w-4 h-4 text-[#E94B61] animate-pulse" />
              <span className="text-sm">Powered by Sonic ⚡</span>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#E94B61]" />
              For Students
            </h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">.edu Verification</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Campus Events</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Study Groups</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 flex items-center gap-2">
              <Music className="w-4 h-4 text-[#E94B61]" />
              Features
            </h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Music Matching</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Movie Preferences</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Sonic Speed</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#E94B61]" />
              Safety & Support
            </h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Safety Center</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#E94B61] transition-colors">Help & Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="flex items-center gap-2 bg-[#E94B61]/10 rounded-full px-3 py-1">
              <Zap className="w-4 h-4 text-[#E94B61]" />
              <span className="text-white text-sm">Powered by Sonic</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-[#E94B61]" />
              <Film className="w-5 h-5 text-[#E94B61]" />
            </div>
          </div>
          <div className="text-white/70 text-sm">
            © 2025 LoveBeats. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}