import type { IconName } from "@/data/site";

const paths: Record<IconName, JSX.Element> = {
  sheet: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18" />
    </>
  ),
  workspace: <path d="M4 4h16v6H4zM4 14h10v6H4zM18 14h2v6h-2z" />,
  web: <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />,
  check: <path d="M20 6 9 17l-5-5" />,
};

type IconProps ={ name: IconName; size?: number; strokeWidth?: number; className?: string };

export function Icon({ name, size = 20, strokeWidth = 2, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
