import { Topbar } from "@/sections/admin/topbar";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Topbar/>
      <div className="p-4 container mx-auto">
      {children}
      </div>
    </main>
  );
}
