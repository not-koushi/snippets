#!/bin/bash

TARGET=${1:-.}

echo "Disk usage for $TARGET"
du -h "$TARGET" | sort -hr | head -20