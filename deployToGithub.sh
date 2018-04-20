#!/usr/bin/env bash
echo Deleting files from sebcarss.github.io
rm -r ../sebcarss.github.io/*

echo Copying files from sebcarss.github.io.repo/public/ to sebcarss.github.io
cp -R public/. ../sebcarss.github.io/

echo Retrieving version
version="undefined"
while read p; do
    read -a array <<< $p
    if [ ${array[0]}="version" ]; then
        version=${array[1]}
    fi
done < configfile
echo Version is $version

echo Pushing changes to sebcarss.github.io
cd ../sebcarss.github.io
git add . && git commit -m "Deploying latest changes in version $version" && git push origin master
cd ../sebcarss.github.io.repo
echo Push finished!