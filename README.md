# Wavey - React Authentication App

A modern React application with sign-in and sign-up functionality built with Vite and TypeScript.

## Features

- 🔐 User authentication (Sign In & Sign Up)
- 🎨 Modern, responsive UI with gradient design
- ⚡ Built with Vite for fast development
- 📱 Fully responsive design
- 🔄 React Router for navigation
- 🎯 Context API for state management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable components
├── context/          # React Context (Authentication)
├── pages/            # Page components
│   ├── Home.tsx      # Home/Dashboard page
│   ├── SignIn.tsx    # Sign in page
│   └── SignUp.tsx    # Sign up page
├── styles/           # CSS files
├── App.tsx           # Main App component
└── main.tsx          # Entry point
```

## Usage

### Sign Up
1. Click "Sign Up" on the home page
2. Fill in your name, email, and password
3. Confirm your password
4. Click "Sign Up"

### Sign In
1. Click "Sign In" on the home page
2. Enter your email and password
3. Click "Sign In"

### Dashboard
Once logged in, you'll see your profile information and a personalized welcome message.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **CSS3** - Styling

## Features

- Form validation
- Error handling
- Responsive design
- Context-based state management
- Clean and modern UI

## Note

This is a demo application with mock authentication. For production use, integrate with a real backend API.

## License

MIT
