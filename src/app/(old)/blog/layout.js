"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "antd";
export default function TextLayout({ children }) {
  const [num, setNum] = useState(0);
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div style={{ backgroundColor: "purple", padding: "10px" }}>
      <h1>BLOGlayout</h1>
      <Link
        href="/blog/blog1"
        className={`link ${pathName === "/blog/blog1" ? "avtive" : ""}`}
      >
        blog1
      </Link>
      <Link
        href="/blog/blog2"
        className={`link ${pathName === "/blog/blog2" ? "avtive" : ""}`}
      >
        blog2
      </Link>
      <Button onClick={() => setNum((v) => v + 1)}>add</Button>
      {num}
      {children}
    </div>
  );
}
