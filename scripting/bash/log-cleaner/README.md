# Bash Log Cleaner

Deletes `.log` files older than a specified number of days.

## Usage

```bash
./clean_logs.sh /var/log 7
```

Deletes log files older than **7 days**.

## Notes

Uses `find` with `-mtime` to locate old files.