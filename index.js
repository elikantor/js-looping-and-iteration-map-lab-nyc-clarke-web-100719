function lowerCaseDrivers(list) {
    return list.map(function(ele) { return ele.toLowerCase()})
}


function nameToAttributes(list) {
    return list.map(function(ele) {
        const firstname = ele.split(' ')[0]
        const lastname = ele.split(' ')[1]
        return { firstName: firstname, lastName: lastname}
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function(ele) {
       return `${ele.name} is from ${ele.hometown}` 
    })
}


