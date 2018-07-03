// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('uuid');

// Create unique bucket name
var bucketName = 'aws-node-boilerplate-' + uuid.v4();

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2018-07-01'}).createBucket({Bucket: bucketName}).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(() => {
    
}).catch(
  function(err) {
    console.error(err, err.stack);
});