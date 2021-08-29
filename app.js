const tbody=document.querySelector('#table-body');
let x=1;

fetch('https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6')
.then(res=>{
    return res.json()
})
.then(data=>{
    let clients=data.clients;
    clients.forEach(i => {
        let list_data=`
        <tr>
        <td>${x}</td>
        <td>${i.name}</td>
        <td>${i.company}</td>
        </tr>
        `
        tbody.innerHTML+=list_data;
        x++
    });
}

).catch(err=>{
    console.log('Error '+ err);
})