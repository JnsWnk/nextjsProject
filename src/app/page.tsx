import PageShell from "@/components/PageShell";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 gap-6">
      <PageShell title="Home" description="Welcome" items="center">
        <p className="text-center" style={{ maxWidth: "50%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </PageShell>
    </div>
  );
}
