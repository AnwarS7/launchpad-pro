#!/usr/bin/env python3
import subprocess
import sys
import os

os.chdir('/')

# Check if yarn is available
result = subprocess.run(['which', 'yarn'], capture_output=True)
if result.returncode != 0:
    print("Yarn not found, installing yarn...")
    subprocess.run(['npm', 'install', '-g', 'yarn'], timeout=120)

print("Running yarn install...")
result = subprocess.run(['yarn', 'install'], timeout=600)

if result.returncode == 0:
    print("\nYarn install successful!")
    print("Dependencies are now installed. Your preview should work.")
else:
    print("\nYarn install failed. Falling back to npm...")
    # If yarn also fails, the issue is likely system-wide

sys.exit(result.returncode)
