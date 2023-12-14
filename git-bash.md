# 🎿📖 MOVEMENT AND OPENING

## change drive

> cd d:

## open a whole folder in vscode (once navigated to folder)

> code .

## open a whole folder on desktop (once navigated to folder)

> start .

<br>

# 👼 CREATION

## create folder

> mkdir (name)

## create file

> touch (name)

<br>

## Saving Changes in Git

## 🐣 1st time Uploading

### Initialize git

1. > git init
2. > git add .
3. > git commit -m "initial commit"

### Make folder on github

3. click +, new repo
4. click code, https ex: https://github.com/JSMarsh813/Reference.git

### In Bash Terminal

5. > git remote add origin [copied web address]
6. Push your branch to Github

- > git push -u origin main

<br>

## 🏠 Origin

### View Origin

> git remote -v

### Change Origin

> git remote set-url origin (new url)

## 📛 Change Branch Name ex: Master to Main

git branch -m master main

<br>

# 😨 Errors

## git push -u origin main ===> Current Branch Behind Main

Do:

> git pull origin main

- If fatal: refusing to merge unrelated histories add flag:

  > --allow-unrelated-histories

- If fatal background: This happened when I created a new repo with a readme and wanted to push new files from vscode

- "Warning: You should not use the --allow-unrelated-histories flag unless you **know what unrelated history is** and are **sure you need it**. The check was introduced just to prevent disasters when people merge unrelated projects by mistake." https://stackoverflow.com/questions/39761024/refusing-to-merge-unrelated-histories-failure-while-pulling-to-recovered-repos/39783462#39783462

## git push ===> The current branch main has no upstream branch.

Do:

> git push --set-upstream origin main
