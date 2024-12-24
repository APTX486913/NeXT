import Link from "next/link";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          className={"flex justify-between container mx-auto text-white p-8"}
        >
          <Link href="/" className="text-3xl font-bold">
            Home
          </Link>
          <div className="text-xl space-x-4 text-white">
            <Link href="/page1">Page1</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/other">Other</Link>
          </div>
        </div>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
