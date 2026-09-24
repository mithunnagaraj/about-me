import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mithun Nagaraj — Software engineer",
  description:
    "Portfolio of Mithun Nagaraj, a product-minded software engineer building useful digital experiences.",
  metadataBase: new URL("https://mithunnagaraj.dev")
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const saved = window.localStorage.getItem("theme");
                document.documentElement.dataset.theme = saved === "dark" ? "dark" : "light";
              } catch {
                document.documentElement.dataset.theme = "light";
              }
            })();`
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
