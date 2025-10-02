import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus } from "lucide-react";
import { Product } from "@/data/dummyData";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="text-center mb-3">
        <div className="text-5xl mb-2">{product.image}</div>
        <h3 className="font-semibold mb-1">{product.name}</h3>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xl font-bold text-primary">₹{product.price}</span>
          <span className="text-sm text-muted-foreground">/{product.unit}</span>
        </div>
      </div>

      {product.inStock ? (
        <div>
          {quantity === 0 ? (
            <Button 
              className="w-full" 
              onClick={() => setQuantity(1)}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex-1 text-center font-semibold">
                {quantity} {product.unit}
              </div>
              <Button 
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Badge variant="destructive" className="w-full justify-center">
          Out of Stock
        </Badge>
      )}
    </Card>
  );
};

export default ProductCard;
