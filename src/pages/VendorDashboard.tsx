import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { orders, products } from "@/data/dummyData";
import {
  MapPin,
  Star,
  TrendingUp,
  Package,
  IndianRupee,
  Clock,
  CheckCircle,
  XCircle,
  Navigation,
  Download,
} from "lucide-react";

const VendorDashboard = () => {
  const [isLive, setIsLive] = useState(true);
  const todayEarnings = 3450;
  const pendingOrders = orders.filter((o) => o.status === "pending").length;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <div className="flex-1">
        <div className="container mx-auto px-4 py-8 space-y-8">
          {/* Vendor Profile Header */}
          <Card className="p-6 shadow-lg hover:shadow-xl transition rounded-2xl">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex gap-4">
                <div className="text-6xl">🛒</div>
                <div>
                  <h1 className="text-3xl font-bold mb-1">Sharma Ji Ki Redi</h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Sector 22, Chandigarh</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">4.8</span>
                    </div>
                    <Badge variant="secondary" className="px-3">
                      Fresh Vegetables
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Status</div>
                  <Button
                    variant={isLive ? "default" : "outline"}
                    size="sm"
                    onClick={() => setIsLive(!isLive)}
                    className="rounded-full"
                  >
                    {isLive ? (
                      <>
                        <span className="relative flex h-2 w-2 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Live
                      </>
                    ) : (
                      "Offline"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Today's Earnings",
                value: `₹${todayEarnings}`,
                icon: <IndianRupee className="h-8 w-8 text-green-500" />,
                extra: <TrendingUp className="h-5 w-5 text-green-500" />,
              },
              {
                title: "Pending Orders",
                value: pendingOrders,
                icon: <Clock className="h-8 w-8 text-orange-500" />,
              },
              {
                title: "Completed Today",
                value: 45,
                icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
              },
              {
                title: "Items in Stock",
                value: 12,
                icon: <Package className="h-8 w-8 text-purple-500" />,
              },
            ].map((stat, idx) => (
              <Card
                key={idx}
                className="p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center justify-between mb-3">
                  {stat.icon}
                  {stat.extra && stat.extra}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
              </Card>
            ))}
          </div>

          {/* Main Tabs */}
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full max-w-2xl grid-cols-3 mx-auto">
              <TabsTrigger value="orders">Incoming Orders</TabsTrigger>
              <TabsTrigger value="stock">Manage Stock</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Incoming Orders</h2>
                <Button variant="outline">
                  <Navigation className="mr-2 h-4 w-4" />
                  Share Location
                </Button>
              </div>

              {orders.map((order) => (
                <Card
                  key={order.id}
                  className="p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {order.customerName}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {order.deliveryAddress}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{order.time}</span>
                      </div>
                    </div>
                    <Badge
                      variant={order.status === "pending" ? "secondary" : "default"}
                    >
                      {order.status}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between text-sm border-b pb-1"
                      >
                        <span>{item.productName}</span>
                        <span className="font-medium">{item.quantity} kg</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-lg font-bold">Total: ₹{order.total}</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <XCircle className="mr-1 h-4 w-4" />
                        Reject
                      </Button>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">
                        <CheckCircle className="mr-1 h-4 w-4" />
                        Accept
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            {/* Stock Tab */}
            <TabsContent value="stock" className="space-y-6">
              <Card className="p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Add New Product</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="product">Product Name</Label>
                    <Input id="product" placeholder="e.g., Tomato" />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity (kg)</Label>
                    <Input id="quantity" type="number" placeholder="50" />
                  </div>
                  <div>
                    <Label htmlFor="price">Price per kg (₹)</Label>
                    <Input id="price" type="number" placeholder="40" />
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Add Stock</Button>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="text-2xl font-bold mb-4">Current Stock</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.slice(0, 6).map((product) => (
                    <Card
                      key={product.id}
                      className="p-4 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{product.image}</div>
                          <div>
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              ₹{product.price}/{product.unit}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={product.inStock ? "default" : "destructive"}
                        >
                          {product.inStock ? "In Stock" : "Out"}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="flex-1"
                        >
                          Mark Out
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Earnings Tab */}
            <TabsContent value="earnings" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-sm text-muted-foreground mb-2">
                    Today's Revenue
                  </h3>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    ₹{todayEarnings}
                  </div>
                  <p className="text-xs text-muted-foreground">45 orders completed</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-sm text-muted-foreground mb-2">
                    Platform Commission
                  </h3>
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    ₹{Math.round(todayEarnings * 0.1)}
                  </div>
                  <p className="text-xs text-muted-foreground">10% of revenue</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-sm text-muted-foreground mb-2">
                    Net Earnings
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    ₹{Math.round(todayEarnings * 0.9)}
                  </div>
                  <p className="text-xs text-muted-foreground">After commission</p>
                </Card>
              </div>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Weekly Performance</h2>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </div>
                <div className="space-y-3">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day, idx) => (
                    <div
                      key={day}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition"
                    >
                      <span className="font-medium">{day}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {30 + idx * 5} orders
                        </span>
                        <span className="font-semibold">
                          ₹{2500 + idx * 300}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VendorDashboard;
