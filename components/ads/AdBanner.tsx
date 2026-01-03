"use client";

import { AdSlot } from "./AdSlot";

interface AdBannerProps {
  desktopImage: string;
  mobileImage: string;
  alt?: string;
  href?: string;
}

export function AdBanner({
  desktopImage,
  mobileImage,
  alt,
  href,
}: AdBannerProps) {
  return (
    <AdSlot
      desktopImage={desktopImage}
      mobileImage={mobileImage}
      desktopSize={{ width: 728, height: 90 }}
      mobileSize={{ width: 320, height: 50 }}
      alt={alt}
      href={href}
    />
  );
}
