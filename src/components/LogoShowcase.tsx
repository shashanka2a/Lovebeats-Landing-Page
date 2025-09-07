import React from 'react';
import {
  LoveBeatsLogo,
  LoveBeatsIcon,
  AnimatedLoveBeatsLogo,
  GlowLoveBeatsLogo,
  CompactLoveBeatsLogo,
  LoadingLoveBeatsLogo
} from './ui/LoveBeatsLogo';

export function LogoShowcase() {
  return (
    <div className="p-8 space-y-12 bg-gradient-to-br from-white to-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">LoveBytes Logo Showcase</h1>
        <p className="text-gray-600">All variants and sizes of the LoveBeats logo</p>
      </div>

      {/* Icon Only Variants */}
      <section>
        <h2 className="text-xl font-semibold text-[#333333] mb-4">Icon Only</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
          <div className="text-center">
            <LoveBeatsIcon size="xs" variant="coral" />
            <p className="text-xs mt-2 text-gray-500">XS</p>
          </div>
          <div className="text-center">
            <LoveBeatsIcon size="sm" variant="coral" />
            <p className="text-xs mt-2 text-gray-500">SM</p>
          </div>
          <div className="text-center">
            <LoveBeatsIcon size="md" variant="coral" />
            <p className="text-xs mt-2 text-gray-500">MD</p>
          </div>
          <div className="text-center">
            <LoveBeatsIcon size="lg" variant="coral" />
            <p className="text-xs mt-2 text-gray-500">LG</p>
          </div>
          <div className="text-center">
            <LoveBeatsIcon size="xl" variant="coral" />
            <p className="text-xs mt-2 text-gray-500">XL</p>
          </div>
          <div className="text-center">
            <LoveBeatsIcon size="2xl" variant="coral" />
            <p className="text-xs mt-2 text-gray-500">2XL</p>
          </div>
        </div>
      </section>

      {/* Full Logo Variants */}
      <section>
        <h2 className="text-xl font-semibold text-[#333333] mb-4">Full Logo - Different Sizes</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-8">
            <LoveBeatsLogo size="xs" variant="coral" />
            <span className="text-sm text-gray-500">Extra Small</span>
          </div>
          <div className="flex items-center gap-8">
            <LoveBeatsLogo size="sm" variant="coral" />
            <span className="text-sm text-gray-500">Small</span>
          </div>
          <div className="flex items-center gap-8">
            <LoveBeatsLogo size="md" variant="coral" />
            <span className="text-sm text-gray-500">Medium</span>
          </div>
          <div className="flex items-center gap-8">
            <LoveBeatsLogo size="lg" variant="coral" />
            <span className="text-sm text-gray-500">Large</span>
          </div>
          <div className="flex items-center gap-8">
            <LoveBeatsLogo size="xl" variant="coral" />
            <span className="text-sm text-gray-500">Extra Large</span>
          </div>
          <div className="flex items-center gap-8">
            <LoveBeatsLogo size="2xl" variant="coral" />
            <span className="text-sm text-gray-500">2X Large</span>
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section>
        <h2 className="text-xl font-semibold text-[#333333] mb-4">Color Variants</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <LoveBeatsLogo size="lg" variant="coral" />
            <p className="text-sm mt-2 text-gray-500">Coral (Default)</p>
          </div>
          <div className="text-center p-4 bg-[#333333] rounded-lg shadow-sm">
            <LoveBeatsLogo size="lg" variant="light" />
            <p className="text-sm mt-2 text-white">Light</p>
          </div>
          <div className="text-center p-4 bg-gray-100 rounded-lg shadow-sm">
            <LoveBeatsLogo size="lg" variant="dark" />
            <p className="text-sm mt-2 text-gray-500">Dark</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <LoveBeatsLogo size="lg" variant="gradient" />
            <p className="text-sm mt-2 text-gray-500">Gradient</p>
          </div>
        </div>
      </section>

      {/* Special Variants */}
      <section>
        <h2 className="text-xl font-semibold text-[#333333] mb-4">Special Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <AnimatedLoveBeatsLogo size="lg" variant="coral" />
            <p className="text-sm mt-4 text-gray-500">Animated (Hover Effect)</p>
          </div>
          <div className="text-center p-6 bg-[#333333] rounded-lg shadow-sm">
            <GlowLoveBeatsLogo size="lg" variant="light" />
            <p className="text-sm mt-4 text-white">Glow Effect</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <LoadingLoveBeatsLogo size="lg" />
            <p className="text-sm mt-4 text-gray-500">Loading Animation</p>
          </div>
        </div>
      </section>

      {/* Compact Logo */}
      <section>
        <h2 className="text-xl font-semibold text-[#333333] mb-4">Compact Logo (For Headers)</h2>
        <div className="p-4 bg-white rounded-lg shadow-sm inline-block">
          <CompactLoveBeatsLogo />
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-xl font-semibold text-[#333333] mb-4">Usage Examples</h2>
        <div className="space-y-4 text-sm text-gray-600">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-mono text-xs">
              {`<LoveBeatsLogo size="lg" variant="coral" />`}
            </p>
            <p className="mt-2">Standard logo with text</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-mono text-xs">
              {`<LoveBeatsIcon size="md" variant="light" />`}
            </p>
            <p className="mt-2">Icon only for compact spaces</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-mono text-xs">
              {`<AnimatedLoveBeatsLogo size="xl" variant="gradient" />`}
            </p>
            <p className="mt-2">Animated logo with hover effects</p>
          </div>
        </div>
      </section>
    </div>
  );
}