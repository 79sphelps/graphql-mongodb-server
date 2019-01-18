import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  editable: {
    type: Boolean,
    required: false
  }
});

export default mongoose.model("User", UserSchema);
