import MainSection from "./(sections)/MainSection";

export default function Home() {
  return (
    <>
      <MainSection />

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
    </>
  );
}
