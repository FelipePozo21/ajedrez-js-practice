import { PIECES } from './pieces/PIECES.js'

const TABLE = document.querySelectorAll('#table')

window.addEventListener('DOMContentLoaded', loadTable)

function loadTable () {
  for (let i = 0; i < TABLE.length; i++) {
    console.log({ TABLE: TABLE[i].children })
    const childrenDiv = TABLE[i].children

    if (i === 0) {

    }
  }
}
