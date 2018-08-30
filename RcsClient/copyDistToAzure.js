const fs = require('fs')
const { exec } = require('child_process');
const path = require('path')

// Install azcopy.exe in your machine before running this!
// https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy
const sourceDirectory = path.dirname(__dirname) + '\\dist'
const command = `cd %ProgramFiles(x86)%\\Microsoft SDKs\\Azure\\AzCopy && AzCopy /Source:${sourceDirectory} /Dest:https://jorgewebdeployment.blob.core.windows.net/etisys /DestKey:PUTCONNECTIONSTRINGHERE /SetContentType /S /Y`
console.log('Will run this command: ' + command)

exec(command, (err, stdout, stderr) => {
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    if (err) {
      // node couldn't execute the command
      console.error('Failed to run command (does not always mean things failed)!')
      console.error(err)
      return;
    }
});