import "./globals.css";
import ThemeRegistry from "components/ThemeRegistry";

export const metadata = {
  title: "Move Safe",
  description: "Move Safe Map",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
