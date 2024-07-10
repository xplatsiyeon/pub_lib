import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata = {
  title: "Publishing Library",
  description: "X-plat Publishing Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={noto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
