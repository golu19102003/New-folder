#!/bin/bash
set -e

echo "Starting build process..."

# Navigate to the Frontend directory
cd Frontend

# Install dependencies with the correct permissions
echo "Installing dependencies..."
npm install --unsafe-perm

# Run the build
echo "Running Vite build..."
npx --no-install vite build

echo "Build completed successfully!"
