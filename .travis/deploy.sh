#!/bin/bash

#sudo chmod 600 ./.travis/deploy # Allow read access to the private key
#ssh-add ./.travis/deploy # Add the private key to SSH
# Skip this command if you don't need to execute any additional commands after deploying.
ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" -i ~/.ssh/deploy @USER@$IP -p $PORT <<EOF
  cd $DEPLOY_DIR
  mkdir test
  echo 'dep'
EOF
