import React from 'react';
import { cn } from '@/lib/utils';

interface LoveBeatsLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'coral' | 'light' | 'dark' | 'gradient';
  showText?: boolean;
  className?: string;
}

interface LoveBeatsIconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'coral' | 'light' | 'dark' | 'gradient';
  className?: string;
}

// Heart icon component with rounded corners
export function LoveBeatsIcon({ size = 'md', variant = 'coral', className }: LoveBeatsIconProps) {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20'
  };

  const variantClasses = {
    coral: 'text-[#E94B61]',
    light: 'text-white',
    dark: 'text-[#333333]',
    gradient: 'text-transparent bg-gradient-to-br from-[#E94B61] to-[#FF6B7A] bg-clip-text'
  };

  return (
    <svg
      className={cn(sizeClasses[size], variantClasses[variant], className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        rx="2"
        ry="2"
      />
    </svg>
  );
}

// Full logo with text
export function LoveBeatsLogo({ size = 'md', variant = 'coral', showText = true, className }: LoveBeatsLogoProps) {
  const containerSizeClasses = {
    xs: 'gap-1',
    sm: 'gap-1.5',
    md: 'gap-2',
    lg: 'gap-2.5',
    xl: 'gap-3',
    '2xl': 'gap-4'
  };

  const textSizeClasses = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
    '2xl': 'text-3xl'
  };

  const textVariantClasses = {
    coral: 'text-[#333333]',
    light: 'text-white',
    dark: 'text-[#333333]',
    gradient: 'text-transparent bg-gradient-to-r from-[#E94B61] to-[#FF6B7A] bg-clip-text'
  };

  if (!showText) {
    return <LoveBeatsIcon size={size} variant={variant} className={className} />;
  }

  return (
    <div className={cn('flex items-center', containerSizeClasses[size], className)}>
      <LoveBeatsIcon size={size} variant={variant} />
      <span className={cn(
        'font-bold tracking-tight',
        textSizeClasses[size],
        textVariantClasses[variant]
      )}>
        LoveBeats
      </span>
    </div>
  );
}

// Animated logo variants
export function AnimatedLoveBeatsLogo({ size = 'md', variant = 'coral', className }: LoveBeatsLogoProps) {
  return (
    <div className={cn('group cursor-pointer', className)}>
      <LoveBeatsLogo 
        size={size} 
        variant={variant} 
        className="transition-all duration-300 group-hover:scale-105"
      />
      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .group:hover .animate-heartbeat {
          animation: heartbeat 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Logo with glow effect
export function GlowLoveBeatsLogo({ size = 'md', variant = 'coral', className }: LoveBeatsLogoProps) {
  return (
    <div className={cn('relative', className)}>
      <LoveBeatsLogo size={size} variant={variant} />
      <div className="absolute inset-0 -z-10 blur-lg opacity-30">
        <LoveBeatsLogo size={size} variant="coral" />
      </div>
    </div>
  );
}

// Compact logo for headers/navbars
export function CompactLoveBeatsLogo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <LoveBeatsIcon size="sm" variant="coral" />
      <span className="text-lg font-bold text-[#333333]">LoveBeats</span>
    </div>
  );
}

// Loading logo with pulse animation
export function LoadingLoveBeatsLogo({ size = 'lg' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="animate-pulse">
        <LoveBeatsIcon size={size} variant="coral" />
      </div>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-[#E94B61] rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-[#E94B61] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-[#E94B61] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
}