import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide todo'],
        trim: true,
        maxlength: [100, 'todo can not be more than 100 characters'],
    },
    complete: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model('Todo', TodoSchema);
