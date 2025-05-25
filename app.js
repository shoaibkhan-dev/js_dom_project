const istatus = document.querySelector("h4");
const addFriend = document.querySelector("#add");
const removeFriend = document.querySelector("#remove");

addFriend.addEventListener("click", function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
});

removeFriend.addEventListener("click", function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
})

// const istatus = document.querySelector("h4");
// const addFriend = document.querySelector("#add");
// const removeFriend = document.querySelector("#remove");

// addFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Friends"
//     istatus.style.color = "green"
// });

// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
// })

