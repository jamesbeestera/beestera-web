"use client";
import Link from "next/link";
import { useRive } from "@rive-app/react-canvas";

interface HeroBannerProps {
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  riveSrc?: string;
  imageAlt?: string;
}

export default function HeroBanner({
  heading = "Overnight Camps",
  subtext = "Technical training in a positive, energetic environment.",
  ctaLabel = "Learn More",
  ctaHref = "/camps",
  imageSrc,
  riveSrc,
  imageAlt = "Beestera camp photo",
}: HeroBannerProps) {
  return (
    <section className="bg-white w-full flex flex-col items-start">
      <div className="w-full flex flex-col gap-3 items-center px-6 md:px-16 lg:px-[120px] py-8 md:py-[48px]">
        <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-[1.2] text-[#1a1a1a] text-center max-w-[1200px] w-full">
          {heading}
        </h1>
        <p className="text-[14px] md:text-[16px] font-normal leading-[1.5] text-[#6b6b6b] text-center max-w-[840px] w-full">
          {subtext}
        </p>
        <a href={ctaHref} className="flex items-center gap-1.5 mt-1">
          <span className="text-[18px] font-semibold text-black">{ctaLabel}</span>
          <span className="text-[17px] text-[#c17d00]">→</span>
        </a>
      </div>
      <div className="w-full h-[392px] overflow-hidden relative bg-[#f8f7f4]" style={{ backgroundImage: "url(/images/hive-pattern.svg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        {riveSrc ? (
          <RiveAnimation src={riveSrc} />
        ) : imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-[11px] text-[#a3a3a3] text-center">Add your photo or Rive animation here</p>
          </div>
        )}
      </div>
    </section>
  );
}

function RiveAnimation({ src }: { src: string }) {
  const { RiveComponent } = useRive({ src, autoplay: true });
  return <RiveComponent className="w-full h-full" />;
}
