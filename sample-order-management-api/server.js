import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

const orders = [
    {
    id: 1001,
    customerId: "CUST-001",
    product: "Laptop",
    quantity: 1,
    status: "PENDING"
    },
  {
    id: 1002,
    customerId: "CUST-002",
    product: "Monitor",
    quantity: 2,
    status: "SHIPPED"
  }
];

app.get("/health", (req, res) => {
  res.status(200).json({
        status: "UP",
        service: "Order Management API"
  });
});

//retrieve all orders
app.get("/orders", (req, res) => {
  res.status(200).json(orders);
});

//retrieve a specific order by its ID
app.get("/orders/:id", (req, res) => {
    const orderId = Number(req.params.id);

    const order = orders.find((item) => item.id === orderId);

    if(!order) {
        return res.status(404).json({
            error: "Order not found"
        });
    }
    res.status(200).json(order);
});

//create new order
app.post("/orders", (req, res) => {
    const { customerId, product, quantity } = req.body;

    
if (
  typeof customerId !== "string" ||
  customerId.trim() === "" ||
  typeof product !== "string" ||
  product.trim() === "" ||
  !Number.isInteger(quantity) ||
  quantity <= 0
) {
  return res.status(400).json({
    error: "Invalid order data"
  });
}

    const newOrder = {
        id: Date.now(),
        customerId,
        product,
        quantity,
        status: "PENDING"
    };

    orders.push(newOrder);

    res.status(201).json(newOrder);
});

//update existing order status
app.patch("/orders/:id/status", (req, res) => {
    const orderId = Number(req.params.id);
    const { status } = req.body;
    
const order = orders.find((item) => item.id === orderId);

    if(!order) {
        return res.status(404).json({
        error: "Order not found"
    });
}

const allowedStatuses = ["PENDING", "SHIPPED", "DELIVERED", "CANCELLED"];

if(!allowedStatuses.includes(status)) {
    return res.status(400).json({
        error: "Invalid order status"
    });
}

order.status = status;

res.status(200).json(order);

});

//delete existing order
app.delete("/orders/:id", (req, res) => {
    const orderId = Number(req.params.id);

    const orderIndex = orders.findIndex(
        (item) => item.id === orderId
    );
    
    if(orderIndex === -1){
        return res.status(404).json({
            error: "Order not found"
        });
    }

    orders.splice(orderIndex, 1);

    res.status(204).send();

});

app.listen(PORT, () => {
    console.log(`Order Management API is running on port ${PORT}`);
});