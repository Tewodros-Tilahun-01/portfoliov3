import ProfileCard from "@/components/ProfileCard";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MainSection from "./(sections)/MainSection";

export default function Home() {
  return (
    <div className="relative z-10 mx-auto sm:px-12 md:px-2 lg:px-2 py-12 md:pb-8 pb-0 sm:container md:container container lg:max-w-full ">
      <div className=" relative grid gap-4 grid-cols-1 md:grid-cols-[88px_1fr] lg:grid-cols-[auto_2fr_5fr] md:px-4">
        <Sidebar />
        <ProfileCard
          name="Tewodros Tilahun"
          title="software developer"
          avatarUrl="./assets/avater.jpg"
        />
        <MainSection />
      </div>
    </div>
  );
}
