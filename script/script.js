function onClick(element) {
    let sit = document.getElementById('seat-Number').innerText
    let sitValue = parseFloat(sit)
    let list = element.classList.value.split(' ')
    const sitLeft = document.getElementById('sit-left')
    if (list.includes('btnSelect')) {
        console.log('you already selected the btn ')
    } else {
        if (sitValue < 4) {
            element.classList.add('btnSelect')
            sitValue = sitValue + 1
            document.getElementById('seat-Number').innerText = sitValue
            sitLeft.innerText = 40 - sitValue
            addTicketToTable(element.id)
            updateTotalPrice()
            enableCouponApplyButton()
            document.getElementById('next-page-button').classList.remove('btn-disabled')
        } else {
            alert("Limit excceeded, Can't select more then four tickets at once . ")
        }
    }
}
