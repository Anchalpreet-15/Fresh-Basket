import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import VendorCard from "@/components/VendorCard";
import { categories, vendors } from "@/data/dummyData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
              <Button className="absolute right-2 top-1/2 -translate-y-1/2">
                Search
              </Button>
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
              <h2 className="text-3xl font-bold text-white mb-3">
                Save ₹50 Every Week!
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Support your local vendors and save money on fresh produce. Join thousands of happy customers.
              </p>
              <Button size="lg" variant="secondary">
                Start Saving Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-muted-foreground">Simple steps to fresh vegetables</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🔍
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Find Vendors</h3>
              <p className="text-muted-foreground">Search for vendors near your location</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🛒
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Order Fresh</h3>
              <p className="text-muted-foreground">Choose your vegetables and place order</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🚚
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Get Delivered</h3>
              <p className="text-muted-foreground">Fresh produce delivered to your door</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
