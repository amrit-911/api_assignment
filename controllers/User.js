import User from "../model/userInfo.js"
export const createUser = async(req,res)=>{
    try{
        const {name,img,summary} = req.body

        const newUser =  new User({
            name,img,summary
        })

        const user = await newUser.save()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

export const getUser = async(req,res)=>{
    try{

        const getUser = await User.find({})
        res.status(200).json(getUser)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

export const updateUser = async(req,res)=>{
    try{
        const id = req.params.id
        const {name,img,summary} = req.body


        const updatedUser = await User.findByIdAndUpdate(id,{name,img,summary},{new:true}) 
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

export const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id)
        res.status(200).json(deletedUser)

    }catch(err){
        res.status(500).json({error: err.message})
    }
}