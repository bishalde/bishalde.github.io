import { TbBrandTwilio } from "react-icons/tb";
import { SiNokia } from "react-icons/si";

// Brand marks for companies in profile.experience: react-icons where available,
// otherwise official logo files in /public/logos.
const logos = {
  Twilio: { bg: "#F22F46", render: (s) => <TbBrandTwilio size={s * 0.62} color="#fff" /> },
  Nokia: { bg: "#ffffff", render: (s) => <SiNokia size={s * 0.9} color="#124191" /> },
  // Official PwC logo (Wikimedia Commons).
  PwC: {
    bg: "#ffffff",
    render: (s) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/logos/pwc.svg" alt="" style={{ width: s * 0.72, height: "auto" }} />
    ),
  },
  // Official logo from reflowtech.in; the tile shows only its round mark (left edge).
  "Reflow Technologies": {
    bg: "#ffffff",
    render: (s) => (
      <span
        className="block"
        style={{
          width: s * 0.8,
          height: s * 0.8,
          backgroundImage: "url(/logos/reflow.png)",
          backgroundSize: "auto 100%",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      />
    ),
  },
};

export default function CompanyLogo({ company, size = 56, className = "" }) {
  const logo = logos[company];
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ${className}`}
      style={{ width: size, height: size, background: logo?.bg || "#262626" }}
      aria-label={`${company} logo`}
      role="img"
    >
      {logo ? (
        logo.render(size)
      ) : (
        <span className="font-bold text-white" style={{ fontSize: size * 0.42 }}>
          {company[0]}
        </span>
      )}
    </span>
  );
}
