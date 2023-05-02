Remove-Item ./server/static/* -Recurse -Force
# build static files
npm run build --prefix client/
# run server
npm run dev --prefix server/