import Link from "next/link";

interface HeroBannerProps {
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroBanner({
  heading = "Overnight Camps",
  subtext = "Technical training in a positive, energetic environment — developing great players and better people.",
  ctaLabel = "Learn More",
  ctaHref = "/camps",
  imageSrc,
  imageAlt = "Beestera camp photo",
}: HeroBannerProps) {
  return (
    <section className="bg-white w-full flex flex-col items-start">
      <div className="w-full flex flex-col gap-3 items-center px-[120px] py-[48px]">
        <h1 className="text-[64px] font-bold leading-[93px] text-[#1a1a1a] text-center max-w-[1200px] w-full" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          {heading}
        </h1>
        <p className="text-[16px] font-normal leading-[1.5] text-[#6b6b6b] text-center max-w-[840px] w-full" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          {subtext}
        </p>
        <Link href={ctaHref} className="flex items-center gap-1.5 mt-1 group">
          <span className="text-[18px] font-semibold leading-[1.5] text-black group-hover:text-[#ffbb00] transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {ctaLabel}
          </span>
          <span className="text-[17px] text-[#c17d00] group-hover:text-[#ffbb00] transition-colors">→</span>
        </Link>
      </div>
      <div className="w-full h-[392px] overflow-hidden relative bg-[#f8f7f4]">
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-[11px] text-[#a3a3a3] text-center" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Add your camp photo here
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
