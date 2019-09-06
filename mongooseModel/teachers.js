var schema = new Schema({
    teacher_firstname: String,
    teacher_lastname: String,
    teacher_id: Number
})
export default mongoose.model("teachers", schema)
