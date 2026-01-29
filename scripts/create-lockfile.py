#!/usr/bin/env python3
import json
import os
import subprocess
import sys

# Change to root
os.chdir('/')

# Read package.json
with open('package.json', 'r') as f:
    package_data = json.load(f)

print("Read package.json")

# Create a basic package-lock.json structure
lock_data = {
    "name": package_data.get("name", "vite_react_shadcn_ts"),
    "version": package_data.get("version", "0.0.0"),
    "lockfileVersion": 3,
    "requires": True,
    "packages": {
        "": {
            "name": package_data.get("name", "vite_react_shadcn_ts"),
            "version": package_data.get("version", "0.0.0"),
            "dependencies": package_data.get("dependencies", {}),
            "devDependencies": package_data.get("devDependencies", {})
        }
    }
}

# Write package-lock.json
with open('package-lock.json', 'w') as f:
    json.dump(lock_data, f, indent=2)

print("Created package-lock.json")

# Now run npm install
print("Running npm install...")
result = subprocess.run(['npm', 'install', '--legacy-peer-deps', '--no-audit', '--no-fund'], timeout=600)
sys.exit(result.returncode)
