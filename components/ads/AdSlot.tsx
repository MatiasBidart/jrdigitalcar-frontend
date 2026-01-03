"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AdSlotProps {
  desktopImage: string;
  mobileImage: string;
  desktopSize: { width: number; height: number };
  mobileSize: { width: number; height: number };
  alt?: string;
  href?: string;
}

export function AdSlot({
  desktopImage,
  mobileImage,
  desktopSize,
  mobileSize,
  alt = "Publicidad",
  href,
}: AdSlotProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const image = isMobile ? mobileImage : desktopImage;
  const { width, height } = isMobile ? mobileSize : desktopSize;

  const creative = (
    <div className="relative" style={{ width, height }}>
      <Image
        src={image}
        alt={alt}
        fill
        className="object-contain"
      />
    </div>
  );

  return (
    <div className="flex justify-center mb-8">
      {href ? (
        <Link href={href} aria-label={alt}>
          {creative}
        </Link>
      ) : (
        creative
      )}
    </div>
  );
}

