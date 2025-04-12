# 💎 LuxeCart – Premium Shopping Experience

LuxeCart is a modern e-commerce application built using **Next.js (App Router)**, **Firebase**, **Tailwind CSS**, and **Zustand** for global state management.

---

## 📦 Tech Stack

- **Next.js (App Router)**
- **Firebase (Auth + Firestore)**
- **Tailwind CSS**
- **Zustand (State Management)**
- **TypeScript**

---

## 🚀 Getting Started – Full Setup Guide

---

### 1️⃣ Create Next.js App

```bash
npx create-next-app@latest luxecart --typescript --app
cd luxecart
```
### 2️⃣ Install Dependencies
```bash
npm install firebase zustand
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### 3️⃣ Tailwind CSS Configuration
```bash
tailwind.config.ts
ts
Copy
Edit
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

app/globals.css
css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4️⃣ Google Font Setup (Optional)
```bash
Install via next/font:

app/layout.tsx
tsx
Copy
Edit
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LuxeCart - Premium Shopping Experience',
  description: 'Experience premium shopping with LuxeCart',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### 5️⃣ Firebase Configuration
```bash
Install Firebase
bash
Copy
Edit
npm install firebase
firebase/config.ts
ts
Copy
Edit
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

### 6️⃣ Zustand Store Setup
```bash
store/useUserStore.ts
ts
Copy
Edit
import { create } from 'zustand';

interface UserState {
  user: any;
  setUser: (user: any) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

```

### 7️⃣ Create Global Provider
```bash
app/providers.tsx
tsx
Copy
Edit
'use client';

import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
```

### 8️⃣ Add Default Home Page
```bash
app/page.tsx
tsx
Copy
Edit
export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to LuxeCart 🛒
      </h1>
    </main>
  );
}
```

### 9️⃣ Start the Development Server
```bash
bash
Copy
Edit
npm run dev
Visit: http://localhost:3000
```

### 🧠 Project Structure
```bash
luxecart/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── providers.tsx
├── firebase/
│   └── config.ts
├── store/
│   └── useUserStore.ts
├── public/
├── .env.local
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### 🔧 Useful Commands
```bash
Command	Description
npm run dev	Start local development server
npm run build	Build app for production
npm run start	Start production server
npm run lint	Run ESLint


