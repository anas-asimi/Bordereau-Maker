#!/usr/bin/env bash


# install required dependencies
npm install --prefix client/
npm install --prefix server/

# build static folder from vite
npm run build --prefix client/

# go to server dir
cd server

# Store/pull Puppeteer cache with build cache
if [[! -d $PUPPETEER_CACHE_DIR]]; then 
  echo "...Copying Puppeteer Cache from Build Cache" 
  cp -R $XDG_CACHE_HOME/puppeteer/ $PUPPETEER_CACHE_DIR
else 
  echo "...Storing Puppeteer Cache in Build Cache" 
  cp -R $PUPPETEER_CACHE_DIR $XDG_CACHE_HOME
fi

