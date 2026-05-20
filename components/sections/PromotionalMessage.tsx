import Link from "next/link";

type PromotionalMessageVariant = "dark" | "light" | "brand";

interface PromotionalMessageProps {
  variant?: PromotionalMessageVariant;
  message?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const themes = {
  dark:  { wrapper: "bg-[#27272a]",                                 text: "text-white", border: "border-white"  },
  light: { wrapper: "bg-white border-b border-[#e4e4e7]",           text: "text-black", border: "border-black"  },
  brand: { wrapper: "bg-gradient-to-b from-[#ffd700] to-[#ffbb00]", text: "text-black", border: "border-black"  },
};

export default function PromotionalMessage({
  variant = "dark",
  message = "Limited-time offer—all camps are 20% off.",
  ctaLabel = "See Camps",
  ctaHref = "/camps",
}: PromotionalMessageProps) {
  const t = themes[variant];
  return (
    <div className={"w-full " + t.wrapper}>

      {/* Desktop: single row, centered — confirmed py-[12px] from Figma */}
      <div className="hidden md:flex justify-center items-center w-full px-8 py-[12px]">
        <div className="flex gap-3 items-center">
          <p className={"text-[16px] font-bold leading-[1.2] whitespace-nowrap " + t.text} style={{ fontFamily: "Open Sans, sans-serif" }}>
            {message}
          </p>
          <Link href={ctaHref} className={"text-[16px] font-bold leading-[1.2] border-b pb-px hover:opacity-70 transition-opacity whitespace-nowrap " + t.text + " " + t.border} style={{ fontFamily: "Open Sans, sans-serif" }}>
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* Mobile: stacked, full width 390px, py-[12px] gap-[10px] — confirmed from Figma */}
      <div className="flex md:hidden flex-col items-center w-full px-4 py-[12px] gap-[10px]">
        <p className={"text-[14px] font-bold leading-[1.2] text-center " + t.text} style={{ fontFamily: "Open Sans, sans-serif" }}>
          {message}
        </p>
        <Link href={ctaHref} className={"text-[14px] font-bold leading-[1.2] border-b pb-px hover:opacity-70 transition-opacity " + t.text + " " + t.border} style={{ fontFamily: "Open Sans, sans-serif" }}>
          {ctaLabel}
        </Link>
      </div>

    </div>
  );
}
