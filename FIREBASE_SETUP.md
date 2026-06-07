# 📲 FIFA World Cup 2026™ — Firebase Integration Guide

Follow these steps to connect your own Google Firebase instance to the project, enabling real Google Authentication and real-time database syncing for favorites.

---

## 🛠️ Step 1: Create a Firebase Project
1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add Project** (or **Create a project**).
3. Name your project (e.g., `FIFA-World-Cup-2026`) and click **Continue**.
4. Choose whether to enable Google Analytics (optional, you can disable it for local practice) and click **Create Project**.

---

## 🔑 Step 2: Register a Web App
1. On the project homepage, click the **Web icon (`</>`)** to register a web app.
2. Enter an App nickname (e.g., `fifa-wc-app`).
3. Click **Register App**.
4. Firebase will display a code snippet containing `firebaseConfig` keys. You will need these values for **Step 5**.

---

## 🔓 Step 3: Enable Google Authentication
1. In the Firebase left navigation sidebar, click on **Build** > **Authentication**.
2. Click **Get Started**.
3. Under the **Sign-in method** tab, click **Add new provider**.
4. Choose **Google** from the list.
5. Toggle the **Enable** switch.
6. Select a support email for your project, then click **Save**.

---

## 🗄️ Step 4: Enable Cloud Firestore Database
1. In the Firebase left navigation sidebar, click on **Build** > **Firestore Database**.
2. Click **Create Database**.
3. Select your database location (choose one closest to you) and click **Next**.
4. Choose to start in **Test mode** (which allows reads and writes for 30 days during development) or configure security rules.
5. Click **Create** (this will provision your database in a few seconds).

---

## 📝 Step 5: Configure Vite Environment Variables
Vite uses a `.env` file to load environment variables.

1. In the root directory of your project (`e:\React Practice\FIFA-World-Cup-2026\`), create a file named `.env`.
2. Open it and paste the configuration below, replacing the placeholder strings with your actual keys from **Step 2**:

```env
VITE_FIREBASE_API_KEY="your_api_key_here"
VITE_FIREBASE_AUTH_DOMAIN="your_project_id.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="your_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_project_id.firebasestorage.app"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id_here"
VITE_FIREBASE_APP_ID="your_app_id_here"
```

---

## ⚡ Fallback Behavior
- **Before** you create the `.env` file, the application is designed to **fallback gracefully** to a local Mock Database / Mock Authentication layer. This ensures the app compiles and is completely testable out-of-the-box.
- **As soon as** you configure the `.env` file, the app automatically switches to real Firebase Auth and real Firestore document sync!
