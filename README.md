# 📋 MERN Task Manager


A full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js). Manage your daily tasks efficiently with user authentication, CRUD operations, and a responsive design.



## ✨ Features

### 👤 User Features
- 🔐 **Secure Authentication**: User registration and login with JWT tokens
- 📝 **Task Management**: Create, read, update, and delete tasks
- 🎯 **Task Status**: Mark tasks as completed or pending
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🚪 **Auto Logout**: Secure session management

### 🛠 Developer Features
- 🎨 **Modern UI**: Built with Tailwind CSS for beautiful, responsive design
- 🔄 **State Management**: Redux for global state handling
- 📢 **User Feedback**: Toast notifications for success/error messages
- ✅ **Form Validation**: Client and server-side validation
- 🛡️ **Protected Routes**: Authentication-based route protection
- 🎭 **Custom Components**: Reusable UI components and custom hooks
- 📄 **Dynamic Titles**: Page-specific document titles
- 🔄 **Loading States**: Custom loaders for better UX
- 🧭 **Navigation**: Responsive navbar with active states
- 🎯 **Error Handling**: 404 page and proper error responses

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Redux & Redux Thunk** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

### Development Tools
- **Nodemon** - Auto-restart for development
- **Concurrently** - Run multiple commands simultaneously

## 📦 Dependencies

### Production Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| `axios` | ^0.27.2 | HTTP client |
| `bcrypt` | ^5.0.1 | Password hashing |
| `cors` | ^2.8.5 | Cross-origin resource sharing |
| `dotenv` | ^16.0.0 | Environment variables |
| `express` | ^4.17.3 | Web framework |
| `jsonwebtoken` | ^8.5.1 | JWT authentication |
| `mongoose` | ^6.2.3 | MongoDB ODM |
| `react` | ^18.1.0 | UI library |
| `react-dom` | ^18.1.0 | React DOM rendering |
| `react-redux` | ^8.0.1 | React bindings for Redux |
| `react-router-dom` | ^6.3.0 | Routing |
| `react-scripts` | 5.0.1 | Create React App scripts |
| `react-toastify` | ^9.0.1 | Toast notifications |
| `redux` | ^4.2.0 | State management |
| `redux-thunk` | ^2.4.1 | Redux middleware |

### Development Dependencies
- `nodemon` ^2.0.15 - Development auto-restart
- `concurrently` ^7.1.0 - Run multiple commands
- `autoprefixer` ^10.4.7 - CSS post-processing
- `postcss` ^8.4.13 - CSS processing
- `tailwindcss` ^3.0.24 - CSS framework

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - Local installation or cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas)
- **Git** - Version control system

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vetchayateesh/Task_Manager
   cd mern-task-manager
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env` in the backend folder
   - Update the following variables:
     ```env
     MONGODB_URL=your_mongodb_connection_string
     ACCESS_TOKEN_SECRET=your_jwt_secret_key
     PORT=5000
     ```

4. **Start the application**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

## 📡 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/signup` | User registration | ❌ |
| `POST` | `/api/auth/login` | User login | ❌ |
| `GET` | `/api/profile` | Get user profile | ✅ |
| `GET` | `/api/tasks` | Get all user tasks | ✅ |
| `GET` | `/api/tasks/:id` | Get specific task | ✅ |
| `POST` | `/api/tasks` | Create new task | ✅ |
| `PUT` | `/api/tasks/:id` | Update task | ✅ |
| `DELETE` | `/api/tasks/:id` | Delete task | ✅ |

## 🗂 Project Structure

```
mern-task-manager/
├── backend/
│   ├── controllers/     # Route controllers
│   ├── middlewares/     # Custom middleware
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   ├── app.js          # Express app setup
│   └── package.json
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── api/        # API configuration
│   │   ├── components/ # Reusable components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── layouts/    # Layout components
│   │   ├── pages/      # Page components
│   │   ├── redux/      # State management
│   │   ├── utils/      # Utility components
│   │   └── validations/# Form validations
│   └── package.json
├── README.md
└── package.json
```

## 📱 Pages & Routes

| Route | Component | Description | Access |
|-------|-----------|-------------|---------|
| `/` | Home | Dashboard/Tasks list | Public/Private |
| `/login` | Login | User authentication | Public |
| `/signup` | Signup | User registration | Public |
| `/tasks/add` | Task Form | Create new task | Private |
| `/tasks/:id` | Task Form | Edit existing task | Private |
| `*` | NotFound | 404 page | Public |

## 📜 Available Scripts

### Root Directory
```bash
npm run dev          # Start both frontend and backend
npm run dev-server   # Start only backend
npm run dev-client   # Start only frontend
npm run install-all  # Install all dependencies
npm run build        # Build for production
npm start            # Start production server
```

### Frontend Directory (`cd frontend`)
```bash
npm start   # Start development server
npm run build  # Build for production
npm test    # Run tests
```

### Backend Directory (`cd backend`)
```bash
npm run dev  # Start with nodemon
npm start    # Start production server
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Built with ❤️ by [Yateesh](https://github.com/vetchayateesh)
- Inspired by modern task management applications
- Thanks to the open-source community

## 📞 Contact

**Yateesh**
- GitHub: [@your-username](https://github.com/vetchayateesh)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/yateesh-vetcha-536a97281/)

---

⭐ **Star this repo** if you found it helpful!


