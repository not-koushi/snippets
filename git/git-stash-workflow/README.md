# Git Stash Workflow

## What it does

Temporarily saves uncommitted changes so you can switch branches or pull updates safely.

---

## Save Current Changes

```bash
git stash
```

This stores your working directory changes and resets the workspace.

---

## Save with a Message

```bash
git stash push -m "WIP login feature"
```

---

## List Stashes

```bash
git stash list
```

Example:

```
stash@{0}: WIP login feature
stash@{1}: fixing bug
```

---

## Apply Latest Stash

```bash
git stash apply
```

---

## Apply Specific Stash

```bash
git stash apply stash@{1}
```

---

## Apply and Remove Stash

```bash
git stash pop
```

---

## Delete a Stash

```bash
git stash drop stash@{0}
```

---

## Clear All Stashes

```bash
git stash clear
```