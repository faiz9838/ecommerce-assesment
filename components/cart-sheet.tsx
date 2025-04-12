'use client';

import { ShoppingCart, Minus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const GST_RATE = 0.18; // 18% GST

export function CartSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, total } = useCartStore();

  const subtotal = total;
  const gstAmount = subtotal * GST_RATE;
  const shippingCost = subtotal > 1000 ? 0 : 99;
  const finalTotal = subtotal + gstAmount + shippingCost;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Shopping Cart ({items.length} items)</SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="flex-1 px-1">
          <div className="space-y-4 py-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center space-x-4 rounded-lg border bg-card p-4 shadow-sm"
              >
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-white">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="line-clamp-1 font-medium">{item.product.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    ${item.product.price.toFixed(2)}
                  </p>
                  <div className="mt-2 flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center tabular-nums">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium tabular-nums">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-2 h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="space-y-4 border-t px-1 py-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="tabular-nums">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>GST (18%)</span>
              <span className="tabular-nums">${gstAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span className="tabular-nums">
                {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="tabular-nums">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {subtotal < 1000 && (
              <p>Add ${(1000 - subtotal).toFixed(2)} more for free shipping</p>
            )}
          </div>
          <Button className="w-full" size="lg" disabled={items.length === 0}>
            Proceed to Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}