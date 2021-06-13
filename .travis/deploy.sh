#!/bin/bash

scp -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" ./archive.tar $USER@$IP:$DEPLOY_PATH
ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" -i ~/.ssh/deploy $USER@$IP -p $PORT <<EOF
  cd $DEPLOY_PATH
  tar -xvf archive.tar
  rm archive.tar
  # pm2 reload citadeli $DEPLOY_PATH/ecosystem.config.js
EOF
