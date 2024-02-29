const connectToMongoDB = require('./db');

async function createIndexes() {
  try {
    await connectToMongoDB();
    await mongoose.connection.collection('blogs').createIndex({ users: 1 });
    await mongoose.connection.collection('users').createIndex({ blogs: 1 });
    console.log('Indexes created successfully');
  } catch (error) {
    console.error('Error creating indexes:', error);
  } finally {
    mongoose.disconnect(); 
  }
}

createIndexes();
