import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vendors, orders } from "@/data/dummyData";
import { Users, ShoppingBag, TrendingUp, IndianRupee, CheckCircle, XCircle, Star, AlertCircle } from "lucide-react";

const AdminPanel = () => {
  const totalVendors = vendors.length;
  const activeVendors = vendors.filter(v => v.isLive).length;
  const totalOrders = 15630;
  const revenue = 4568900;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* Admin Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your platform and monitor performance</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-8 w-8 text-primary" />
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">{totalVendors}</div>
              <div className="text-sm text-muted-foreground">Total Vendors</div>
              <div className="text-xs text-primary mt-1">{activeVendors} active now</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <ShoppingBag className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold mb-1">{totalOrders.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Orders</div>
              <div className="text-xs text-accent mt-1">+12% this month</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <IndianRupee className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">₹{(revenue / 100000).toFixed(1)}L</div>
              <div className="text-sm text-muted-foreground">Total Revenue</div>
              <div className="text-xs text-primary mt-1">₹45K commission</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-2xl font-bold mb-1">4.7</div>
              <div className="text-sm text-muted-foreground">Avg Platform Rating</div>
              <div className="text-xs text-muted-foreground mt-1">8,450 reviews</div>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="vendors" className="space-y-6">
            <TabsList className="grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="vendors">Manage Vendors</TabsTrigger>
              <TabsTrigger value="analytics">Order Analytics</TabsTrigger>
              <TabsTrigger value="feedback">Customer Feedback</TabsTrigger>
            </TabsList>

            {/* Vendors Management */}
            <TabsContent value="vendors" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Vendor Management</h2>
                <Button>Add New Vendor</Button>
              </div>

              {vendors.map((vendor) => (
                <Card key={vendor.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-4">
                      <div className="text-4xl">{vendor.image}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{vendor.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{vendor.location}</p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-secondary text-secondary" />
                            <span className="font-medium">{vendor.rating}</span>
                          </div>
                          <Badge variant="secondary">{vendor.speciality}</Badge>
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
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="outline" size="sm">
                        <CheckCircle className="mr-1 h-4 w-4" />
                        Verify
                      </Button>
                      <Button variant="destructive" size="sm">
                        <XCircle className="mr-1 h-4 w-4" />
                        Deactivate
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-sm text-muted-foreground">Total Orders</div>
                      <div className="text-lg font-semibold">{vendor.totalOrders}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">This Month</div>
                      <div className="text-lg font-semibold">{Math.round(vendor.totalOrders * 0.15)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Revenue</div>
                      <div className="text-lg font-semibold">₹{(vendor.totalOrders * 450).toLocaleString()}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            {/* Order Analytics */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <Badge className="bg-primary">+8%</Badge>
                  </div>
                  <div className="text-2xl font-bold mb-1">14,250</div>
                  <div className="text-sm text-muted-foreground">Completed Orders</div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <AlertCircle className="h-8 w-8 text-accent" />
                    <Badge variant="secondary">-3%</Badge>
                  </div>
                  <div className="text-2xl font-bold mb-1">980</div>
                  <div className="text-sm text-muted-foreground">Delayed Orders</div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <XCircle className="h-8 w-8 text-destructive" />
                    <Badge variant="secondary">-1%</Badge>
                  </div>
                  <div className="text-2xl font-bold mb-1">400</div>
                  <div className="text-sm text-muted-foreground">Cancelled Orders</div>
                </Card>
              </div>

              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Weekly Order Trends</h2>
                <div className="space-y-3">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => {
                    const orders = 180 + idx * 25;
                    const percentage = Math.round((orders / 300) * 100);
                    return (
                      <div key={day} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{day}</span>
                          <span className="text-muted-foreground">{orders} orders</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </TabsContent>

            {/* Customer Feedback */}
            <TabsContent value="feedback" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Customer Reviews</h2>
                <Button variant="outline">Export Feedback</Button>
              </div>

              {[
                { name: "Priya Sharma", rating: 5, comment: "Excellent service! Fresh vegetables delivered on time.", vendor: "Sharma Ji Ki Redi", date: "2 hours ago" },
                { name: "Rajesh Kumar", rating: 4, comment: "Good quality products. Vendor was very friendly.", vendor: "Kaur Fruits & Veggies", date: "5 hours ago" },
                { name: "Anita Singh", rating: 5, comment: "Best platform for buying vegetables locally. Highly recommended!", vendor: "Gupta Fresh Market", date: "1 day ago" },
                { name: "Vikram Patel", rating: 4, comment: "Great initiative. Prices are reasonable and quality is good.", vendor: "Singh Sabzi Wala", date: "1 day ago" },
              ].map((review, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">{review.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Ordered from {review.vendor}
                      </p>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-secondary text-secondary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-sm">{review.comment}</p>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Finance Overview */}
          <Card className="p-6 mt-8">
            <h2 className="text-xl font-bold mb-4">Platform Finance</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Commission Earned</div>
                <div className="text-2xl font-bold text-primary">₹45,689</div>
                <div className="text-xs text-muted-foreground mt-1">This month</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Vendor Payouts</div>
                <div className="text-2xl font-bold">₹4,10,211</div>
                <div className="text-xs text-muted-foreground mt-1">Pending: ₹25,000</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Customer Wallet</div>
                <div className="text-2xl font-bold">₹1,25,000</div>
                <div className="text-xs text-muted-foreground mt-1">Total balance</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Avg Order Value</div>
                <div className="text-2xl font-bold">₹292</div>
                <div className="text-xs text-primary mt-1">+5% from last month</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPanel;
