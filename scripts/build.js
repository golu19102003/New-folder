const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

try {
  // Ensure we're in the Frontend directory
  process.chdir('Frontend');
  
  // Install dependencies with the correct permissions
  console.log('Installing dependencies...');
  execSync('npm install --unsafe-perm', { stdio: 'inherit' });
  
  // Run the build
  console.log('Running Vite build...');
  execSync('npx --no-install vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
