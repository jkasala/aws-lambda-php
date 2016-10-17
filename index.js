process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

'use strict';

const exec = require('child_process').exec;

exports.handler = (event, context, callback) => {
    
    const child = exec("bin/php main.php", (error) => {
        // Resolve with result of process
        callback(error, 'Process complete!');
    });

    // Log process stdout and stderr
    child.stdout.on('data', console.log);
    child.stderr.on('data', console.error);
};

