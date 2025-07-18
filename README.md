# Yarus Shop

This project uses **Next.js** and is configured for deployment to **Firebase App Hosting**.

## Development

Run the development server:

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy to Firebase App Hosting

1. Install the Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Log in to your Firebase account:

   ```bash
   firebase login
   ```

3. Deploy the application:

   ```bash
   firebase deploy --only apphosting
   ```
