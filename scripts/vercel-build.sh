#!/bin/bash
set -e

echo "Starting build process..."

# Navigate to the Frontend directory
cd Frontend

# Install dependencies with the correct permissions
echo "Installing dependencies..."
npm install --unsafe-perm

# Install Vite locally
echo "Installing Vite..."
npm install --save-dev vite

# Run the build using the local Vite binary
echo "Running Vite build..."
npx vite build

echo "Build completed successfully!"
