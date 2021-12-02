// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comparisons } = initSchema(schema);

export {
  Comparisons
};