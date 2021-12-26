#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ root@theclassictalisman.com:/var/www/theclassictalisman.com/
echo "Deployment complete"