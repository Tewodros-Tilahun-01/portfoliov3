import ProfileCard from "@/components/ProfileCard";
import Sidebar from "@/components/Sidebar";
import MainSection from "./(sections)/MainSection";
import CustomCursor from "@/components/animations/CustomCursor";

export default function Home() {
  return (
    <main className="relative z-10 mx-auto sm:px-12 md:px-2 lg:px-0 py-8 md:pb-8 pb-0 lg:max-w-[1400px]">
      <CustomCursor />
      <div className=" relative grid gap-y-4 gap-x-3 grid-cols-1 md:grid-cols-[88px_1fr] lg:grid-cols-[auto_2fr_5fr] md:px-4">
        <Sidebar />
        <ProfileCard
          name="Tewodros Tilahun"
          title="Full Stack Developer"
          avatarUrl="/assets/avater.png"
        />
        <MainSection />
      </div>

      {/* Hidden content for SEO */}
      <div className="sr-only">
        <h1>tewodros Tilahun - Full Stack Developer in Ethiopia</h1>
        <p>
          Professional software developer specializing in Frontend, Next.js,
          Node.js, JavaScript, TypeScript, MongoDB, and mobile app development.
          Based in Addis Ababa, Ethiopia. Available for freelance projects,
          consulting, and full-time opportunities.
        </p>
        <address>
          Addis Ababa, Ethiopia
          <br />
          Email: tewodrostilahun.dev@gmail.com
          <br />
          Phone: +251 987 130 441
        </address>
      </div>
    </main>
  );
}
