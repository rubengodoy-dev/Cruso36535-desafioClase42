import mongoose from 'mongoose';

const collectionName = 'users';

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  enterprise: String,
  job: String,
});

export default {
  collectionName,
  schema,
};
//export const users = mongoose.model(collectionName, schema)