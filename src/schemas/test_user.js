import mongoose from 'mongoose';

import Schema from './schema_template';

const TestUserSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 15,
  },
  message: {
    type: String,
    required: false,
    max: 100,
  },
  countersign: {
    type: String,
    required: true,
    max: 20,
  },
});

export default mongoose.model('TestUser', TestUserSchema);
