let focusInput = document.querySelector(".focus");
focusInput.addEventListener("focus", function() {
    console.log(event.target.value);
})