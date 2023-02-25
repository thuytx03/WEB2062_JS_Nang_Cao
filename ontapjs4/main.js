import getData from "./staff.js";
const tbody=document.querySelector("tbody")
getData()
.then((response)=>response.json())
.then((data)=>{
    showStaff(data);
    const btnRemoves=document.querySelectorAll(".btn-remove")
    for (let btn of btnRemoves) {
        const id=btn.dataset.id;
        btn.addEventListener("click",()=>{
            return deleteStaff(id)
        })
    }
    const btnUpdates=document.querySelectorAll(".btn-update")
    for (let btn of btnUpdates) {
        const id=btn.dataset.id;
        btn.addEventListener("click",()=>{
            return updateStaff(id)
        })
    }
})

const showStaff=(data)=>{
    tbody.innerHTML=data.map((staff,index)=>{
        return `<tr>
        <td scope="row">${index+1}</td>
        <td>${staff.name}</td>
        <td><img src="${staff.image}" width="50"></td>
        <td>
            <button data-id="${staff.id}" class="btn btn-danger btn-remove">Delete</button>
            <button data-id="${staff.id}" class="btn btn-primary btn-update">Update</button>
        </td>
    </tr>`;
    }).join("")
}

const deleteStaff=(id)=>{
    fetch(`http://localhost:3000/staff/${id}`,{
        method: 'DELETE'
    })
}

const updateStaff=(id)=>{
    fetch(`http://localhost:3000/staff/${id}`)
    .then((response)=>response.json())
    .then((data)=>{
        document.querySelector("body").innerHTML=/*html*/
        `<form action="">
        <div class="form-group">
            <label for="my-input">Name</label>
            <input id="name" class="form-control" type="text" value="${data.name}" name="">
        </div>
        <div class="form-group">
            <label for="my-input">Image</label>
            <input id="image" class="form-control" onchange="previewFile()" type="file" name="">
            <img src="${data.image}"  height="100"  alt="Image Preview">
        </div>
        <button class="btn btn-primary" id="btn-update">Update</button>
    </form>`
        document.querySelector("#btn-update").addEventListener("click", function(){
            const newStaff={
                "id":id,
                "name":document.querySelector("#name").value,
                "image":document.querySelector("img").getAttribute("src")
            }
            fetch(`http://localhost:3000/staff/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newStaff)
            })
        })
    })
}