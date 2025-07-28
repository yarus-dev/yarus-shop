"use client";

import { getApps, initializeApp } from "firebase/app";
import { config as firebaseConfig } from "./config";

// Ініціалізуємо лише один раз
export const app = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig);

export default app;
