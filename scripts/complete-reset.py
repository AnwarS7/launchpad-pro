#!/usr/bin/env python3
import os
import shutil
import subprocess
import sys
import time

os.chdir('/')

print("=== Complete Project Reset ===\n")

# 1. Kill any node/npm processes
print("1. Killing any lingering node processes...")
subprocess.run(['pkill', '-9', 'node'], capture_output=True)
subprocess.run(['pkill', '-9', 'npm'], capture_output=True)
time.sleep(2)

# 2. Clear all caches and build artifacts
print("2. Clearing all caches and build artifacts...")
dirs_to_clear = [
    '.vite',
    'dist',
    'build',
    'node_modules/.vite',
    'node_modules/.cache',
    '.cache',
]

for dir_path in dirs_to_clear:
    if os.path.exists(dir_path):
        try:
            shutil.rmtree(dir_path, ignore_errors=True)
            print(f"   Cleared: {dir_path}")
        except:
            pass

# 3. Verify all required files exist
print("\n3. Verifying all required files exist...")
required_files = [
    'src/components/Preloader.tsx',
    'src/components/Footer.tsx',
    'src/components/Navigation.tsx',
    'src/hooks/useSmoothScroll.ts',
    'src/hooks/useScrollReveal.ts',
    'src/hooks/usePreloader.ts',
    'src/lib/utils.ts',
    'package.json',
]

all_exist = True
for file_path in required_files:
    if os.path.exists(file_path):
        print(f"   ✓ {file_path}")
    else:
        print(f"   ✗ MISSING: {file_path}")
        all_exist = False

if not all_exist:
    print("\n❌ Some required files are missing!")
    sys.exit(1)

print("\n✓ All required files exist!")
print("\n=== Reset Complete ===")
print("The preview should now load correctly with all components and dependencies.")
sys.exit(0)
