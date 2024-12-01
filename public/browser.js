const { response } = require("../app");

console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex allign-items-center justify-content-between">
                    <span class="item-text">${item.reja}</span>
                    <div>
                        <button data-id="${item._id}" 
                            class="edit-me btn btn-secondary btn-sm mr-1">
                            O'zgartirish
                        </button>
                        <button data-id="${item._id}" 
                            class="delete-me btn btn-danger btn-sm">
                            O'chirish
                        </button>
                    </div>
                </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            document
                .getElementById("item-list")
                .insertAdjacentHTML("beforeend", itemTemplate(response.data));
            createField.value = "";
            createField.focus();
        })
        .catch((err) => {
            console.log("Iltimos yana qayta urinib ko'ring!");
        });
});

document.addEventListener("click", function(e) {
    // delete oper
    console.log(e.target);
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Siz rostdan ham o'chirmoqchimisiz")) { // Step-2 o'chirishni tasdiqlash
          axios
            .post("/delete-item", { id: e.target.getAttribute("data-id") }) // Step-3. ID serverga yuboradi FrontENd => BackEnd
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove(); // STep-5 FrontEnd dan ma'lumotni olib tashlash
            })
            .catch((err) => {});
        }
    }


    // edit oper
    if(e.target.classList.contains("edit-me")) {
        let userInput = prompt(
            "O'zgartirish kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
        );
        if (userInput) {
            axios.post("/edit-item", {
                id: e.target.getAttribute("data-id"),
                new_input: userInput,
            })
            .then (response => {
                console.log(response.data);
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            })
            .catch(err => {
            console.log("Iltimos yana qayta urinib ko'ring!");
            });
        }
    }
});

document.getElementById("clean-all").addEventListener("click", function() {
    axios.post("/delete-all", { delete_all: true }).then(response => {
        console.log(response.data);
        document.location.reload();
    })
});

