"use client";
import {
  SiPython,
  SiJavascript,
  SiGo,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGit,
  SiGithubactions,
  SiDatadog,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

export const iconMap = {
  "Python": { icon: SiPython, color: "#3776AB" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "Go": { icon: SiGo, color: "#00ADD8" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  "HTML": { icon: SiHtml5, color: "#E34F26" },
  "CSS": { icon: SiCss, color: "#1572B6" },
  "SCSS": { icon: SiSass, color: "#CC6699" },
  "Tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
  "Bootstrap": { icon: SiBootstrap, color: "#7952B3" },
  "ReactJS": { icon: SiReact, color: "#61DAFB" },
  "NextJS": { icon: SiNextdotjs, color: "#ffffff" },
  "SvelteKit": { icon: SiSvelte, color: "#FF3E00" },
  "NodeJS": { icon: SiNodedotjs, color: "#339933" },
  "ExpressJS": { icon: SiExpress, color: "#ffffff" },
  "Django": { icon: SiDjango, color: "#092E20" },
  "Flask": { icon: SiFlask, color: "#ffffff" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  "AWS": { icon: FaAws, color: "#FF9900" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Kubernetes": { icon: SiKubernetes, color: "#326CE5" },
  "Terraform": { icon: SiTerraform, color: "#7B42BC" },
  "Git": { icon: SiGit, color: "#F05032" },
  "CI/CD": { icon: SiGithubactions, color: "#2088FF" },
  "Datadog": { icon: SiDatadog, color: "#632CA6" },
  "Prometheus": { icon: SiPrometheus, color: "#E6522C" },
  "Grafana Stack": { icon: SiGrafana, color: "#F46800" },
};

export default function TechIcon({ name, size = 20, showLabel = true, className = "" }) {
  const tech = iconMap[name];
  if (!tech) {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <span className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-xs">?</span>
        {showLabel && <span>{name}</span>}
      </span>
    );
  }

  const Icon = tech.icon;
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Icon size={size} style={{ color: tech.color }} />
      {showLabel && <span>{name}</span>}
    </span>
  );
}
