require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB (Replace with your URI)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/machine_test')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// 1. Register API
app.post('/api/register', async (req, res) => {
  const { name, dob, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, dob, email, password: hashedPassword });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1h' });
    // Return JWT and user info
    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(400).json({ error: 'Email already exists or invalid data' });
  }
});

// 2. Login API
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body; // Using email as username
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1h' });
    // Return JWT and user info
    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 3. Get all users API
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 4. Delete user API
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 5. Update user API
app.put('/api/users/:id', async (req, res) => {
  try {
    const { name, dob, email } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, dob, email }, { new: true });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));