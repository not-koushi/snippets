# Resolve Git Merge Conflicts

## What it does

Shows the basic workflow to resolve merge conflicts when Git cannot automatically merge changes.

---

## When a Conflict Happens

Git will display something like:

```text
CONFLICT (content): Merge conflict in file.txt
```

The file will contain markers like:

```text
<<<<<<< HEAD
current branch code
=======
incoming branch code
>>>>>>> branch-name
```

---

## Steps to Resolve

1. Open the conflicted file.
2. Edit the file to keep the correct code.
3. Remove the conflict markers:

```
<<<<<<<
=======
>>>>>>>
```

---

## Mark Conflict as Resolved

```bash
git add file.txt
```

---

## Complete the Merge

```bash
git commit
```

Git will create the merge commit.

---

## Abort the Merge (Optional)

If you want to cancel the merge:

```bash
git merge --abort
```