window.addEventListener("load", () => {
    document.getElementById("rabat").addEventListener("click", onClick);
});

const onClick = () => {
    document.getElementById("rabat").style.display = "none";
    document.getElementById("samal").style.display = "block";
}