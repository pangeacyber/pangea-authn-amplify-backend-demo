# Pangea AuthN with Mongo Example
(Page Router Mode)

## Getting Started
Copy the `.env.example` file to `.env.local` and copy your the environment variables from the Pangea AuthN console into your file.


## How AuthN is setup
1. Look at the [`_app_.tsx`](./src/pages/_app.tsx) and notice the `<AuthProvider>` wrapper which retains Pangea Auth context across the app.
2. Look at the [`index.tsx`](./src/pages/index.tsx) and [`authenticated.tsx`](./src/pages/authenticated.tsx) and notice how the `useAuth` hook allows you to enable conditional routing based on user authentication status.
3. To perform serverside authentication, look at [`utils/authCheck.js`](./src/utils/authCheck.js) which defines a `withAPIAuthentication` middleware that automatically checks if a user is logged in before hitting the API logic.
4. Finally look at the `getUserInfo` function that is imported from the [`utils/authCheck.js`](./src/utils/authCheck.js) in the [`send-data.ts`](./src/pages/api/send-data.ts) API, which allows you to pull user info from the server side.
