import { card } from "@/components/ui/card";
import { Bell, ShoppingBag, Leaf, TrendingDown, MapPin, Clock } from "lucide-react";

const Features = () => {
  const customerFeatures = [
    {
      icon: Bell,
      title: "Live Notifications",
      description: "Get instant alerts when a Rediwala is within 5km of your location",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Pre-Order Vegetables",
      description: "Reserve your fresh produce ahead of time at set prices",
      color: "text-secondary"
    },
    {
      icon: ShoppingBag,
      title: "Token System",
      description: "Get a token ID to buy directly from vendor stall and save ₹1-1.5 per kg",
      color: "text-accent"
    }
  ];

  const vendorFeatures = [
    {
      icon: TrendingDown,
      title: "Reduce Wastage",
      description: "Sell your stock to the platform at fair prices before it spoils",
      color: "text-primary"
    },
    {
      icon: Leaf,
      title: "Stable Income",
      description: "Get guaranteed earnings with ₹2.5 premium on platform sales",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Wider Reach",
      description: "Connect with customers in 5km radius and grow your business",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 bg-background" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A hyperlocal marketplace that digitizes street vendors, reduces wastage, and delivers freshness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20" id="for-customers">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">For Customers</h3>
              <p className="text-muted-foreground">
                Discover fresh produce from local vendors, save money, and never miss out on the best deals
              </p>
            </div>
            
            <div className="space-y-4">
              {customerFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] border-2 hover:border-primary/50">
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-lg bg-muted ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8" id="for-vendors">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-secondary">For Vendors</h3>
              <p className="text-muted-foreground">
                Increase your earnings, reduce losses from spoilage, and reach more customers digitally
              </p>
            </div>
            
            <div className="space-y-4">
              {vendorFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] border-2 hover:border-secondary/50">
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-lg bg-muted ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-muted to-secondary/10 border-2 border-primary/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">Example: How Everyone Wins</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-2xl font-bold text-primary">Vendor</div>
                <p className="text-sm text-muted-foreground">
                  Has 50kg ladyfinger. Sells 40kg through platform at ₹27.5/kg (vs ₹25 market rate).
                </p>
                <p className="text-lg font-semibold text-accent">+₹100 extra earnings</p>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-secondary">Platform</div>
                <p className="text-sm text-muted-foreground">
                  Buys at ₹27.5, sells at ₹28.5-29/kg. Earns small commission per kg.
                </p>
                <p className="text-lg font-semibold text-accent">₹1-1.5/kg profit</p>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-primary">Customer</div>
                <p className="text-sm text-muted-foreground">
                  Buys fresh vegetables at ₹28.5 (vs ₹30 market rate) or saves more with token.
                </p>
                <p className="text-lg font-semibold text-accent">Saves ₹1.5/kg</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Features;
