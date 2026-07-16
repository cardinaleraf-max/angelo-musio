import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const NotFound = () => (
  <div className="overflow-x-hidden">
    <Nav />
    <main className="min-h-[70vh] flex items-center">
      <div className="container-editorial text-center">
        <p className="label text-muted-foreground">404</p>
        <h1 className="mt-4 font-display text-6xl md:text-7xl text-sea">Pagina non trovata</h1>
        <p className="mt-4 text-muted-foreground">La pagina che cercavi non esiste più.</p>
        <Link to="/" className="mt-10 inline-block label border-b border-sea pb-1 text-sea">
          Torna alla home
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;
