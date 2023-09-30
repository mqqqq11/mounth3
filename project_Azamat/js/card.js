const cards = document.querySelector('.card')

const fetchPersons = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
        data.forEach(persons => {
            const person = document.createElement('div')
            person.setAttribute("class", "person-card")
            person.innerHTML = `
                <div>
                    <div class="icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="icon">
                    </div>
                    <h4>title: ${persons.title}</h4>
                    <p>body: ${persons.body}</p>
                </div> 
            `
            cards.append(person)
            })
}
fetchPersons()
