let toastBox = document.getElementById('toastBox');

let successMsg = '<i class="fa-solid fa-square-check"></i> Successfully submitted!!'
let errorMsg = '<i class="fa-solid fa-square-xmark"></i> Please fix the error...'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invaild input, check again...'

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast)

    if (msg.includes('error')) {
        toast.classList.add('error')
    }
    if (msg.includes('Invaild')) {
        toast.classList.add('invaild')
    }
    setTimeout(() => {
        toast.remove();
    }, 1000)
}