import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card/40 py-8">
      <div className="flex w-full flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-10 xl:px-16">
        <p className="text-sm text-muted">
          &copy; {year} {portfolioData.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted">
          Built with{" "}
          <span className="text-foreground">Next.js</span>,{" "}
          <span className="text-foreground">TypeScript</span> &{" "}
          <span className="text-foreground">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
