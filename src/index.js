getAllDog()

function getAllDog() {
    fetch('http://localhost:3000/pups') 
    .then(resp => resp.json())
    .then(dogs => {
        dogs.forEach(dog => loadDog(dog))
    })
}


function patchDog(dog) {
    fetch(`http://localhost:3000/pups/${dog.id}`, {
        method: "PATCH", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            isGoodDog: !dog.isGoodDog
        })
    })
    .then(resp => resp.json()) 
    .then(dog => {
        displayDog(dog)
    })
    
}

function loadDog(dog) {
    let dogBar = document.querySelector('#dog-bar')
    let dogSpan = document.createElement('span')
    dogSpan.textContent = dog.name
    dogBar.appendChild(dogSpan) 
    dogSpan.addEventListener('click', () => displayDog(dog))
    // dogSpan.addEventListener('click', displayDog(dog)) will not work unless it's an anonymous function.
    // displayDog will auto fire if it's written like line 26
}

function displayDog(e) {
    let dogInfo = document.querySelector('#dog-info')
    dogInfo.innerHTML = ""
    let img = document.createElement('img') 
    let h2 = document.createElement('h2') 
    let dogBtn = document.createElement('button')
    img.src = e.image 
    h2.textContent = e.name 
    function goodOrBad(e) { 

    if (e.isGoodDog == true) {
        document.createElement('button')
        return dogBtn.innerText = "Good Dog!"
        }
    else { 
        document.createElement('button')
        return dogBtn.innerText = "Bad Dog!"
        }
    }

    dogBtn.innerText = goodOrBad(e) 
    dogInfo.append(img, h2, dogBtn)

    // have to use anonymous function again for line 67 in order to pass object individually
    dogBtn.addEventListener('click', () => patchDog(e))
}





