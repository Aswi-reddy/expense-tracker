const mongoose = require('mongoose');

// Load MongoDB URI from environment variable
const mongo_url = process.env.MONGO_CONN;

// TEMP: Debug log to check if URI is being loaded (remove in production)
console.log("Mongo URL:", mongo_url);

// Connect to MongoDB
mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ MongoDB Connected');
})
.catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
});
