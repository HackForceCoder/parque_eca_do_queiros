import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  isAdmin: boolean;
  onDelete?: (id: string) => void;
}

const ProductCard = ({ product, isAdmin, onDelete }: ProductCardProps) => {
  return (
    <div className="group rounded-lg overflow-hidden bg-card border border-border transition-all hover:border-primary/40">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-display text-lg text-foreground">{product.name}</h3>
        <p className="text-primary font-semibold text-xl">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-muted-foreground text-sm">
          Stock: {product.stock} unidades
        </p>
        {isAdmin && onDelete && (
          <button
            onClick={() => onDelete(product.id)}
            className="mt-2 text-sm text-destructive hover:underline"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
