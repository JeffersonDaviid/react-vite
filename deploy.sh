git init 
git checkout -b main
git add -A
git commit -m "deploy"

git push -f git@github.com:JeffersonDaviid/react-vite.git main:gh-pages

cd -