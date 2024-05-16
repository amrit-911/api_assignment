import mongoose from "mongoose"

const userSchema = mongoose.Schema(

    {
        name: {
            type: String,
            required: true

        },
        img: {
            type: String,
            required: true

        },
        summary: {
            type: String,
            required: true
        }
    }
)

const User = mongoose.model("Info", userSchema)
export default User