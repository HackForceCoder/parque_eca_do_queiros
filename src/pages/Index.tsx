import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import LoginDialog from "@/components/LoginDialog";
import AddProductDialog from "@/components/AddProductDialog";
import ProductCard from "@/components/ProductCard";
import { initialProducts, type Product } from "@/data/products";

const Index = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Vivero Parque Eca do Queiros
          </h1>
          <LoginDialog
            isAdmin={isAdmin}
            onLogin={() => setIsAdmin(true)}
            onLogout={() => setIsAdmin(false)}
          />
        </div>
      </header>

      {/* Location + Search */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <a
            href="https://maps.app.goo.gl/NARCKtqfFrqeKoc37"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm">Ver ubicación en Google Maps</span>
          </a>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar planta..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      {/* Admin toolbar */}
      {isAdmin && (
        <div className="container mx-auto px-4 pb-2">
          <AddProductDialog onAdd={handleAdd} />
        </div>
      )}

      {/* Catalog */}
      <main className="container mx-auto px-4 py-6">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No se encontraron plantas.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isAdmin={isAdmin}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
