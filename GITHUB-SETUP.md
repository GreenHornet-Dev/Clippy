# GitHub Setup Guide for Clippy

Quick reference for pushing this project to GitHub using PowerShell/Terminal.

## Prerequisites

- Git installed on your computer
- GitHub account
- Created a new repository called "Clippy" on GitHub (empty repo, no README)

## Step-by-Step Instructions

### 1. Open PowerShell Terminal

In VSCode:
- Press `Ctrl + Backtick` (or Ctrl + ~)
- Or go to Terminal menu > New Terminal

Or open PowerShell directly from your Start menu.

### 2. Navigate to Your Project Folder

```powershell
cd path\to\your\clippy-project-folder
```

Example:
```powershell
cd C:\Users\YourName\Documents\Clippy
```

### 3. Initialize Git (First Time Only)

```powershell
git init
```

### 4. Add All Files

```powershell
git add .
```

### 5. Create Initial Commit

```powershell
git commit -m "Initial commit: Clippy Q&A application with React and Tailwind CSS"
```

### 6. Add Remote Repository

Replace `YOUR-USERNAME` with your actual GitHub username:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/Clippy.git
```

### 7. Push to GitHub

```powershell
git branch -M main
git push -u origin main
```

This might prompt for your GitHub credentials.

---

## Using GitHub Authentication Tokens (Recommended)

If password authentication fails:

### 1. Create a Personal Access Token

- Go to GitHub.com → Settings → Developer settings → Personal access tokens
- Click "Generate new token"
- Name it: "Clippy-Dev"
- Check: `repo` and `workflow`
- Copy the token (you'll only see it once!)

### 2. Use Token in Git Commands

When Git asks for password, paste your token instead.

Or use this format in the remote URL:

```powershell
git remote add origin https://YOUR-USERNAME:YOUR-TOKEN@github.com/YOUR-USERNAME/Clippy.git
```

---

## Common Git Commands Going Forward

After initial setup, use these commands regularly:

### Check Status
```powershell
git status
```

### Make Changes and Commit
```powershell
git add .
git commit -m "Your commit message here"
```

### Push Changes to GitHub
```powershell
git push
```

### Pull Latest Changes
```powershell
git pull
```

### View Commit History
```powershell
git log --oneline
```

---

## Commit Message Best Practices

Use descriptive messages:

✅ Good:
- `Add: Code snippet copy functionality`
- `Fix: Search not finding key phrases`
- `Update: README with new features`
- `Remove: Unused dependencies`

❌ Bad:
- `update`
- `fix stuff`
- `changes`
- `asdf`

Format: `[Action]: Description`

Common actions:
- `Add` - New feature
- `Fix` - Bug fix
- `Update` - Improve existing
- `Remove` - Delete code
- `Refactor` - Code restructure
- `Docs` - Documentation change

---

## File Structure in GitHub

Your GitHub repo will look like:

```
Clippy/
├── index-code-edition.html
├── qa-data.json
├── README.md
├── .gitignore
├── package.json
├── LICENSE
├── CONTRIBUTING.md
└── GITHUB-SETUP.md
```

---

## Troubleshooting

### "fatal: not a git repository"
- Run `git init` first
- Or check you're in the right folder with `cd`

### "error: src refspec main does not match"
- Make sure you committed first: `git commit -m "message"`
- Then try push again

### "Permission denied" or Auth Errors
- Use personal access token instead of password
- Check token has `repo` permission

### "rejected... non-fast-forward"
- Someone else pushed changes
- Run `git pull` first
- Then `git push`

---

## Next Steps

1. ✅ All files ready (this folder)
2. ✅ Git initialized on your computer
3. ✅ Files pushed to GitHub
4. 📝 Add topics to your GitHub repo (browse, python, react, etc.)
5. 🎯 Update `package.json` with your username
6. 📚 Add a GitHub Pages setup (optional - to host the app)

---

**You're ready to push to GitHub! 🚀**
