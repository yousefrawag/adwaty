import { createClient } from 'contentful';

const client = createClient({
  space:"hbxueoxa6j1p", // Your Contentful space ID
  accessToken: "IkHXB9IpuxXU0g-_zGnYoPuhdwrOF0wS57xFUPgnfwM", // Your Contentful access token
  environment: "master",
});

export default client;
