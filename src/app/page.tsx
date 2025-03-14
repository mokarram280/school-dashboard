import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import AdminPage from "./(dashboards)/admin/page";

export default function Home() {
  return (
    <main>
      <div className="flex h-full">
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
          <Link href='/' className="flex items-center justify-center lg:justify-start gap-2">
          <Image src='/logo.png' alt="Logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">SchoolLama</span>
          </Link>
          <Menu />
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]">
          <Navbar />
          <AdminPage />
        </div>
      </div>
    </main>
  );
};
