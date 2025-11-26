import { Schema, model, Document } from "mongoose";

interface IComment extends Document {
  name: string;
  stars: number;
  text: string;
}

const CommentSchema = new Schema<IComment>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, 
});

CommentSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

export const Comment = model<IComment>("Comment", CommentSchema);