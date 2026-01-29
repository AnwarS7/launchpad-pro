#!/usr/bin/env python3
import subprocess
import sys
import os

# Remove any stale npm cache
subprocess.run(['rm', '-rf', '/root/.npm'], check=False)

# Change to root and run npm install to regenerate package-lock.json
os.chdir('/')
result = subprocess.run(['npm', 'install', '--legacy-peer-deps'], capture_output=True, text=True)
print(result.stdout)
if result.stderr:
    print(result.stderr)
sys.exit(result.returncode)
