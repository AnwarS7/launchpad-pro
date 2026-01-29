#!/usr/bin/env python3
import subprocess
import sys
import os
import time
import shutil

# Kill any running npm processes
print("Killing existing npm processes...")
subprocess.run(['pkill', '-9', 'npm'], capture_output=True)
subprocess.run(['pkill', '-9', 'node'], capture_output=True)

# Wait a moment
time.sleep(2)

# Remove npm tracker
print("Removing npm tracker...")
tracker_path = '/root/.npm'
if os.path.exists(tracker_path):
    shutil.rmtree(tracker_path, ignore_errors=True)

# Wait another moment
time.sleep(1)

# Change to root
os.chdir('/')

# Run npm install
print("Running npm install...")
result = subprocess.run(
    ['npm', 'install', '--legacy-peer-deps', '--no-audit', '--no-fund', '--verbose'],
    timeout=600
)

print(f"npm install completed with return code: {result.returncode}")
sys.exit(result.returncode)
