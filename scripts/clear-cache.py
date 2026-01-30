#!/usr/bin/env python3
import os
import shutil
import subprocess
import sys

os.chdir('/')

# Remove vite cache
cache_dirs = ['.vite', 'dist', 'node_modules/.vite']
for cache_dir in cache_dirs:
    if os.path.exists(cache_dir):
        print(f"Removing {cache_dir}...")
        shutil.rmtree(cache_dir, ignore_errors=True)

print("Cache cleared successfully")
sys.exit(0)
