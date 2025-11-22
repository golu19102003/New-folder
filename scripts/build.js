const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

try {
  // Change to Frontend directory
  process.chdir('Frontend');
  
  // Install dependencies with the correct permissions
  console.log('Installing dependencies...');
  execSync('npm install --unsafe-perm', { stdio: 'inherit' });
  
  // Manually run Vite build
  console.log('Running Vite build...');
  const vitePath = path.resolve('node_modules/.bin/vite');
  // Ensure execute permissions
  if (fs.existsSync(vitePath)) {
    fs.chmodSync(vitePath, '755');
  }
  // Run Vite build directly
  execSync(`node ${vitePath} build`, { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
