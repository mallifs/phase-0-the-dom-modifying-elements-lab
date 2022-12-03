let main = document.getElementById("main");
main.remove()

const newHeader = document.createElement("h1");
newHeader.textContent = "YOUR-NAME is the champion"
newHeader.setAttribute("id","victory")
document.body.append(newHeader)
 
