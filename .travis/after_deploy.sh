ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" -i ~/.ssh/deploy $USER@$IP -p $PORT  <<EOF
  cd $DEPLOY_PATH/dist
  node bundle.js
EOF
