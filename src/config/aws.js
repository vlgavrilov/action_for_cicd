const config = require('./index');
const AWS = require('aws-sdk');

AWS.config.apiVersions = {
  s3: '2006-03-01',
  // other service API versions
};
AWS.config.update({
  region: config.aws.s3.region,
  accessKeyId: config.aws.access_key_id,
  secretAccessKey: config.aws.secret_access_key,
});

s3 = new AWS.S3();

module.exports = {s3};
