const bcrypt = require('bcryptjs')

const helpers = {}

helpers.encryptPassword = async (pass)=>{
    const salt  = await bcrypt.genSalt(10)
    const hash = bcrypt.hash(pass,salt)
    return hash
}

helpers.comparePassword = async(pass,savePass)=>{
    try {
        return await bcrypt.compare(pass,savePass)
    } catch (error) {
        console.log(error)
    }
}

module.exports = helpers