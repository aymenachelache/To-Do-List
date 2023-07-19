
// Add Task

const btnAdd = document.querySelector("button");
const form = document.querySelector("form");
const container = document.querySelector(".container");


form.addEventListener("submit", (eo) => {
    eo.preventDefault();
    const taskName = document.querySelector("input").value;
    if (taskName != "") {
        const task = 
        `
        <div class="task">
        <span class="icon-star icon"></span>
        <p>${taskName}</p>
        <div>
            <span class="icon-trash icon"></span>
            <span class="icon-heart icon"></span>
            <span class="icon-angry icon"></span>
        </div>
        </div>
        `
        container.innerHTML += task;
        document.querySelector("input").value = '';



        
    }


});

// Remove Task

container.addEventListener("click", (eo) => {
    switch (eo.target.className) {
    case ("icon-trash icon"):
        eo.target.parentElement.parentElement.remove();
        break;
    case ("icon-angry icon"):
        eo.target.classList.add("dn");
        eo.target.parentElement.children[1].style.display = "inline";
        eo.target.parentElement.parentElement.getElementsByTagName("p")[0].classList.add("finish");   
        break;
    case ("icon-heart icon"):
        eo.target.style.display = "none";
        eo.target.parentElement.getElementsByClassName("icon-angry icon")[0].classList.remove("dn");
        eo.target.parentElement.parentElement.getElementsByTagName("p")[0].classList.remove("finish");   
        break;
    case ("icon-star icon"):
        eo.target.classList.add("orange"); 
        const important = eo.target.parentElement;
        eo.target.parentElement.remove();
        container.prepend(important);
        break;
    case ("icon-star icon orange"):
        eo.target.classList.remove("orange");
        break;
    default:
        break;
    }
    });


// Change Heart