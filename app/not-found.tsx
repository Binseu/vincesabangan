import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
        background: "var(--bg)",
        color: "var(--text)"
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "5rem",
          letterSpacing: "0.05em",
          color: "var(--accent)"
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.5rem",
          margin: "1rem 0 2rem",
          color: "var(--text-soft)"
        }}
      >
        Page Not Found
      </p>
      <Link
        href="/"
        className="btn-primary"
        style={{
          textDecoration: "none"
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
