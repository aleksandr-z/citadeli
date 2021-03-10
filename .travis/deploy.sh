#!/bin/bash

scp -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" ./archive.tar.gz $USER@$IP:$DEPLOY_PATH
echo 'copy files'
ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" -i ~/.ssh/deploy $USER@$IP -p $PORT <<EOF
  cd $DEPLOY_PATH
  tar -xvf archive.tar.gz
  cd dist
  node bundle.js
EOF
