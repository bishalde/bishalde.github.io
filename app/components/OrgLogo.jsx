import { SiGrafana, SiPrometheus, SiOpentelemetry, SiTerraform, SiGithub } from "react-icons/si";

// Keys used by the "logo" field in app/content/open-source.json.
const logos = {
  grafana: { Icon: SiGrafana, color: "#F46800", label: "Grafana" },
  prometheus: { Icon: SiPrometheus, color: "#E6522C", label: "Prometheus" },
  opentelemetry: { Icon: SiOpentelemetry, color: "#F5A800", label: "OpenTelemetry" },
  terraform: { Icon: SiTerraform, color: "#844FBA", label: "Terraform" },
};

export default function OrgLogo({ name, className = "h-5 w-5" }) {
  const { Icon, color, label } = logos[name] || { Icon: SiGithub, color: "#ffffff", label: "GitHub" };
  return <Icon className={`shrink-0 ${className}`} style={{ color }} role="img" aria-label={label} />;
}
