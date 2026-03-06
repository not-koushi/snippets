# Sync Fork With Upstream Repository

## What it does

Keeps your forked repository updated with changes from the original (upstream) repository.

---

## Check Current Remotes

```bash id="b5h1f2"
git remote -v
```

Example output:

```id="3q6pwa"
origin   https://github.com/yourname/project.git
```

---

## Add Upstream Remote

```bash id="p8pd0a"
git remote add upstream https://github.com/original/project.git
```

Verify:

```bash id="5v4c2y"
git remote -v
```

Example:

```id="tzri2e"
origin   https://github.com/yourname/project.git
upstream https://github.com/original/project.git
```

---

## Fetch Latest Changes

```bash id="p3cv5o"
git fetch upstream
```

---

## Merge Upstream Changes

```bash id="h0b69k"
git merge upstream/main
```

---

## Push Updated Branch

```bash id="5m0qcr"
git push origin main
```

---

## Summary Workflow

```bash id="tfmpsq"
git fetch upstream
git merge upstream/main
git push origin main
```