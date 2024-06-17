// appwriteConfig.js
import { Client, Account, Databases } from 'appwrite';

export const PROJECTID = '666d5a67000b098c3384'; // Replace with your actual Project ID

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject(PROJECTID); // Your Project ID

const account = new Account(client);



export { account };


export default client;
