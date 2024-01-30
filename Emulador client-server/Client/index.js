function getData(){
    const url = "http://127.0.0.1:8080/jedi"
    fetch(url)
    .then(res => res.text())
    .then(data => console.log(data))
}

async function postData(){
    const jedi = {
        name: "Obi-Wan",
        surname: "Kenobi",
        lightsaber: 1,
        colorLightsaber: "blue" 
    }
    const url = "http://127.0.0.1:8080/jedi"
    const conf = {
        method: "POST",
        body: JSON.stringify(jedi),
        headers: {
            'Content-Type': "application/json"
        }

    }
  
    const res = await fetch(url, conf)
    const data = await res.text()
    console.log(data)
}