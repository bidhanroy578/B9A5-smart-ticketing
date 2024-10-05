function addTicketToTable() {
    let item = document.getElementById('no-ticket-warning')
    let tbody = document.getElementById('ticket-tbody')
    item.classList.add('hidden')
    let tr = document.createElement('tr')
    tr.innerHTML = ` <th>C2</th>
<td>Economy</td>
<td>550</td> `
    tbody.appendChild(tr)

}

function updateTotalPrice() {

    let ticket = parseFloat(document.getElementById('seat-Number').innerText)
    let price = 550 * ticket

    document.getElementById('total-price').innerText = price
    document.getElementById('grand-total').innerText = price

}
function enableCouponApplyButton() {
    let ticket = parseFloat(document.getElementById('seat-Number').innerText)
    if (ticket > 1) {
        document.getElementById('coupon-apply-button').classList.remove('btn-disabled')
    }
    // else{
    //     document.getElementById('coupon-apply-button').classList.add('btn-disabled')
    // }
}
function disableCouponApplyButton() {
    let ticket = parseFloat(document.getElementById('seat-Number').innerText)
    if (ticket > 1) {
        document.getElementById('coupon-apply-button').classList.add('btn-disabled')
    }
}
function grandTotalPriceAfterAppliedCoupon(){
    let total = parseFloat(document.getElementById('total-price').innerText)
    let discounted = parseFloat(document.getElementById('discount-price').innerText)
    let finalPrice = total - discounted
    document.getElementById('grand-total').innerText = finalPrice

}