import Link from "next/link";

export default function Home() {
  return (
      <div className="container-buttons">
        <h1>Bienvenido</h1>
          <Link href="/link1">Página 1</Link>
          <Link href="/link2">Página 2</Link>
      </div>
  );
}
