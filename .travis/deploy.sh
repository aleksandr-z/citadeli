#!/bin/bash

#sudo chmod 600 ./.travis/deploy # Allow read access to the private key
#ssh-add ./.travis/deploy # Add the private key to SSH
# Skip this command if you don't need to execute any additional commands after deploying.
#ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" -i ~/.ssh/deploy $USER@$IP -p $PORT <<EOF
#  cd $DEPLOY_PATH
#  git pull
#EOF
scp -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" ./archive.tar.gz deploy@$IP:/$DEPLOY_PATH
echo 'copy files'
ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" -i ~/.ssh/deploy $USER@$IP -p $PORT <<EOF
  cd $DEPLOY_PATH
  tar -xvf archive.tar.gz
  node app.js
EOF
