/**
 * Created by fritz on 3/23/14.
 */

const fs = require('fs');

try {
    fs.watch('target.txt', function () {
        console.log("File 'target.txt' just changed!");
    });
}
catch(err){
    console.log("Error:" + err.message)
}

console.log("Now watching target.txt for changes...");