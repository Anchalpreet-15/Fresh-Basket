import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Bell, ShoppingBag, Leaf, TrendingDown, MapPin, Clock } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import VendorCard from "@/components/VendorCard";
import { categories, vendors } from "@/data/dummyData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Features = () => {
  const customerFeatures = [
    {
      icon: Bell,
      title: "Live Notifications",
      description: "Get instant alerts when a Rediwala is within 5km of your location",
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Pre-Order Vegetables",
      description: "Reserve your fresh produce ahead of time at set prices",
      color: "text-secondary",
    },
    {
      icon: ShoppingBag,
      title: "Token System",
      description: "Get a token ID to buy directly from vendor stall and save ₹1-1.5 per kg",
      color: "text-accent",
    },
  ];

  const vendorFeatures = [
    {
      icon: TrendingDown,
      title: "Reduce Wastage",
      description: "Sell your stock to the platform at fair prices before it spoils",
      color: "text-primary",
    },
    {
      icon: Leaf,
      title: "Stable Income",
      description: "Get guaranteed earnings with ₹2.5 premium on platform sales",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      title: "Wider Reach",
      description: "Connect with customers in 5km radius and grow your business",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-24 bg-background" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A hyperlocal marketplace that digitizes street vendors, reduces wastage, and delivers
            freshness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20" id="for-customers">
          {/* Customers */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">For Customers</h3>
              <p className="text-muted-foreground">
                Discover fresh produce from local vendors, save money, and never miss out on the best
                deals
              </p>
            </div>

            <div className="space-y-4">
              {customerFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] border-2 hover:border-primary/50"
                >
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

          {/* Vendors */}
          <div className="space-y-8" id="for-vendors">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-secondary">For Vendors</h3>
              <p className="text-muted-foreground">
                Increase your earnings, reduce losses from spoilage, and reach more customers
                digitally
              </p>
            </div>

            <div className="space-y-4">
              {vendorFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] border-2 hover:border-secondary/50"
                >
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

        {/* Example Section */}
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fresh Vegetables from Your
              <span className="text-primary"> Local Sabzi Mandi</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Support your neighborhood vendors. Get fresh produce delivered to your doorstep.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for vegetables, fruits, or vendors near you..."
                className="pl-12 h-14 text-lg"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2">Search</Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1L+</div>
                <div className="text-sm text-muted-foreground">Orders Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
            <p className="text-muted-foreground">Find what you need from your local vendors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                icon={category.icon}
                name={category.name}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Live Vendors Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Live Vendors Nearby</h2>
              <p className="text-muted-foreground">Fresh produce available right now</p>
            </div>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {vendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </div>
      </section>

      {/* Offers Banner */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-accent to-secondary rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="text-5xl mb-4">💰</div>
              <h2 className="text-3xl font-bold text-white mb-3">Save ₹50 Every Week!</h2>
              <p className="text-white/90 text-lg mb-6">
                Support your local vendors and save money on fresh produce. Join thousands of happy
                customers.
              </p>
              <Button size="lg" variant="secondary">
                Start Saving Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <Features />

      <Footer />
    </div>
  );
};

export default Index;
