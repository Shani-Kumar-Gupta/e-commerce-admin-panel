# Architecture Diagram:
host-app (Angular 16)
 ├── routes: 
 │    /login   -> loads Angular MFE (login)
 │    /dashboard -> loads Angular MFE (dashboard)
 │    /products  -> loads React MFE (list + create)
 │
 ├── Shared State -> via RxJS (Angular) + Custom Event Bus (cross-framework)
 │
 └── Loads MFEs dynamically via Module Federation

# Setup Host Application
- ng new host-app --routing --style=scss 
- ng add @angular-architects/module-federation@^16.0.0 --project host-app --type host --port 4200
- This sets up Webpack 5 + Module Federation.
- Configure webpack.config.js in host-app: