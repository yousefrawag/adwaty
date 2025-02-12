import { createClient } from 'contentful';

const client = createClient({
  space:"n2wzi80qy71a", // Your Contentful space ID
  accessToken: "nwamoSd9TCiOM32w0HTvZV4MCO33IDEYa_QYBoibgFY", // Your Contentful access token
  environment: "master",
});

export default client;
