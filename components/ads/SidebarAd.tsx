"use client";

import { AdSlot } from "./AdSlot";

interface SidebarAdProps {
  desktopImage: string;
  mobileImage: string;
  alt?: string;
  href?: string;
}

export function SidebarAd({
  desktopImage,
  mobileImage,
  alt,
  href,
}: SidebarAdProps) {
  return (
    <aside className="w-full flex justify-center lg:justify-start mb-8">
      <AdSlot
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        desktopSize={{ width: 300, height: 600 }}
        mobileSize={{ width: 300, height: 250 }}
        alt={alt}
        href={href}
      />
    </aside>
  );
}
