var child_process = require('child_process')

exports.handler = function(event, context) {
  var proc = child_process.spawn('./aws-lambda-go', [ event.name || "" ], { stdio: 'inherit' })

  proc.on('close', function(code) {
    if(code !== 0) {
      return context.done(new Error('Process exited with non-zero status code'))
    }

    context.done(null)
  })
}
