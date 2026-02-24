export default function Page() {
  return (
    <main style={{ height: "100vh" }}>
      <iframe
        src="/legacy/dashboard.html"
        style={{ width: "100%", height: "100%", border: 0 }}
        title="Dashboard"
      />
    </main>
  );
}