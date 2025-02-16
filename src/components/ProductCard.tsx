import { Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import type { Product } from "../types/types";
import { IoCartOutline } from "react-icons/io5";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="relative overflow-hidden transition-shadow hover:shadow-lg">
      <button className="absolute right-2 top-2 z-10 rounded-lg bg-black/20 p-1.5 backdrop-blur-sm transition-colors hover:bg-white ">
        <Heart className="h-5 w-5 text-white" />
      </button>
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          width={200}
          height={200}
        />
        {product.isFresh && (
            <span className="absolute right-2 bottom-2 rounded bg-sky-500 px-2 py-0.5 text-xs font-medium text-white">
            FRESCO
            </span>
        )}
        {product.isBest && (
          <span className="absolute right-2 bottom-2  rounded bg-orange-500 px-2 py-0.5 text-xs font-medium text-white">
            TOP
          </span>
        )}
      </div>
      <CardContent className="p-3">
        <div className="space-y-1">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          <p className="text-xs text-gray-500">Precio por {product.priceUnit}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-green-500">
                ${product.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            </div>
            <Button
              size="icon"
              className="h-8 w-8 rounded-lg bg-green-500 p-0 hover:bg-green-600 transition-colors"
            >
              <IoCartOutline className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
