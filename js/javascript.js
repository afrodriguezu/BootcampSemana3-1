
function getInfo() {
    let charId = document.getElementById("charCapture").value
    
    let url = `https://jsonplaceholder.typicode.com/posts/${charId}`

    console.log(charId)
    console.log(url)

    fetch(url)
        .then(res => res.json() )
        .then( data => {
            
            console.log(data)

                let html = `<div class="card mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                        <div class="card-body">
                                        <h5 class="card-title"> ${data.title} </h5>
                                        <p class="card-text"> ${data.body} </p>
                                        <p class="card-text"><small class="text-body-secondary"> ${data.id} </small></p>
                                        </div>
                                </div>
                            </div>`
                document.getElementById("charContent").innerHTML = html
    })

}