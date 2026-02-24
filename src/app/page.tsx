// src/app/page.tsx
export default function Page() {
  return (
    <main style={{ height: "100vh" }}>
      <iframe
        src="/legacy/index.html"
        style={{ width: "100%", height: "100%", border: 0 }}
        title="Login"
      />
    </main>
  );
}