# متجر الأناقة المغربي (Moroccan E-commerce Store)

A modern, responsive e-commerce web application built with React, TypeScript, and Tailwind CSS. Tailored for the Moroccan market with Cash on Delivery (COD) support and RTL layout.

## 🚀 التشغيل محلياً (How to Run Locally)

1.  **Clone the project** or download the files.
2.  **Install dependencies**:
    ```bash
    npm install
    # OR
    yarn
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    # OR
    yarn dev
    ```
4.  Open your browser at `http://localhost:5173` (or the port shown in terminal).

## 🌐 النشر على Vercel (Deploy to Vercel)

This project is optimized for Vercel deployment (Vite/React).

1.  **Create a GitHub Repository**:
    *   Initialize a git repo in your project folder:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        ```
    *   Push your code to a new repository on GitHub.

2.  **Deploy via Vercel Dashboard**:
    *   Go to [Vercel](https://vercel.com) and sign in.
    *   Click "Add New..." -> "Project".
    *   Import your GitHub repository.
    *   Vercel will automatically detect `Vite` as the framework.
    *   Click **Deploy**.

## 🛠 Tech Stack

*   **React 18**: UI Library.
*   **TypeScript**: Type safety.
*   **Tailwind CSS**: Styling (via CDN for simplicity in this demo, standard config in production).
*   **React Router (HashRouter)**: Navigation.
*   **Lucide React**: Icons.

## 📁 Project Structure

*   `src/components`: Reusable UI components (ProductCard, CheckoutModal, Layout).
*   `src/pages`: Main page views (Home, Category, Product Details).
*   `src/types.ts`: TypeScript interfaces.
*   `src/constants.ts`: Mock data (Products, Categories).
