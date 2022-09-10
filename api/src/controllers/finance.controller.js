import {Finance} from '../models/Finance.js'


const getFinances = (req, res) =>{
    res.send('getting finances')
}

const createFinance = async (req, res) =>{
    const {name, type, total, description, state, date} = req.body
    try {
        const newFinance = Finance.create({
            name,
            type,
            total,
            description,
            state,
            date
        })
        console.log(newFinance)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
    console.log(req.body);
    res.send('creating finances')
}


module.exports={
    getFinances,
    createFinance
}