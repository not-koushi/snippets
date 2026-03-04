#!/bin/bash
set -e

SOURCE=$1
DESTINATION=$2

if [ -z "$SOURCE" ] || [ -z "$DESTINATION" ]; then
    echo "Usage: ./backup.sh <source_dir> <destination_dir>"
    exit 1
fi

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ARCHIVE_NAME="backup_$TIMESTAMP.tar.gz"

mkdir -p "$DESTINATION"

tar -czf "$DESTINATION/$ARCHIVE_NAME" "$SOURCE"

echo "Backup created: $DESTINATION/$ARCHIVE_NAME"