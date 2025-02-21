import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";

export const metadata = {
  title: "Publishing Library",
  description: "X-plat Publishing Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
