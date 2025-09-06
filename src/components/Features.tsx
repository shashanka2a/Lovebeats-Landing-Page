import { Shield, Heart, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "ZK Privacy",
      description: "Your personal data stays private with zero-knowledge proofs. Connect safely without compromising your privacy."
    },
    {
      icon: Heart,
      title: "Taste Matches",
      description: "Find compatibility through shared movies, music, and entertainment preferences. Deep connections start with shared passions."
    },
    {
      icon: Zap,
      title: "Sonic Speed",
      description: "Lightning-fast matching powered by Sonic technology. Find your perfect match in seconds, not hours."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-[#333333]">
          Why Choose LoveBeats?
        </h2>
        <p className="text-lg text-center text-[#333333]/70 mb-16 max-w-2xl mx-auto">
          Experience dating like never before with our cutting-edge features designed for meaningful connections.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="feature-icon-wrapper w-16 h-16 bg-[#FDE4E8] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E94B61] transition-all duration-300 cursor-pointer">
                  <Icon className="w-8 h-8 text-[#E94B61] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl mb-4 text-[#333333]">{feature.title}</h3>
                <p className="text-[#333333]/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}