# E-Commerce Micro Frontend Application

A modern e-commerce platform built with Next.js and Micro Frontend architecture, implementing RTK Query for state management and Ant Design for the UI components. Inspired by [micro-frontend-case-study](https://github.com/VolodymyrPodolskyi/micro-frontend-case-study).

## 🚀 Features

- Micro Frontend Architecture using Webpack 5 Module Federation
- Server-Side Rendering with Next.js
- Real-time product updates with RTK Query
- Responsive design with Ant Design
- Type-safe development with TypeScript
- Centralized state management with Redux Toolkit
- Persistent shopping cart
- Optimized performance with Next.js

## 🛠 Tech Stack

- **Frontend Framework:** Next.js
- **UI Library:** Ant Design
- **State Management:** Redux Toolkit & RTK Query
- **API Integration:** Fake Store API
- **Module Federation:** Webpack 5
- **Type System:** TypeScript
- **Styling:** Styled Components & SCSS
- **Testing:** Jest & React Testing Library
- **Code Quality:** ESLint & Prettier

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-name]
```

2. Install dependencies for all applications:
```bash
# Install dependencies for host application
cd host-app
npm install

# Install dependencies for products remote
cd ../remote-products
npm install

# Install dependencies for basket remote
cd ../remote-basket
npm install
```

3. Create `.env.local` files in each application directory:

For host-app:
```env
NEXT_PUBLIC_PRODUCTS_REMOTE_URL=http://localhost:3001
NEXT_PUBLIC_BASKET_REMOTE_URL=http://localhost:3002
```

For remote-products:
```env
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
PORT=3001
```

For remote-basket:
```env
PORT=3002
```

## 🚀 Running the Application

### Development Mode

```bash
# Start all applications in development mode
npm run dev:all

# Or start applications individually:

# Start the host application (port 3000)
cd host-app
npm run dev

# Start the products remote (port 3001)
cd remote-products
npm run dev

# Start the basket remote (port 3002)
cd remote-basket
npm run dev
```

The applications will be available at:
- Host Application: `http://localhost:3000`
- Products Remote: `http://localhost:3001`
- Basket Remote: `http://localhost:3002`

### Production Mode

```bash
# Build all applications
npm run build:all

# Start all applications in production mode
npm run start:all
```

## 🏗 Project Structure

```
├── src/                    # Source directory
│   ├── app/               # Next.js app directory
│   │   └── layout.tsx     # Root layout component
│   ├── components/        # React components
│   │   ├── Dashboard.tsx  # Dashboard component
│   │   └── Navbar.tsx     # Navigation component
│   └── redux/            # Redux state management
│       ├── features/     # Redux slices
│       │   └── basketSlice.ts
│       └── host-app/        # Redux host-app configuration
│           └── index.tsx
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Locked dependencies
└── .gitignore           # Git ignore configuration
```

## 🔄 State Management

The application uses Redux Toolkit and RTK Query for state management:

- **Redux Toolkit:** Manages global application state
- **RTK Query:** Handles API calls and caching
- **Redux Persist:** Maintains cart state across sessions

## 🌐 API Integration

The application integrates with:
- Fake Store API for product data
- Custom basket API for cart management

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop devices
- Tablets
- Mobile devices

## 🚀 Deployment

1. Build the application:
```bash
npm run build
# or
yarn build
```

2. The application can be deployed to:
- Vercel (recommended for Next.js)
- AWS
- Google Cloud Platform
- Any other platform supporting Node.js

## 🧪 Testing

```bash
# Run tests
npm test
# or
yarn test

# Run tests with coverage
npm test:coverage
# or
yarn test:coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🔗 Links

- [GitHub Repository](https://github.com/VolodymyrPodolskyi/micro-frontend-case-study)


## 👥 Authors

- Volodymyr Podolskyi - [GitHub Profile](https://github.com/VolodymyrPodolskyi)

## 🙏 Acknowledgments

- Ant Design team for the amazing UI components
- Next.js team for the fantastic framework
- The Redux team for Redux Toolkit and RTK Query

## Version Control
```
├── main                  # Production branch
├── develop              # Development branch
├── test/v1.0.0         # Test branch
└── prod/v1.0.0         # Production release branch
```