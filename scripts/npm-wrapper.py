#!/usr/bin/env python3
import subprocess
import sys
import os

# Set environment variables to avoid tracker issues
env = os.environ.copy()
env['NPM_CONFIG_CACHE'] = '/tmp/npm-cache'
env['NPM_CONFIG_LOGLEVEL'] = 'error'

os.chdir('/')

# Remove old node_modules to start fresh
subprocess.run(['rm', '-rf', 'node_modules'], capture_output=True)

# Run npm install with minimal logging
print("Installing dependencies...")
result = subprocess.run(
    ['npm', 'install', '--legacy-peer-deps', '--no-fund'],
    env=env,
    timeout=600
)

print(f"Install completed with code: {result.returncode}")

if result.returncode == 0:
    print("Dependencies installed successfully!")
    print("Preview should now work.")

sys.exit(result.returncode)
