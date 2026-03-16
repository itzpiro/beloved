import "./globals.css";

export const metadata = {
  title: "A Special Gift",
  description: "A special gift for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
