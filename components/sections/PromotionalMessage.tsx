import Link from "next/link";

interface PromotionalMessageProps {
  message?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PromotionalMessage({
  message = "Limited-time offer—all camps are 20% off.",
  ctaLabel = "See Camps",
  ctaHref = "/camps",
}: PromotionalMessageProps) {
  return (
    <div className="bg-[#27272a] w-full flex justify-center items-center px-8 py-[23px]">
      <div className="flex gap-3 items-center">
        <p className="text-[16px] font-bold leading-[1.2] text-white text-center whitespace-nowrap" style={{ fontFamily: "Open Sans, sans-serif" }}>
          {message}
        </p>
        <Link href={ctaHref} className="text-[16px] font-bold leading-[1.2] text-white border-b border-white pb-px hover:opacity-70 transition-opacity whitespace-nowrap" style={{ fontFamily: "Open Sans, sans-serif" }}>
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
