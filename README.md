# aws-lambda-go
An example of how to write AWS Lambda Functions in Go.

Read article: [Writing AWS Lambda Functions in Go](http://jacopodaeli.com/writing-aws-lambda-functions-in-go/).

### Cross compile the Go program
```console
GOOS=linux GOARCH=amd64 go build hellowho.go
```

### Create a AWS Lambda Deployment Package
First of all
```
./build_zip
```
and then follow the [official AWS instructions](http://docs.aws.amazon.com/lambda/latest/dg/deployment-package-v2.html).
