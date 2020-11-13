console.log('linked');
let textBox = document.getElementById('textBox');
let buttons = document.getElementsByTagName('button');
let exp = '';

console.log(buttons);

for (button of buttons) {

    button.addEventListener('click', function (e) {
        // console.log(e.target);

        if (e.target.innerText == 'X') {
            exp = exp + '*';
            textBox.value = exp;
        }

        else if (e.target.innerText == '=') {

            try {
                exp = eval(exp);
                // console.log(exp);
                textBox.value = exp;
                exp = '';
            }
            catch{
                alert('This is invalid input');
            }
        }

        else if (e.target.innerText == 'C') {
            exp = '';
            textBox.value = exp;
        }
        else {
            exp = exp + e.target.innerText;
            textBox.value = exp;
        }
    })
}