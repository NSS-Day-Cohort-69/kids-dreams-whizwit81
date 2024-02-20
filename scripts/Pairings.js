import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()
console.log(kids)
console.log(celebrities)

const findCelebrityMatch = (kid, celebrity) => {

    let celebrityName = null

    for (const celeb of celebrities) {
        if( celeb.id === kid.celebrityId)
            celebrityName = celeb.name
        
    }

    return celebrityName
}

const findCelebritySport = (kid, celebrity)=> {

        let celebritySport = null

        for (const celeb of celebrities) {
            if(celeb.id === kid.celebrityId)
                celebritySport = celeb.sport
    }

    return celebritySport
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        const celebritySport = findCelebritySport(kid, celebrities)
        
    
        html += `<li>
                ${kid.name} will be making memories with ${kidsStar}, a ${celebritySport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

