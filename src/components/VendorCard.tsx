import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Navigation } from "lucide-react";
import { Vendor } from "@/data/dummyData";

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard = ({ vendor }: VendorCardProps) => {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex gap-3">
          <div className="text-4xl">{vendor.image}</div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{vendor.name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
              <MapPin className="h-3 w-3" />
              <span>{vendor.location}</span>
            </div>
            <p className="text-xs text-muted-foreground">{vendor.distance} away</p>
          </div>
        </div>
        {vendor.isLive && (
          <Badge className="bg-primary">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Live
          </Badge>
        )}
      </div>

      <div className="flex items-center gap-4 mb-3 text-sm">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-secondary text-secondary" />
          <span className="font-medium">{vendor.rating}</span>
        </div>
        <span className="text-muted-foreground">{vendor.totalOrders}+ orders</span>
      </div>

      <div className="mb-3">
        <Badge variant="secondary" className="text-xs">
          {vendor.speciality}
        </Badge>
      </div>

      <div className="flex gap-2">
        <Button className="flex-1" size="sm">
          Shop Now
        </Button>
        <Button variant="outline" size="sm">
          <Navigation className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default VendorCard;
