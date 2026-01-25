import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className = "", fallback }) => {
  const [imgError, setImgError] = React.useState(false);

  if (imgError && fallback) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-background-secondary border border-foreground ${className}`}>
        <span className="font-display font-bold text-sm">
          {fallback.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-contain ${className}`}
      onError={() => setImgError(true)}
    />
  );
};

export default Logo;