import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VendorCard from "@/components/VendorCard";
import ProductCard from "@/components/ProductCard";
import { vendors, products } from "@/data/dummyData";
import { Wallet, ShoppingCart, Clock, Ticket, Gift } from "lucide-react";

const CustomerDashboard = () => {
  const [walletBalance] = useState(1250);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 mb-6 text-white">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-2xl font-bold mb-1">Welcome back, Priya! 👋</h1>
                <p className="text-white/90">Ready to order fresh vegetables today?</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <Wallet className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-2xl font-bold">₹{walletBalance}</div>
                  <div className="text-xs text-white/80">Wallet Balance</div>
                </div>
                <Button variant="secondary">
                  Add Money
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold text-sm">Order Now</h3>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Clock className="h-8 w-8 mx-auto mb-2 text-accent" />
              <h3 className="font-semibold text-sm">Pre-Order</h3>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Ticket className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <h3 className="font-semibold text-sm">Get Token</h3>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Gift className="h-8 w-8 mx-auto mb-2 text-destructive" />
              <h3 className="font-semibold text-sm">Offers</h3>
            </Card>
          </div>

          {/* Offers Banner */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-secondary/20 to-accent/20 border-secondary">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🎁</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Weekly Discount Active!</h3>
                  <p className="text-muted-foreground">Save ₹50 on orders above ₹500</p>
                </div>
              </div>
              <Badge className="bg-destructive text-lg px-4 py-2">
                Get ₹50 Cashback
              </Badge>
            </div>
          </Card>

          {/* Main Content */}
          <Tabs defaultValue="vendors" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="vendors">Nearby Vendors</TabsTrigger>
              <TabsTrigger value="products">Browse Products</TabsTrigger>
            </TabsList>

            <TabsContent value="vendors" className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Live Vendors Near You</h2>
                  <Badge className="bg-primary">
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    {vendors.filter(v => v.isLive).length} Live Now
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vendors.map((vendor) => (
                    <VendorCard key={vendor.id} vendor={vendor} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Fresh Products Available</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {products.slice(0, 10).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Token Purchase Section */}
          <Card className="p-6 mt-8">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold mb-4">Purchase Token for Physical Shopping</h2>
              <p className="text-muted-foreground mb-4">
                Generate a unique token to buy vegetables directly from vendor's redi without cash. 
                Show the token and pick your items!
              </p>
              <div className="flex gap-3 flex-wrap">
                <Button>
                  <Ticket className="mr-2 h-4 w-4" />
                  Generate Token (₹500)
                </Button>
                <Button variant="outline">View Active Tokens</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerDashboard;
