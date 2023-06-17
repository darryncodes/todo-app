import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide todo'],
        trim: true,
        maxlength: [30, 'todo can not be more than 30 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model('Todo', TodoSchema);
