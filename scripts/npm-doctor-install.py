#!/usr/bin/env python3
import subprocess
import sys
import os

os.chdir('/')

# Try npm doctor first
print("Running npm doctor to diagnose...")
subprocess.run(['npm', 'doctor'], capture_output=True)

# Try npm cache clean
print("Cleaning npm cache...")
subprocess.run(['npm', 'cache', 'clean', '--force'], capture_output=True)

# Try with --force and --no-save first to just fetch deps
print("Running npm install with --force flag...")
result = subprocess.run(
    ['npm', 'install', '--force', '--legacy-peer-deps'],
    timeout=600
)

sys.exit(result.returncode)
