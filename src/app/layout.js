// app/layout.js

export const metadata ={
    title: "Facility Booking",
    description: "Facility booking application",
  };

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }