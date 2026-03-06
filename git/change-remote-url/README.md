# Change Git Remote URL

## What it does

Updates the remote repository URL for an existing Git project.

Useful when:

- Moving a repository
- Switching from HTTPS to SSH
- Changing Git hosting providers

---

## Check Current Remote

```bash id="i26ddq"
git remote -v
```

Example output:

```id="yeq0w2"
origin  https://github.com/user/repo.git (fetch)
origin  https://github.com/user/repo.git (push)
```

---

## Change Remote URL

```bash id="nsu35f"
git remote set-url origin <new-url>
```

Example:

```bash id="vyz3d7"
git remote set-url origin git@github.com:user/repo.git
```

---

## Verify Change

```bash id="11kocn"
git remote -v
```

---

## Add a New Remote (Optional)

```bash id="2w6zdl"
git remote add upstream https://github.com/original/repo.git
```

This is common when working with forks.