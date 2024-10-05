// offer button function 
function checkCouponCode() {
    // let discount = parseFloat(document.getElementById('discount').innerText)
    let enteredCode = document.getElementById('user-coupon-code').value
    const coupon1 = 'NEW15'
    const coupon2 = 'couple20'
    let discountPrice = 0
    let totalPrice = parseFloat(document.getElementById('total-price').innerText)


    if (enteredCode === coupon1) {
        discountPrice = Math.round(totalPrice * 0.15)
        document.getElementById('discount-price').innerText = discountPrice
        document.getElementById('discount').classList.remove('hidden')
        disableCouponApplyButton()
        grandTotalPriceAfterAppliedCoupon()
    }
    else if (enteredCode === coupon2) {
        discountPrice = Math.round(totalPrice * 0.2)
        document.getElementById('discount-price').innerText = discountPrice
        document.getElementById('discount').classList.remove('hidden')
        disableCouponApplyButton()
        grandTotalPriceAfterAppliedCoupon()
    }
    else{
        alert('invalid coupon')
    }
}