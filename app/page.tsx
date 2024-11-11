import Hero from "@/components/Hero";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h1 className="font-medium text-xl mb-4">Home</h1>
      </main>
    </>
  );
}
