import { Shield, Heart, Zap, GraduationCap, Music, Film } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: GraduationCap,
      title: ".edu ZK-Proof Signup",
      description: "Secure student verification with zero-knowledge proofs. Only verified students can join, ensuring authentic campus connections."
    },
    {
      icon: Heart,
      title: "Music & Movie Matches",
      description: "Find your perfect study buddy or date through shared Spotify playlists and favorite films. Deep connections start with shared entertainment tastes."
    },
    {
      icon: Zap,
      title: "Sonic Speed Connections",
      description: "Lightning-fast matching powered by Sonic technology. Connect with compatible classmates instantly - no more waiting around!"
    }
  ];

  const additionalFeatures = [
    {
      icon: Music,
      title: "Playlist Compatibility",
      description: "See how your music taste aligns with potential matches"
    },
    {
      icon: Film,
      title: "Movie Night Matches",
      description: "Find someone who loves the same films for perfect date nights"
    },
    {
      icon: Shield,
      title: "Campus Privacy",
      description: "Your data stays secure with advanced privacy protection"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-[#333333]">
          Why Students Love LoveBeats
        </h2>
        <p className="text-lg text-center text-[#333333]/70 mb-16 max-w-3xl mx-auto">
          The only dating app designed specifically for college students. Connect with verified classmates through shared entertainment preferences.
        </p>
        
        {/* Main features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="feature-icon-wrapper w-20 h-20 bg-[#FDE4E8] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E94B61] transition-all duration-300 cursor-pointer group-hover:shadow-lg">
                  <Icon className="w-10 h-10 text-[#E94B61] group-hover:text-white transition-colors duration-300 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl mb-4 text-[#333333] font-semibold">{feature.title}</h3>
                <p className="text-[#333333]/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional features grid */}
        <div className="bg-gradient-to-r from-[#FDE4E8] to-[#E94B61]/10 rounded-2xl p-8">
          <h3 className="text-2xl text-center mb-8 text-[#333333] font-semibold">Perfect for Campus Life</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-md transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#E94B61] group-hover:animate-bounce" />
                  </div>
                  <h4 className="text-lg mb-2 text-[#333333] font-medium">{feature.title}</h4>
                  <p className="text-[#333333]/70 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}