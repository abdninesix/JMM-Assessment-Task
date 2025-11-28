# Login Component README

This repository contains a **Login** component built using **React** and **Zod** for form validation. The component is designed to handle user authentication with basic validation on the username and password fields.

---

## Features

* **Form Validation:** Uses **Zod** for schema-based validation.
* **Responsive Layout:** The layout adjusts based on screen size, with a full-width layout for small screens and a split layout for larger screens.
* **Error Handling:** Displays real-time error messages for invalid inputs (e.g., if the username is too short or password is too weak).
* **Responsive UI Elements:** Utilizes **Tailwind CSS** for styling, ensuring a modern, responsive, and visually appealing UI.
* **Icons:** Uses **React Icons** (`HiOutlineLockClosed`, `HiOutlineUser`, `HiOutlineMail`) for clean and intuitive input field icons.
* **Footer Section:** Provides contact info with a clickable mail link.

---

## Dependencies

* **React** – The core library for building the component.
* **Zod** – A TypeScript-first schema validation library used for validating form input.
* **React Icons** – Used for the icons displayed inside the input fields and the footer.
* **Tailwind CSS** – Utility-first CSS framework used for styling.

---

## Installation

### Prerequisites

* Node.js and npm installed on your machine.

### Steps to Install

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/login-component.git
   cd login-component
   ```

2. **Install dependencies:**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Start the development server:**

   After installing dependencies, you can start the React development server:

   ```bash
   npm start
   ```

   This will run the app on `http://localhost:3000`.

---

## Usage

To use the `Login` component in your React application:

1. Import the `Login` component into your file:

   ```javascript
   import Login from './components/Login';
   ```

2. Render the `Login` component:

   ```jsx
   <Login />
   ```

The component expects no props and will function out-of-the-box. It uses **Zod** for form validation and will display error messages for the `username` and `password` fields if they do not meet the validation requirements.

---

## Form Validation Rules

* **Username:**

  * Minimum length: 3 characters.
* **Password:**

  * Minimum length: 8 characters.

If the form does not pass validation, error messages will be displayed under the corresponding fields.

---

## File Structure

```bash
src/
├── components/
│   ├── Login.js          # Main login component with form validation
│   └── RightSection.js   # Right section of the login page (static content)
├── App.js                # Main entry file rendering the Login component
└── index.js              # Application entry point
```

---

## Customization

### Logo

You can replace the logo displayed in the login form by changing the `src` attribute of the `img` tag inside the `Login` component:

```jsx
<img src='/logo2.svg' alt='logo' />
```

Change `/logo2.svg` to your desired logo path.

---

## Known Issues

* The current form submission is a placeholder and does not interact with an API or backend.
* Only front-end validation is implemented (no server-side validation).

---

This README provides the necessary details for installing, configuring, and using the Login component in your project. Let me know if you have any questions!
