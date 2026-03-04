# Git Interactive Rebase

## What it does

Allows you to rewrite commit history by editing, squashing, or reordering commits.

## Start Interactive Rebase

```bash
git rebase -i HEAD~3
```

This opens the last **3 commits** in an editor.

---

## Common Actions

| Command  | Meaning                      |
| -------- | ---------------------------- |
| `pick`   | keep commit as-is            |
| `reword` | change commit message        |
| `edit`   | modify commit contents       |
| `squash` | combine with previous commit |
| `drop`   | remove commit                |

Example:

```
pick a1b2c3 add login API
squash d4e5f6 fix login bug
reword g7h8i9 update docs
```

---

## After Editing

Save and close the editor. Git will guide you through the process.

---

## Important Warning

Do **not rebase commits that were already pushed** to shared branches unless you understand the consequences.

---

## Common Use Case

Clean up commits before pushing:

```bash
git rebase -i HEAD~5
```