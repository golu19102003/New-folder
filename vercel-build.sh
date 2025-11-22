#!/bin/bash
set -e

echo "Starting Vercel build process..."

# Navigate to the Frontend directory
cd Frontend

# Install TypeScript if not present
if [ ! -d "node_modules/typescript" ]; then
  echo "Installing TypeScript..."
  npm install --save-dev typescript
fi

# Run TypeScript type check
echo "Running TypeScript type check..."
npx tsc --noEmit || { echo "TypeScript type check failed"; exit 1; }

# Run Vite build
echo "Running Vite build..."
npx vite build

echo "Build completed successfully!"
