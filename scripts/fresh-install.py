#!/usr/bin/env python3
import subprocess
import sys
import os

# Change to root directory
os.chdir('/')

# Run npm install to generate package-lock.json
print("Running npm install to generate package-lock.json...")
result = subprocess.run(
    ['npm', 'install', '--legacy-peer-deps', '--no-audit', '--no-fund'],
    timeout=600
)

sys.exit(result.returncode)
