// creating left side
let main = document.createElement('div')
main.style.width = '80%'
main.style.height = '500px'
main.style.display = 'flex'
main.style.justifyContent = 'space-between'
main.style.margin = '50px auto'
let main_left = document.createElement('div')
main_left.style.width = '43%'
main_left.style.height = '100%'
for (let i = 0; i < 3; i++) {
    let inp = document.createElement('input')
    let lab = document.createElement('label')
    if (i == 0) {
        inp.type = 'text'
        inp.style.width = '100%'
        inp.style.height = '10%'
        inp.style.padding = '5px 15px'
        inp.style.marginBottom = '25px'
        inp.id = `inp${i+1}`
        inp.placeholder = 'Enter login'
        lab.htmlFor = `inp${i+1}`
        lab.style.fontSize = '25px'
        lab.innerText = 'Login'
    }
    if (i == 1) {
        inp.type = 'password'
        inp.style.width = '100%'
        inp.style.height = '10%'
        inp.style.padding = '5px 15px'
        inp.style.marginBottom = '25px'
        inp.id = `inp${i+1}`
        inp.placeholder = 'Enter password'
        lab.htmlFor = `inp${i+1}`
        lab.style.fontSize = '25px'
        lab.innerText = 'Password'
    }
    if (i == 2) {
        inp.type = 'email'
        inp.style.width = '100%'
        inp.style.height = '10%'
        inp.style.padding = '5px 15px'
        inp.style.marginBottom = '25px'
        inp.id = `inp${i+1}`
        inp.placeholder = 'Enter email'
        lab.htmlFor = `inp${i+1}`
        lab.style.fontSize = '25px'
        lab.innerText = 'Email address'
    }
    main_left.appendChild(lab)
    main_left.appendChild(inp)
}
let btn = document.createElement('input')
btn.type = 'button'
btn.style.width = '20%'
btn.style.height = '8%'
btn.style.display = 'flex'
btn.style.justifyContent = 'center'
btn.style.alignItems = 'center'
btn.style.border = '3px solid lightgreen'
btn.style.color = 'lightgreen'
btn.style.fontSize = '25px'
btn.value = 'Add'
let btn_2 = document.createElement('input')
btn_2.type = 'button'
btn_2.style.width = '20%'
btn_2.style.height = '8%'
btn_2.style.display = 'none'
btn_2.style.justifyContent = 'center'
btn_2.style.alignItems = 'center'
btn_2.style.border = '3px solid lightgreen'
btn_2.style.color = 'lightgreen'
btn_2.style.fontSize = '25px'
btn_2.value = 'Edit'
main_left.appendChild(btn)
main_left.appendChild(btn_2)
main.appendChild(main_left)
    // creating right side
let main_right = document.createElement('div')
main_right.style.width = '48%'
main_right.style.height = '100%'
let header_block = document.createElement('div')
header_block.style.width = '100%'
header_block.style.height = '10%'
header_block.style.display = 'flex'
header_block.style.borderBottom = '1px solid black'
header_block.style.borderTop = '1px solid black'
for (let i = 0; i < 6; i++) {
    let header_conponent = document.createElement('div')
    header_conponent.style.height = '100%'
    header_conponent.style.display = 'flex'
    header_conponent.style.justifyContent = 'center'
    header_conponent.style.alignItems = 'center'
    header_conponent.style.fontSize = '22px'
    header_conponent.style.fontWeight = '600'
    if (i == 0) {
        header_conponent.style.width = '10%'
        header_conponent.innerText = '№:'
    }
    if (i == 1) {
        header_conponent.style.width = '25%'
        header_conponent.innerText = 'Login:'
    }
    if (i == 2) {
        header_conponent.style.width = '25%'
        header_conponent.innerText = 'Password:'
    }
    if (i == 3) {
        header_conponent.style.width = '25%'
        header_conponent.innerText = 'Email:'
    }
    if (i == 4) {
        header_conponent.style.width = '20%'
        header_conponent.innerText = 'Edit:'
    }
    if (i == 5) {
        header_conponent.style.width = '20%'
        header_conponent.innerText = 'Delete:'
    }
    header_block.appendChild(header_conponent)
}
let infBlock = document.createElement('div')
infBlock.style.width = '100%'
infBlock.style.height = '90%'
main_right.appendChild(header_block)



