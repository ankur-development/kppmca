import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KPPM Admin",
  description: "Manage your blogs and contacts",
}

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
    </main>
  );
}

