function uno (dos) {
    console.log("uno")
    dos()
}

function dos () {
    console.log("dos")
}



setTimeout(()=>dos(), 5000)