// func for table
let arr = []
let index = 0;
let row = 0
let obj
let btn_add = main_left.children[6]
let btn_edit = main_left.children[7]

function adduser() {
    obj = {
        log: main_left.children[1].value,
        pass: main_left.children[3].value,
        eAdrr: main_left.children[5].value
    }
    arr.push(obj)
    main_left.children[1].value = ''
    main_left.children[3].value = ''
    main_left.children[5].value = ''
    render(arr)

}

function deleteUser() {
    arr.splice(index, 1)
    render(arr)
}

function editUser() {
    obj = {
        log: main_left.children[1].value,
        pass: main_left.children[3].value,
        eAdrr: main_left.children[5].value
    }
    arr[index] = obj
    render(arr)
    btn_add.style.display = 'flex'
    btn_edit.style.display = 'none'
    main_left.children[1].value = ''
    main_left.children[3].value = ''
    main_left.children[5].value = ''
}


function render(arr) {
    while (infBlock.firstChild) {
        infBlock.removeChild(infBlock.lastChild);
    }
    for (let i = 0; i < arr.length; i++) {
        let infBlock_inside = document.createElement('div')
        infBlock_inside.style.width = '100%'
        infBlock_inside.style.height = '10%'
        infBlock_inside.style.display = 'flex'
        for (let j = 0; j < 6; j++) {
            let block_inf = document.createElement('div')
            block_inf.style.height = '100%'
            block_inf.style.display = 'flex'
            block_inf.style.justifyContent = 'center'
            block_inf.style.alignItems = 'center'
            block_inf.style.fontSize = '18px'
            if (j == 0) {
                block_inf.style.width = '10%'
                block_inf.innerText = `${i+1}`
            }
            if (j == 1) {
                block_inf.style.width = '25%'
                block_inf.innerText = arr[i].log
            }
            if (j == 2) {
                block_inf.style.width = '25%'
                block_inf.innerText = arr[i].pass
            }
            if (j == 3) {
                block_inf.style.width = '25%'
                block_inf.innerText = arr[i].eAdrr
            }
            if (j == 4) {
                block_inf.style.width = '20%'
                let edit_user_btn = document.createElement('div')
                edit_user_btn.style.width = '70%'
                edit_user_btn.style.height = '70%'
                edit_user_btn.style.display = 'flex'
                edit_user_btn.style.justifyContent = 'center'
                edit_user_btn.style.alignItems = 'center'
                edit_user_btn.style.backgroundColor = 'orange'
                edit_user_btn.style.color = 'white'
                edit_user_btn.innerText = 'Edit'
                edit_user_btn.addEventListener('click', function() {
                    index = i;
                    btn_add.style.display = 'none'
                    btn_edit.style.display = 'flex'
                    main_left.children[1].value = arr[i].log;
                    main_left.children[3].value = arr[i].pass;
                    main_left.children[5].value = arr[i].eAdrr;
                })
                block_inf.appendChild(edit_user_btn)
            }
            if (j == 5) {
                block_inf.style.width = '20%'
                let delete_user_btn = document.createElement('div')
                delete_user_btn.style.width = '70%'
                delete_user_btn.style.height = '70%'
                delete_user_btn.style.display = 'flex'
                delete_user_btn.style.justifyContent = 'center'
                delete_user_btn.style.alignItems = 'center'
                delete_user_btn.style.backgroundColor = 'red'
                delete_user_btn.style.color = 'white'
                delete_user_btn.innerText = 'Delete'
                delete_user_btn.addEventListener('click', function() {
                    index = i
                })
                delete_user_btn.addEventListener('click', deleteUser)
                block_inf.appendChild(delete_user_btn)
            }
            infBlock_inside.appendChild(block_inf)
        }
        infBlock.appendChild(infBlock_inside)
    }
}
btn_add.addEventListener('click', adduser)
btn_edit.addEventListener('click', editUser)
main_right.appendChild(infBlock)
main.appendChild(main_right)
document.body.appendChild(main)