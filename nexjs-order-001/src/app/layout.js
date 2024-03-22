import { Inter, Noto_Sans_KR } from "next/font/google";
import "@/css/globals.css";
import Header from "@/include/Header";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_KR({ subsets: ["latin"], weight: ["100", "400", "700", "900"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// json type의 style
const footerStyle = {
  backgroundColor: "#ddd",
  color: "black",
  textAlign: "center",
  padding: "0.7rem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${inter.className}, ${noto.variable}`}>
        <Header />
        {children}
        <footer style={footerStyle}>
          <address>CopyRight &copy; n96js@naver.com</address>
        </footer>
      </body>
    </html>
  );
}
