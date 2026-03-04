# Undo Last Commit (Git)

## Keep changes staged

Undo the last commit but keep changes staged.

```bash
git reset --soft HEAD~1
```

Use this when you want to **modify the commit message or add more files**.

---

## Keep changes but unstage them

Undo the last commit and move changes back to the working directory.

```bash
git reset --mixed HEAD~1
```

Use this when you want to **reorganize the commit**.

---

## Completely discard the commit

⚠️ This permanently deletes the commit and its changes.

```bash
git reset --hard HEAD~1
```

Use with caution.

---

## Undo a pushed commit safely

If the commit is already pushed, use:

```bash
git revert HEAD
```

This creates a new commit that reverses the previous one.

---

## Summary

| Situation                 | Command                    |
| ------------------------- | -------------------------- |
| Fix last commit           | `git reset --soft HEAD~1`  |
| Rework commit files       | `git reset --mixed HEAD~1` |
| Delete commit entirely    | `git reset --hard HEAD~1`  |
| Undo pushed commit safely | `git revert HEAD`          |