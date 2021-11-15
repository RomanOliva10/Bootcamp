const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=num';

const getDataAsync = async () => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}

/*function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    console.log("Se rompió la respuesta" + response.status)
                }
                return
            })
            response.json().then(data =>{
                resolve(data)
            })
            .catch(function(err) {
                console.log("problema con ", err)
                reject(err)
            })
    })
}*/

