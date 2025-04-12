'use client';

import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';
import { toast } from 'sonner';

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, 1);
    toast.success('Added to cart');
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h2 className="line-clamp-1 text-lg font-semibold">
          {product.title}
        </h2>
        <p className="mt-1 text-xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <Button onClick={handleAddToCart} className="w-full">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}