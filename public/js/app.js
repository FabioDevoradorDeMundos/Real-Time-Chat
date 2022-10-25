// const msg = document.querySelector('#mensagem')
// const btn = document.querySelector('#btn')
// const mensagens = document.querySelector('.mensagens')

// btn.addEventListener('click',(e) => {
//     let txt = {
//         mensagem:msg.value
        
//     }
//     const div = document.createElement('div')

//     const span = document.createElement('span')
//     span.innerHTML = txt.mensagem
//     div.appendChild(span)
//     mensagens.appendChild(div)

//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', '/');
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.send(JSON.stringify(txt))
//         if(xhr.responseText == ''){
//             mensagem.value = ''

//         } else{
//             alert('Algo deu errado')
//         }

// } )