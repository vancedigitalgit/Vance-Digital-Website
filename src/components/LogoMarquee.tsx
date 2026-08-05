import Image from "next/image";

type Logo = {
  name: string;
  src: string;
  width: number;
  height: number;
  // Source files span very different aspect ratios (0.78:1 to 2.58:1), so
  // object-contain alone leaves wide logos (Tierra Digna, Eco Solar) reading
  // noticeably smaller than square/tall ones inside the same box. This is a
  // hand-tuned visual-weight correction, not a real logo size, kept close to
  // 1 for anything that already fills the box height on its own.
  scale?: number;
};

const LOGOS: Logo[] = [
  { name: "Adlees Fresh", src: "/images/clients/adlees-logo-v2.png", width: 1222, height: 632, scale: 1.15 },
  { name: "San Marino Mantenimiento", src: "/images/clients/san-marino-logo.png", width: 488, height: 473 },
  { name: "Tierra Digna", src: "/images/clients/tierra-digna-logo.png", width: 1961, height: 761, scale: 1.55 },
  { name: "Scorpius Scapes", src: "/images/clients/scorpius-scapes-logo-v2.png", width: 866, height: 1113 },
  { name: "Pathfinder", src: "/images/clients/pathfinder-logo-v3.png", width: 354, height: 453 },
  { name: "Eco Solar Power", src: "/images/clients/eco-solar-power-logo.png", width: 615, height: 264, scale: 1.4 },
  { name: "DJ's Mobile Rust & Mechanical", src: "/images/clients/djs-mobile-mechanic-logo-v2.png", width: 356, height: 356 },
  { name: "Iciar Ochoa Pintura", src: "/images/clients/iciar-ochoa-logo.png", width: 480, height: 480 },
];

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-14 w-20 shrink-0 items-center justify-center md:h-16 md:w-24">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="max-h-full max-w-full object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
        style={logo.scale && logo.scale !== 1 ? { transform: `scale(${logo.scale})` } : undefined}
      />
    </div>
  );
}

export function LogoMarquee() {
  return (
    <div>
      <p className="text-[11px] font-medium tracking-wide text-[var(--color-muted)] uppercase">
        Past builds, not a portal client list
      </p>
      <div className="mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-16">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoTile key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}
