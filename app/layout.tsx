import "./globals.css";
export const metadata = {
    title: "DetailPro | Mobile Auto Detailing",
    description: "Premium mobile auto detailing delivered directly to your driveway.",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-neutral-950 text-white antialiased">
          {children}
        </body>
      </html>
    );
  }
  
