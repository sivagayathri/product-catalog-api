Product Catalog API
-----------------------
A simple backend service built with Node.js, Express, and MongoDB to serve a product catalog with category metadata.
This API is designed to support product listing pages with filtering on the frontend.


Features
-------------------------
Fetch all products along with their category names
Clean data separation (products + categories collections)
MongoDB & Mongoose-based models
Global error-handling middleware
Simple and extensible folder structure


Project Structure
---------------------
root
│── index.js                
│── .env                    
│── src
│   ├── config
│   │     └── db.js          // Database connection
│   ├── models
│   │     ├── Product.js     // Product schema
│   │     └── Category.js    // Category schema
│   ├── controllers
│   │     └── productController.js
│   ├── routes
│   │     └── productRoutes.js
│   └── middleware
│         └── errorHandler.js



Run the project 
-----------------------
npm start
