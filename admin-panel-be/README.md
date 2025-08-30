my-backend-app/
│── src/
│   ├── config/          # Configuration (db, env, etc.)
│   │   └── db.js
│   ├── controllers/     # Request handlers (business logic)
│   │   └── userController.js
│   ├── models/          # Mongoose schemas
│   │   └── userModel.js
│   ├── routes/          # Express route definitions
│   │   └── userRoutes.js
│   ├── middlewares/     # Custom middlewares (auth, error handling)
│   │   └── errorHandler.js
│   ├── utils/           # Helper functions
│   │   └── logger.js
│   ├── app.js           # Express app configuration
│   └── server.js        # App entry point
│
├── .env                 # Environment variables
├── .gitignore
├── package.json
└── README.md


# Auth API
 - signup -> POST
 - login -> GET

# Product API
 - product listing -> GET
 - create product -> POST
 - update product -> DELETE
 - delete product -> PUT

# Middleware
 - Auth (Authorize)
 - Error handler

# Packages Used
 - Express
 - Mongoose
 - CORS
 - Helmet
 - Morgan
 - Bcrypt
 - jsonwebtoken