# AWS Lambda PHP
PHP 5.3 support for AWS Lambda

This uses a small Node.js shim to spawn a child process which runs the included PHP binary.  The binary has been pre-compiled against the Amazon Linux architecture that Lambda runs on.

The deploy.sh script will zip up the repo contents and upload them to Lambda.  
