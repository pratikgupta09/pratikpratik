var schema = new Schema({
    teacher_firstname: { type: String, required: true },
    teacher_lastname: { type: String },
    teacher_id: { type: Number },
    parent: { type: String, required: true },
    Student: {
        type: Schema.Types.ObjectId,
        ref: "Students"
    }
})

export default mongoose.model("teachers", schema)
