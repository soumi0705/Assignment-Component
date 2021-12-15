#!/bin/bash

ROLE_ARN=$1
BUCKET_NAME=$2
BUILD_DIR=$3
DISTRIBUTION_ID=$4

echo role arn $1
echo BUCKET_NAME $2
echo BUILD_DIR $3
echo DISTRIBUTION_ID $4

# install yarn
yarn install

# build the app
REACT_APP_APP_ENV=production yarn build

# export Region
export AWS_DEFAULT_REGION="ap-southeast-1"

# IAM Login
source build-ci/iam-login.sh ${ROLE_ARN}

# Upload to s3
aws s3 cp $3/ s3://$2/ --recursive

# Invalidation
aws cloudfront create-invalidation --distribution-id $4 --paths "/*"