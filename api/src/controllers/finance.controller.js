import {Finance} from '../models/Finance.js'


export const getFinances = async(req, res) =>{
    const finance= await Finance.findAll()
    res.status(201).json(finance);
}

export const getRegisterId = async(req, res)=>{
    const { id } = req.params
    try{
        const finance = await Finance.findByPk(id)

        if(!finance){
            return res.status(400).json(`Register with id ${id} doesnt exist`)
        }
            
        
        return res.status(201).json(finance);
        
        
    }catch(err){
        console.log(err)
        return res.status(400).json(`Contact with the administrator`)
    }

}

export const getFinanceById = async (req, res) => {
    const {id} = req.params;
    const finance = await Finance.findAll({
        order:[['createdAt', 'DESC']],
        where:{
            financeId : id,
            state: true
        },
        include: {
            model: User   
        }
    })

    if(!finance){
        return res.status(400).json(`Register with id ${id} doesnt exist`)
    }
        
    
    return res.status(201).json(finance);

}




export const postFinance = async (req, res) =>{
    const {name, type, total, description, state,date} = req.body
    try {
        const newFinance = await Finance.create({
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
    res.send('Posting finances')
}

export const updateFinance = async (req, res) =>{
    const {id} = req.params;
    const { name , type, total, description, date } = req.body
    const finance = await Finance.findByPk(id)

    if(finance){
        await finance.update({name, type, total, description, date})
        return res.status(201).json(finance)
    }else{
        res.status(404).send('Finance not found')
    }
}

export const deleteFinance = async (req, res) =>  {
    const {id} = req.params;
    
    const finance = await Finance.findByPk(id);
    if (!finance) {
      return res.status(404).json(`Finance ${id} doesnt exist`);
    }

    await finance.update({state: false})
    
  
    res.status(201).json(finance)
}