type RoofDividerProps = {
  /** Color that fills the roofline shape itself */
  fill?: string;
  /** Background color behind the divider (the section below it) */
  behind?: string;
  flip?: boolean;
  className?: string;
};

/**
 * The site's signature shape: a repeating single-pitch ridge line, drawn
 * from the roofline itself rather than a generic decorative wave. Used as
 * the transition between sections throughout the site.
 */
export default function RoofDivider({
  fill = "#1E293B",
  behind = "#FFFFFF",
  flip = false,
  className = "",
}: RoofDividerProps) {
  return (
    <div
      className={`roofline ${className}`}
      style={{ backgroundColor: behind, transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 64" preserveAspectRatio="none">
        <path
          d="M0,64 L0,40 L100,8 L200,40 L300,8 L400,40 L500,8 L600,40 L700,8 L800,40 L900,8 L1000,40 L1100,8 L1200,40 L1200,64 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
