var schema = new Schema({
    teacher_firstname: String,
    teacher_lastname: String,
    teacher_id: Number,
    parent: String,
    Student: {
        type: Schema.Types.ObjectId,
        ref: "Students"
    }
})

export default mongoose.model("teachers", schema)
