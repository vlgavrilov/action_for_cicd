const path = require('path');
const pathEx = path.join(__dirname, '..', '..', '.env.' + process.env.NODE_ENV);
require('dotenv').config({path: pathEx});

module.exports = {
  db: {
    username: process.env.NEO4J_USER,
    password: process.env.NEO4J_PASSWORD,
    host: process.env.NEO4J_HOST || 'bolt://localhost',
    creds: {
      help: {
        adminID: process.env.HELP_ADMIN_ID,
        adminFirstName: process.env.HELP_ADMIN_FIRST_NAME,
        adminLastName: process.env.HELP_ADMIN_LAST_NAME,
        adminEmail: process.env.HELP_ADMIN_EMAIL,
        channelID: process.env.HELP_CHANNEL_ID,
        channelName: process.env.HELP_CHANNEL_NAME,
      },
      defaultContent: {
        masterID: process.env.DEFAULT_CONTENT_MASTER_ID,
        masterFirstName: process.env.DEFAULT_CONTENT_MASTER_FIRST_NAME,
        masterLastName: process.env.DEFAULT_CONTENT_MASTER_LAST_NAME,
        masterEmail: process.env.DEFAULT_CONTENT_MASTER_EMAIL,
      },
    },
  },

  googleAPI: process.env.GOOGLEAPI,
  port: process.env.API_PORT,
  frontDomain: process.env.FRONT_DOMAIN,
  routeForStatic: process.env.BACKEND_ADDRESS + 'static/',
  JWT: {
    secret: process.env.JWT_SECRET,
  },
  aws: {
    access_key_id: process.env.AWS_S3_ACCESS_KEY_ID,
    secret_access_key: process.env.AWS_S3_SECRET_ACCESS_KEY,
    s3: {
      bucketUrl: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/`,
      region: process.env.AWS_S3_REGION,
      bucketName: process.env.AWS_S3_BUCKET_NAME,
    },
  },
  maxFileSize: process.env.FILE_SIZE_UPLOAD_LIMIT_BYTES,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientIDSecret: process.env.GOOGLE_CLIENT_ID_SECRET,
  mixPanelId: process.env.MIXPANEL_ID,
  clientID: process.env.CLIENT_ID,
  DEFAULT_CONTENT_MASTER_ID: process.env.DEFAULT_CONTENT_MASTER_ID,
  DEFAULT_CONTENT_MASTER_EMAIL: process.env.DEFAULT_CONTENT_MASTER_EMAIL,
  PERSONALIZED_EMAIL_CHUNK_SIZE: 1000,
  controlPanelIP: process.env.BACKEND_ADMIN_IP,
  mux: {
    id: process.env.MUX_TOKEN_ID,
    secret: process.env.MUX_TOKEN_SECRET,
    url: process.env.MUX_BASIC_URL,
    hookSecret: process.env.MUX_HOOK_SECRET,
  },
  mailer: {
    sendgridAPIKey: process.env.SENDGRID_API_KEY,
    notificationSenderEmail: process.env.NOTIFICATION_SENDER_EMAIL || 'notifications@quidzi.com',
    notificationSenderName: process.env.NOTIFICATION_SENDER_NAME || 'Quidzi',
    supportEmail: process.env.QUIDZI_SUPPORT_EMAIL,
  },
  socket: {
    sccStateServerHost: process.env.SCC_STATE_SERVER_HOST,
    sccStateServerPort: process.env.SCC_STATE_SERVER_PORT,
    sccMappingEngine: process.env.SCC_MAPPING_ENGINE,
    sccClientPoolSize: process.env.SCC_CLIENT_POOL_SIZE,
    sccInstanceIp: process.env.SCC_INSTANCE_IP,
    sccInstanceIpFamily: process.env.SCC_INSTANCE_IP_FAMILY,
    sccStateServerConnectTimeout: process.env.SCC_STATE_SERVER_CONNECT_TIMEOUT,
    sccStateServerAckTimeout: process.env.SCC_STATE_SERVER_ACK_TIMEOUT,
    sccStateServerReconnectRandomness:
      process.env.SCC_STATE_SERVER_RECONNECT_RANDOMNESS,
    sccPubSubBatchDuration: process.env.SCC_PUB_SUB_BATCH_DURATION,
    sccBrokerRetryDelay: process.env.SCC_BROKER_RETRY_DELAY,
    socketClusterOptions: process.env.SOCKETCLUSTER_OPTIONS,
    socketClusterLogLevel: process.env.SOCKETCLUSTER_LOG_LEVEL,
  },
};
