console.log('sfd')
// let selectedButtons = document.getElementsByClassName('btnSelect').length

function onClick(element) {
    let sit = document.getElementById('seat-Number').innerText
    let sitValue = parseFloat(sit)
    let list = element.classList.value.split(' ')
    const sitLeft = document.getElementById('sit-left')
    // let leftSit = parseFloat(left.innerText)
    if(list.includes('btnSelect')){
        console.log('you already selected the btn ')
    }
    else{
        if(sitValue < 4 ){
            element.classList.add('btnSelect')
            sitValue = sitValue + 1 
            document.getElementById('seat-Number').innerText = sitValue
            console.log(sit , list)
            sitLeft.innerText = 40 - sitValue
        }
        else{
            console.log('limit excceeded ')
        }

    }
    
    
}
