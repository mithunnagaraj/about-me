"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    return () => document.body.classList.remove("mobile-nav-open");
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        className="mobile-nav-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <div className="mobile-nav-panel" role="dialog" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="mobile-nav-availability" href="#contact" onClick={() => setOpen(false)}>
            <span className="status-dot" />
            Let&apos;s talk
          </a>
        </div>
      )}
    </div>
  );
}
