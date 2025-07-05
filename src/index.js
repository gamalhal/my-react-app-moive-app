/**
 * نقطة الدخول الرئيسية للتطبيق
 * Main application entry point
 *
 * هذا الملف هو نقطة البداية لتطبيق React
 * يقوم بتحميل المكون الرئيسي App وتوصيله بعنصر DOM
 *
 * This file is the starting point for the React application
 * It loads the main App component and connects it to a DOM element
 */

// استيراد مكتبات React الأساسية
// Import core React libraries
import React from "react";
import ReactDOM from "react-dom/client";

// استيراد المكون الرئيسي للتطبيق
// Import the main App component
import App from "./App";

/**
 * إنشاء جذر React DOM
 * Create React DOM root
 *
 * ReactDOM.createRoot() هو الطريقة الحديثة لتحميل تطبيق React
 * بدلاً من ReactDOM.render() القديمة
 *
 * ReactDOM.createRoot() is the modern way to render a React app
 * Instead of the old ReactDOM.render() method
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * تحميل المكون الرئيسي في DOM
 * Render the main component to DOM
 *
 * يتم تحميل مكون App في عنصر DOM بمعرف 'root'
 * هذا العنصر موجود في ملف public/index.html
 *
 * The App component is rendered to a DOM element with id 'root'
 * This element exists in the public/index.html file
 */
root.render(
  // وضع StrictMode لتفعيل التحقق من الأخطاء في التطوير
  // StrictMode enables additional checks and warnings in development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
