#!/usr/bin/env python3
import subprocess
import sys
import os
import shutil
import glob
import time

def remove_path(path):
    """Safely remove a file or directory"""
    try:
        if os.path.isdir(path):
            shutil.rmtree(path, ignore_errors=True)
        elif os.path.exists(path):
            os.remove(path)
        return True
    except Exception as e:
        print(f"Failed to remove {path}: {e}")
        return False

# Kill npm
subprocess.run(['pkill', '-KILL', '-f', 'npm'], capture_output=True)
subprocess.run(['pkill', '-KILL', 'node'], capture_output=True)
time.sleep(2)

print("Cleaning npm caches...")

# Remove all npm caches and locks
paths = [
    '/root/.npm',
    '/root/.npmrc',
    os.path.expanduser('~/.npm'),
    '/tmp/npm-*',
    '/.npmrc',
    '/npm-debug.log*',
]

for pattern in paths:
    for path in glob.glob(pattern):
        if remove_path(path):
            print(f"  Removed: {path}")

print("Cleaning node_modules...")
if remove_path('/node_modules'):
    print("  Removed node_modules")

# Clear tracker files
print("Clearing npm trackers...")
subprocess.run(['rm', '-rf', '/tmp/.npm-*'], capture_output=True)

time.sleep(1)

os.chdir('/')
print("\nAttempting npm install...")
print("=" * 50)

result = subprocess.run(['npm', 'install', '--legacy-peer-deps'], timeout=600)

print("=" * 50)
print(f"npm install exit code: {result.returncode}")

sys.exit(result.returncode)
