#!/usr/bin/env python3
import subprocess
import sys
import os
import shutil
import glob

# Remove all npm-related lock files and caches
print("Resetting npm...")
paths_to_remove = [
    '/root/.npm',
    '/root/.npmrc',
    os.path.expanduser('~/.npm'),
    '/tmp/npm-*'
]

for pattern in paths_to_remove:
    for path in glob.glob(pattern):
        try:
            if os.path.isdir(path):
                shutil.rmtree(path, ignore_errors=True)
            else:
                os.remove(path)
            print(f"Removed: {path}")
        except Exception as e:
            print(f"Error removing {path}: {e}")

# Verify node_modules exists
if os.path.exists('/node_modules'):
    print("Removing node_modules...")
    shutil.rmtree('/node_modules', ignore_errors=True)

# Now attempt npm ci with force
os.chdir('/')
print("Running npm ci --force...")
result = subprocess.run(
    ['npm', 'ci', '--force', '--no-audit', '--no-fund'],
    capture_output=True,
    text=True,
    timeout=300
)

print("STDOUT:")
print(result.stdout)
if result.stderr:
    print("\nSTDERR:")
    print(result.stderr)

print(f"\nReturn code: {result.returncode}")
sys.exit(result.returncode)
