import ProfileCard from "@/components/ProfileCard";
import Sidebar from "@/components/Sidebar";
import MainSection from "./(sections)/MainSection";

export default function Home() {
  return (
    <div className="relative z-10 mx-auto sm:px-12 md:px-2 lg:px-0 py-8 md:pb-8 pb-0 lg:max-w-[1400px]">
      <div className=" relative grid gap-y-4 gap-x-3 grid-cols-1 md:grid-cols-[88px_1fr] lg:grid-cols-[auto_2fr_5fr] md:px-4">
        <Sidebar />
        <ProfileCard
          name="Tewodros Tilahun"
          title="software developer"
          avatarUrl="/assets/avater.png"
        />
        <MainSection />
      </div>
    </div>
  );
}
