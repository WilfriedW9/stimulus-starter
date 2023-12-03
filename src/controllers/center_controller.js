import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["cell"]
  connect() {
  }

  center () {
  }

}
const cells = document.querySelectorAll(".cell")
// const grid = document.querySelector(".grid")
const body = document.querySelector("body")
console.log(body)


cells.forEach(cell => {
  cell.addEventListener("click", (event)=> {
    const body = document.querySelector("body")
    const currentCell = event.target
    currentCell.classList.toggle("center")
    const otherCells = Array.from(cells).filter(cell => {
      return cell !== currentCell;
    });
    otherCells.forEach(cell => {
      cell.classList.toggle("disappear")
    })
    body.classList.toggle("darken")
  })
});




