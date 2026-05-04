# 🍕 Technological Meals - Pizza Order SPA

A professional, high-fidelity Single Page Application (SPA) developed as a Sprint Challenge for the **Workintech** Full-Stack Development program. This project simulates a real-world pizza ordering experience with a focus on dynamic form handling, state management, and comprehensive testing.

## 🚀 Live Demo
Check out the live application here: [**https://order-pizza-dun.vercel.app/**](https://order-pizza-dun.vercel.app/)

## ✨ Key Features

### 📱 Responsive & Mobile-First Design
*   **Fully Responsive:** Developed with a mobile-first approach using **Tailwind CSS**, ensuring perfect layout transitions from mobile to desktop.
*   **Figma Fidelity:** Strictly adhered to the provided [Figma Design](https://www.figma.com/design/q0xPW5uCel3rdzFgpjR9lt/S8-Pizza-React-Challange-v2.1) for colors (#FDC913, #CE2829), typography, and spatial arrangements.

### 🛠 Dynamic Form Management
*   **Real-time Validation:** Order button is disabled until all criteria are met (Min 3 characters for name, 4-10 toppings selected).
*   **Controlled Components:** All form fields (Radio, Checkbox, Textarea, Dropdown) are managed via React state.
*   **Data Flow:** Implemented **Prop-Lifting** to transfer complex order data from the form to the Success Page.

### 🧪 Automated Testing (QA)
Comprehensive End-to-End (E2E) testing suite implemented with **Cypress**:
*   [x] **Input Validation:** Verification of user name character length.
*   [x] **Interactive Elements:** Testing multiple topping selections and their constraints.
*   [x] **Full Flow:** Simulating a complete order process from the Home page to the Success page.

## ⚙️ Tech Stack
*   **Frontend:** React.js (Vite)
*   **Routing:** React Router DOM (v6)
*   **HTTP Client:** Axios (POST to [reqres.in](https://reqres.in/))
*   **Styling:** Tailwind CSS & Reactstrap
*   **Testing:** Cypress E2E

## 🔧 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/order-pizza.git](https://github.com/your-username/order-pizza.git)
