import "@/styles/globals.css";

export const metadata = {
  title: "سامانه بوستان دانشگاه صنعتی شاهرود",
  description: "سامانه رسمی بوستان دانشگاه صنعتی شاهرود",
  keywords: "بوستان, دانشگاه, شاهرود , بوستان دانشگاه شاهرود,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className="" style={{ width: "100vw" }}>
        {children}
      </body>
    </html>
  );
}
