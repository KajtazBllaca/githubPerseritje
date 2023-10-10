// Sinkroniteti në programim ndodh kur ekzekutimi i operacioneve bëhet në mënyrë sekuenciale.
// Një operacion do të ekzekutohet vetëm pasi të jetë kryer ai i mëparshmi. Kjo do të thotë që një
// detyrë potencialisht komplekse mund të marrë pak kohë përpara se të gjithë hapat e saj të ekzekutohen dhe të përfundojnë.

/* function getPizza() {
    return '🍕'
}

const pizza = getPizza()
console.log(`${pizza}`) */

let pizza

function orderPizza(callback){
    console.log("Order the pizza")
    setTimeout(() => {
        const pizza = '🍕'
        callback(pizza)
    }, 7000)
    
}

function eatPizza(pizza){
    console.log(`Eat ${pizza}`)
}

orderPizza(eatPizza)
console.log('Call a friend')

// Programimi asinkron është një teknikë që i mundëson programit tuaj të fillojë një detyrë potencialisht afatgjatë
// dhe të jetë ende në gjendje të përgjigjet ndaj ngjarjeve të tjera gjatë ekzekutimit të kësaj detyre,
// në vend që të duhet të presë derisa ajo detyrë të përfundojë. Pasi të përfundojë kjo detyrë, programi juaj paraqitet me rezultatin.

// orderPizza()
// console.log(`Eat ${pizza}`)
// console.log('Call a friend')
