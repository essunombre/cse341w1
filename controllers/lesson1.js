//where logic take place
const homeRoute = (req, res) =>{
    res.send('Welcome to this w1')
}

const joseRoute = (req, res) =>{
    res.send('Jose David Albancando Robles')
}

const jacobRoute = (req, res) =>{
    res.send('Jacob David')
}

const andreaRoute = (req, res) =>{
    res.json('Andre')
}

module.exports = {
    jacobRoute, 
    homeRoute,
    andreaRoute, 
    joseRoute,
};