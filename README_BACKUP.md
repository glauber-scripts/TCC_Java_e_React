Backup and GitHub push instructions

Overview
- This archive is a snapshot of the workspace saved on 2026-06-21.

Suggested new repo name
- Atividade-React-e-Java-main-backup-2026-06-21

Create a private repository (web UI)
1. Open https://github.com and sign in.
2. Click the green "New" button to create a repository.
3. Enter the repository name above and set Visibility to "Private".
4. Do not initialize with a README, .gitignore or license (we'll push the existing content).

Commands to run locally after installing Git
1. Install Git: https://git-scm.com/downloads
2. In a terminal, run:

```powershell
cd "C:\Users\Greice Lemos\OneDrive\Documentos\Glauber\VSCode\Atividade-React-e-Java-main"
git init
git add .
git commit -m "Backup snapshot 2026-06-21"
git branch -M backup-2026-06-21
# replace <REMOTE_URL> with the URL of the private repo you created
git remote add origin <REMOTE_URL>
git push -u origin backup-2026-06-21
```

Optional: create a GitHub Release / annotated tag for timeline

```powershell
git tag -a v2026-06-21 -m "Snapshot 2026-06-21"
git push origin v2026-06-21
```

If you want me to create the remote repo for you, I can prepare the steps but I need either the `gh` CLI authenticated here, or your permission to show the exact web-UI clicks. I cannot sign in to your account.

Notes
- Git is not installed on this machine (checked). I created the ZIP archive in the workspace: `Atividade-React-e-Java-main-backup-2026-06-21.zip`.
