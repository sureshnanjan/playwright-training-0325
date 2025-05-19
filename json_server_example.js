// Simple Node.js Express server that provides JSON responses
import express, { json } from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(json());

// Sample data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' }
];

const products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'electronics' },
  { id: 2, name: 'Smartphone', price: 699.99, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 149.99, category: 'accessories' }
];

// Routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const { name, email, role } = req.body;
  
  // Validate input
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  // Create new user
  const newUser = {
    id: users.length + 1,
    name,
    email,
    role: role || 'user'
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/api/products', (req, res) => {
  // Demonstrate query parameters
  const { category } = req.query;
  
  if (category) {
    const filteredProducts = products.filter(p => p.category === category);
    return res.json(filteredProducts);
  }
  
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// Search endpoint
app.get('/api/search', (req, res) => {
  const { q } = req.query;
  
  if (!q) {
    return res.status(400).json({ error: 'Search query is required' });
  }
  
  const query = q.toLowerCase();
  
  const results = {
    users: users.filter(user => 
      user.name.toLowerCase().includes(query) || 
      user.email.toLowerCase().includes(query)
    ),
    products: products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.category.toLowerCase().includes(query)
    )
  };
  
  res.json(results);
});

// Error handling
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});