
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, XCircle, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const orders = [
  {
    id: 1,
    medicineName: "Paracetamol",
    status: "delivered",
    orderDate: "Jan 25, 2024",
    deliveryDate: "Jan 30, 2024",
    price: 999,
    quantity: "2 strips",
  },
  {
    id: 2,
    medicineName: "Vitamin C",
    status: "processing",
    orderDate: "Feb 1, 2024",
    deliveryDate: null,
    price: 599,
    quantity: "1 bottle",
  },
  {
    id: 3,
    medicineName: "Aspirin",
    status: "cancelled",
    orderDate: "Jan 15, 2024",
    deliveryDate: null,
    price: 299,
    quantity: "1 strip",
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const statusConfig = {
    delivered: {
      icon: Check,
      variant: "default",
      label: "Delivered",
      className: "bg-green-500",
    },
    processing: {
      icon: Clock,
      variant: "secondary",
      label: "Processing",
      className: "bg-yellow-500",
    },
    cancelled: {
      icon: XCircle,
      variant: "destructive",
      label: "Cancelled",
      className: "bg-red-500",
    },
  }[status];

  return (
    <Badge className={statusConfig.className}>
      <statusConfig.icon className="w-3 h-3 mr-1" />
      {statusConfig.label}
    </Badge>
  );
};

const CartPage = () => {
  const totalOrders = orders.length;
  const subtotal = orders.reduce((sum, order) => sum + order.price, 0);
  const hasOrders = totalOrders > 0;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="flex items-center text-jeevanti-900 hover:text-jeevanti-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-jeevanti-900">Your Cart</h1>
        </div>

        {hasOrders ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Orders List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">
                  You have ordered {totalOrders} medicines
                </p>
                {orders.map((order) => (
                  <Card key={order.id} className="mb-4">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">
                            {order.medicineName}
                          </h3>
                          <p className="text-sm text-gray-500 mb-1">
                            Ordered on {order.orderDate}
                          </p>
                          {order.deliveryDate && (
                            <p className="text-sm text-gray-500 mb-2">
                              Delivered on {order.deliveryDate}
                            </p>
                          )}
                          <div className="flex items-center gap-2 mb-2">
                            <StatusBadge status={order.status} />
                            <span className="text-sm text-gray-600">
                              {order.quantity}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-lg">₹{order.price}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 text-jeevanti-900 border-jeevanti-900 hover:bg-jeevanti-50"
                          >
                            Reorder
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Total Items</span>
                    <span className="font-semibold">{totalOrders}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <Button className="w-full bg-jeevanti-900 hover:bg-jeevanti-800 text-white">
                    Proceed to Checkout
                  </Button>
                  <Link to="/">
                    <Button
                      variant="outline"
                      className="w-full mt-2 border-jeevanti-900 text-jeevanti-900 hover:bg-jeevanti-50"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Empty Cart State
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Start ordering medicines now!
            </p>
            <Link to="/">
              <Button className="bg-jeevanti-900 hover:bg-jeevanti-800 text-white">
                Browse Medicines
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
