#!/usr/bin/env python3
import subprocess
import os
import sys

os.chdir('/')

print("Running yarn install to ensure all dependencies are installed...")
result = subprocess.run(['yarn', 'install', '--frozen-lockfile'], timeout=600)

if result.returncode != 0:
    print("Yarn install failed, trying without frozen-lockfile...")
    result = subprocess.run(['yarn', 'install'], timeout=600)

sys.exit(result.returncode)
