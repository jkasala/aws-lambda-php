zip -r deploy.zip * -x deploy.sh
aws lambda update-function-code --function-name <function-name> --zip-file fileb://deploy.zip
