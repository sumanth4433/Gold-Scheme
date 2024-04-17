#!/bin/bash

# Author : Dharmesh Patel
# Copyright (c) Onpoint Insights
# This scripts will automate the process of build and will push zip to the server.

# Build Details
BUILD_ENV_NAME="build" #build prod
BUILD_FOLDER_PATH="dist/"
BUILD_TAR_GZ="gold-scheme-fe.tar.gz"

# Key File Detail
PEM_FILE_PATH="/Users/a91863/Desktop/Softdevels/AWS/anand-key.pem"

## Bation Details
#BATION_IP="13.213.28.201"
#BATION_USER="ubuntu"
#BATION_DIR_PATH="/home/ubuntu/"

# Server Details
SERVER_IP="16.171.137.124" #dev
SERVER_USER="ubuntu"
SERVER_DIR_PATH="/home/ubuntu/"

# Deleting Old tar file
if test -f "$BUILD_TAR_GZ"; then
  rm -rf $BUILD_TAR_GZ
fi

# Creating build
npm run $BUILD_ENV_NAME

# Creating tar gz
tar -C $BUILD_FOLDER_PATH -czvf $BUILD_TAR_GZ .

# Pushing tar on server
scp -i $PEM_FILE_PATH $BUILD_TAR_GZ $SERVER_USER@$SERVER_IP:$SERVER_DIR_PATH

ssh -i $PEM_FILE_PATH $SERVER_USER@$SERVER_IP "
                                              sudo mv $BUILD_TAR_GZ /var/anand/frontend/
                                              cd /var/anand/frontend/
                                              sudo tar -xvf $BUILD_TAR_GZ
                                              "

# Server script
# sudo mv ansell-dev.tar.gz /var/www/html/
# cd /var/www/html/
# sudo tar -xvf ansell-dev.tar.gz
