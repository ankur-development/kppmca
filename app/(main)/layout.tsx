import Navbar from "@/sections/navbar";
import Footer from "@/sections/footer";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
