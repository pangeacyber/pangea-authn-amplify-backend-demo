import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from '../amplifyconfiguration';
Amplify.configure(config);


const client = generateClient();

export default client;