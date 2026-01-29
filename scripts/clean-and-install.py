#!/usr/bin/env python3
import subprocess
import sys
import os
import shutil

# Clean npm cache completely
print("Cleaning npm cache...")
subprocess.run(['npm', 'cache', 'clean', '--force'], capture_output=True)

# Remove npm lock files
print("Removing npm lock files...")
for path in ['/root/.npm', '/root/.npmrc']:
    if os.path.exists(path):
        if os.path.isdir(path):
            shutil.rmtree(path, ignore_errors=True)
        else:
            os.remove(path)

# Change to root
os.chdir('/')

# Run npm install
print("Running npm install...")
result = subprocess.run(
    ['npm', 'install', '--legacy-peer-deps', '--no-audit', '--no-fund'],
    capture_output=True,
    text=True
)

print(result.stdout)
if result.stderr:
    print("STDERR:", result.stderr)

sys.exit(result.returncode)
