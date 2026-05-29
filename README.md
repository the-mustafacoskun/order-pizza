# 🍕 Teknolojik Yemekler - Order Pizza SPA

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-purple?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Cypress](https://img.shields.io/badge/Cypress-15.13.1-green?logo=cypress)](https://cypress.io)
[![License](https://img.shields.io/badge/License-MIT-success)](LICENSE)

> **Teknolojik Yemekler** - Fast and delicious pizza ordering platform for developers! 🚀

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Testing](#-testing)
- [Design Guide](#-design-guide)
- [Version History](#-version-history)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## 🎯 Overview

**Teknolojik Yemekler** is a modern and user-friendly **Single Page Application (SPA)** designed to deliver delicious food to hungry developers at home.

This project transforms fundamental SPA concepts learned in React.js (routing, forms, data flow, testing) into a practical application.

### 🚀 Live Demo
👉 **[https://order-pizza-dun.vercel.app/](https://order-pizza-dun.vercel.app/)** ✨

### 📺 Design Reference
📐 **[Figma Design (S8 Pizza React Challenge v2.1)](https://www.figma.com/design/q0xPW5uCel3rdzFgpjR9lt/S8-Pizza-React-Challange-v2.1)**

---

## ✨ Features

### 📱 Responsive & Mobile-First Design
- ✅ **Fully Responsive:** Developed with mobile-first approach using Tailwind CSS
- ✅ **Figma Compliance:** Brand colors (#FDC913, #CE2829) and layout implementation exactly as designed
- ✅ **Mobile & Desktop Optimization:** Flawless appearance on all devices

### 🛠️ Dynamic Form Management
- ✅ **Real-time Validation:** 
  - Name minimum 3 characters
  - Topping selection 4-10 range
  - Submit button disabled until form is complete
- ✅ **Controlled Components:**
  - Radio buttons (pizza size selection)
  - Checkboxes (toppings selection)
  - Textarea (special notes)
  - Dropdown (sauce selection)
- ✅ **Prop-Lifting:** Data transfer between pages using prop lifting technique

### 🧪 E2E Testing (Cypress)
- ✅ **Input Validation:** Username character length verification
- ✅ **Interactive Elements:** Topping selection and constraint testing
- ✅ **Full Flow Testing:** Home page → Order Form → Success Page

### 🎨 UI/UX Features
- ✅ **Toast Notifications:** User notifications with react-toastify
- ✅ **Smooth Routing:** Page transitions with React Router
- ✅ **Tailwind CSS Styling:** Modern, clean, and maintainable design

---

## ⚙️ Tech Stack

### Frontend Technologies
| Technology | Version | Description |
|-----------|---------|---------|
| **React** | 18.2.0 | UI framework |
| **React DOM** | 18.2.0 | DOM rendering |
| **Vite** | 5.0.8 | Build tool & dev server |
| **React Router DOM** | 5.2.0 | Client-side routing |

### Styling
| Library | Version | Description |
|-----------|---------|---------|
| **Tailwind CSS** | 4.2.2 | Utility-first CSS framework |
| **@tailwindcss/vite** | 4.2.2 | Vite plugin for Tailwind |
| **Autoprefixer** | 10.4.27 | CSS vendor prefixes |
| **PostCSS** | 8.5.9 | CSS transformations |
| **@base-ui/react** | 1.3.0 | Unstyled, accessible components |
| **@fontsource/roboto** | 5.2.10 | Google Fonts - Roboto |

### HTTP & Utilities
| Library | Version | Description |
|-----------|---------|---------|
| **Axios** | 1.14.0 | HTTP client (API calls) |
| **react-toastify** | 11.0.5 | Toast notifications |

### Testing & Quality
| Library | Version | Description |
|-----------|---------|---------|
| **Cypress** | 15.13.1 | E2E testing framework |
| **ESLint** | 8.55.0 | Code linter |
| **@testing-library/react** | 14.1.2 | React component testing |
| **@testing-library/jest-dom** | 6.2.0 | DOM matchers |
| **@testing-library/user-event** | 14.5.2 | User event simulation |

### Dev Dependencies
| Library | Version |
|-----------|---------|
| **@vitejs/plugin-react** | 4.2.1 |
| **eslint-plugin-react** | 7.33.2 |
| **eslint-plugin-react-hooks** | 4.6.0 |
| **eslint-plugin-react-refresh** | 0.4.5 |
| **@types/react** | 18.2.43 |
| **@types/react-dom** | 18.2.17 |
| **@types/react-router-dom** | 5.3.3 |

---

## 🔧 Installation & Setup

### Requirements
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Step 1: Clone the Repository
```bash
git clone https://github.com/the-mustafacoskun/order-pizza.git
cd order-pizza
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```
Server will start and be accessible at: `http://localhost:5173`

### Step 4: Create Production Build
```bash
npm run build
```
Optimized build files are created in the `dist/` folder.

### Step 5: Preview Production Build
```bash
npm run preview
```

### Step 6: Run Linting Check
```bash
npm run lint
```
Performs code quality check using ESLint.

---

## 📁 Project Structure

```
order-pizza/
├── public/                          # Static files
│   └── ...
├── src/
│   ├── assets/                      # Images, icons
│   │   └── ...
│   ├── components/                  # Reusable React components
│   │   ├── Footer.jsx              # Footer component
│   │   ├── Header.jsx              # Header component
│   │   ├── PizzaHeader.jsx          # Pizza header component
│   │   ├── FormOptions/            # Form options
│   │   │   └── ...
│   │   ├── HomeOptions/            # Home page options
│   │   │   └── ...
│   │   ├── SuccessOptions/         # Success page options
│   │   │   └── ...
│   │   └── OrderSummary.jsx        # Order summary component
│   ├── layouts/                     # Layout components
│   │   └── ...
│   ├── pages/                       # Page components
│   │   ├── Home.jsx                 # Home page
│   │   ├── OrderForm.jsx            # Order form page
│   │   └── Success.jsx              # Success page
│   ├── styles/                      # Global style files
│   │   └── ...
│   ├── App.jsx                      # Main App component & routing
│   ├── App.css                      # App CSS
│   ├── index.css                    # Global CSS
│   └── main.jsx                     # React entry point
├── cypress/                         # E2E Tests
│   ├── e2e/                         # Test files
│   │   └── ...
│   ├── fixtures/                    # Test data
│   │   └── ...
│   └── support/                     # Cypress plugins & helpers
│       └── ...
├── index.html                       # HTML entry point
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── cypress.config.js                # Cypress configuration
├── package.json                     # Project dependencies
├── package-lock.json                # Locked dependency versions
└── README.md                        # This file 📄
```

---

## 💻 Usage

### Using the Application

#### 1️⃣ **Home Page**
- Display pizza images and "Order Now" button
- Routes user to the order form

#### 2️⃣ **Order Form Page**
- **Name Input:** Minimum 3 characters required
- **Pizza Size:** S, M, L, XL options (radio buttons)
- **Sauce Selection:** Dropdown menu
- **Toppings (Ingredients):** 4-10 topping selection required (checkboxes)
- **Special Notes:** Optional textarea

**Form Validation:**
```
- Name: 3+ characters ✓
- Size: Selected ✓
- Sauce: Selected ✓
- Toppings: Between 4-10 ✓
⟹ Submit button is enabled
```

#### 3️⃣ **Success Page**
- Displays order details
- Customer name, selected options
- New order button (returns to home page)

---

## 🔌 API Integration

### Order Submission
```javascript
// Inside OrderForm.jsx
POST https://reqres.in/api/orders
```

**Request Payload:**
```json
{
  "name": "John Doe",
  "size": "L",
  "sauce": "garlic",
  "toppings": ["onion", "mushroom", "cheese"],
  "special_request": "Extra cheese please"
}
```

**Response:**
```json
{
  "id": 123,
  "name": "John Doe",
  "size": "L",
  "sauce": "garlic",
  "toppings": ["onion", "mushroom", "cheese"],
  "special_request": "Extra cheese please",
  "createdAt": "2024-05-29T12:00:00.000Z"
}
```

### Error Handling
```javascript
try {
  const response = await axios.post(API_URL, orderData);
  // Success handling
} catch (error) {
  // Toast notification is displayed
  console.error("Order failed:", error);
}
```

---

## 🧪 Testing

### Run Test Files
```bash
npx cypress open
```
Cypress test runner will open. Select and run test files.

### Run Tests in Headless Mode
```bash
npx cypress run
```

### Test Coverage

#### ✅ Written Tests

1. **Input Validation Tests**
   - Name field minimum character check
   - Pizza size selection
   - Sauce selection

2. **Form Interaction Tests**
   - Topping selection and deselection
   - Topping minimum/maximum check (4-10)
   - Form submit button disabled/enabled states

3. **End-to-End Flow Tests**
   - Home page → "Order Now" click
   - Form completion
   - Successful submit
   - Redirect to success page
   - Verification of order details on success page

#### 📍 Test Files Location
```
cypress/e2e/
├── order-form.cy.js       # Form tests
├── order-flow.cy.js       # Complete flow tests
└── ...
```

#### 🏃 Test Command
```bash
# Run all tests
npm run test:e2e

# Run specific test file
npx cypress run --spec "cypress/e2e/order-form.cy.js"
```

---

## 🎨 Design Guide

### Brand Colors
| Color | Hex Code | Usage |
|------|---------|---------|
| **Yellow** | `#FDC913` | Primary brand color, buttons, highlights |
| **Red** | `#CE2829` | Secondary color, accents |
| **White** | `#FFFFFF` | Background, text on dark |
| **Dark Gray** | `#2F3C47` | Text, dark backgrounds |

### Typography
- **Font:** Roboto (Google Fonts via @fontsource/roboto)
- **Weights:** Regular (400), Bold (700)
- **Sizes:**
  - Headings: 24px - 32px
  - Body: 14px - 16px
  - Small: 12px

### Spacing (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Button Styles
```
Primary Button:
- Background: #FDC913 (Yellow)
- Text: Dark
- Hover: Darken + Shadow

Secondary Button:
- Background: #CE2829 (Red)
- Text: White
- Hover: Darken
```

---

## 📦 Version History

### [2.1.0] - 2024-05-29

#### ✨ New Features
- Responsive design with desktop and mobile compatibility
- Form validation with real-time error messages
- Data flow using prop-lifting technique
- Toast notifications (react-toastify)
- Cypress E2E tests

#### 🐛 Bug Fixes
- Success page redirect after form submit
- Mobile viewport optimization
- Toast notification positioning

#### 📝 Changes
- Tailwind CSS 4.2.2 upgrade
- React Router DOM 5.2.0
- Vite 5.0.8

---

### [2.0.0] - 2024-05-15

#### ✨ New Features
- Basic SPA structure
- 3 main pages: Home, OrderForm, Success
- Simple form validation
- React Router integration

#### 📝 Changes
- First release
- Basic component structure

---

### [1.0.0] - 2024-05-01

#### ✨ New Features
- Project setup
- Tailwind CSS configuration
- Initial components

---

## 🤝 Contributing

Although this project is an educational sprint challenge, improvements and enhancements are welcome!

### To Submit a PR:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Report a Bug
You can submit bug reports through the Issues tab.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Project Owner & Contact

**Mustafa Coşkun**
- GitHub: [@the-mustafacoskun](https://github.com/the-mustafacoskun)
- Email: mustafacoskun@example.com

### Credits & Resources
- **Workintech** - Sprint Challenge and educational materials
- **Figma Design:** Sprint 8 Pizza React Challenge v2.1

---

## 📚 Learned Concepts

React concepts used while developing this project:

✅ **Routing** - Page navigation with React Router  
✅ **State Management** - Form state management with useState  
✅ **Props & Prop-Lifting** - Data transfer between components  
✅ **Form Handling** - Controlled components  
✅ **Validation** - Client-side form validation  
✅ **API Integration** - POST requests with Axios  
✅ **Error Handling** - Try-catch and toast notifications  
✅ **Styling** - Responsive design with Tailwind CSS  
✅ **Testing** - E2E testing with Cypress  

---

## 🚀 Future Plans

- [ ] Backend API integration (Node.js/Express)
- [ ] Database implementation (MongoDB)
- [ ] User authentication (JWT)
- [ ] Order history page
- [ ] Admin dashboard
- [ ] Payment integration (Stripe)
- [ ] PWA (Progressive Web App) conversion

---

**Made with ❤️ by Mustafa Coşkun **
