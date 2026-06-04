import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading mt-3">{title}</h2>
      <div
        className={cn(
          "divider-tricolor mt-5 h-[3px] w-24 rounded-full",
          align === "center" && "mx-auto"
        )}
      />
      {description && (
        <p className="mt-5 text-base leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </Reveal>
  );
}
