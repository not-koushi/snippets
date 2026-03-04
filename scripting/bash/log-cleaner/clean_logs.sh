#!/bin/bash

LOG_DIR=$1
DAYS=$2

if [ -z "$LOG_DIR" ] || [ -z "$DAYS" ]; then
  echo "Usage: ./clean_logs.sh <log_directory> <days>"
  exit 1
fi

find "$LOG_DIR" -type f -name "*.log" -mtime +"$DAYS" -delete

echo "Deleted log files older than $DAYS days in $LOG_DIR"