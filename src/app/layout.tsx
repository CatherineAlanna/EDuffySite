import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "E.Duffy Website",
  description: "A website built from a Figma MCP design."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
