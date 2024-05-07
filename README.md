# Pangea AuthN Amplify Burn Book Demo
This is a demo that demonstrates how to perform encryption in transit using [Pangea Vault](https://pangea.cloud/services/vault?utm_source=github&utm_medium=aws-amplify-stream) and AWS Amplify.

## Get Started
### Step 1: Setup .env
First copy the `.env.example` into a `.env.local` file
```bash
cp .env.example .env.local
```

Then signup for an account on [pangea.cloud](https://pangea.cloud/?utm_source=github&utm_medium=aws-amplify-stream) and copy paste your tokens into the env file.

### Step 2: Push Amplify configuration
Make sure you have the [Amplify CLI](https://docs.amplify.aws/gen1/javascript/tools/cli/start/set-up-cli/) installed on your computer.

Then, run
```bash
amplify push -y
```

Once that is completed copy paste the GraphQL end point and secrets into the `.env.local` file.

### Step 3: Spin up dev server
To start the dev server, run
```bash
npm run dev
```

If you have any questions, need help with Pangea, or want to share your feedback with us, reach out on the [Pangea Community](https://community.pangea.cloud/?utm_source=github&utm_medium=aws-amplify-stream)