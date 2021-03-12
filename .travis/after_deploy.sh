ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" -i ~/.ssh/deploy $USER@$IP -p $PORT  <<EOF
  cd $DEPLOY_PATH/dist
  pm2 start bundle.js --watch
EOF
