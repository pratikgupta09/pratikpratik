var schema = new Schema({
    name: String,
    parent: String,
    email: String,
    wohligg: {
        type: Schema.Types.ObjectId,
        ref: "teachers"
    }
})
export default mongoose.model("Students", schema)
