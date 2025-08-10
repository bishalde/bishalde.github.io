import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-8 text-sm text-muted-foreground flex flex-col gap-2 sm:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-4">
          {profile.socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" className="hover:text-foreground">
              {s.name}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}
