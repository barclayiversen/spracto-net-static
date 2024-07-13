import "./globals.css";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-black">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
