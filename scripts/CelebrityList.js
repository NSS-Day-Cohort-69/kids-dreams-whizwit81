import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const celebClicked = clickEvent.target

            if (celebClicked.dataset.type === "celebrity"){

            const celebId  = celebClicked.dataset.id
            
            for (const celeb of celebrities) {
                if ( parseInt(celebId) === celeb.id) {

                    window.alert(`${celeb.name} is a ${celeb.sport} star`)
                    
                }
            }
        }    
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li data-id="${celebrity.id}" data-type="celebrity" data-sport="${celebrity.sport}" data-id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
