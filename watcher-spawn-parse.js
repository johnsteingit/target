/**
 * Created by fritz on 3/24/14.
 */

"use strict";

var fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];

if (! filename) {
    throw Error("A file to watch must be specified!");
}

fs.watch( filename, function() {
    var ls = spawn('ls', ['-lh', filename]), output = '';
    ls.stdout.on('data', function(chunk) {
        output += chunk.toString();
    });
    ls.on('close', function() {
        var parts = output.split(/\s +/);
        console.dir([ parts[0], parts[1], parts[2]]);
    });
});

console.log("Now watching " + filename + " for changes...");