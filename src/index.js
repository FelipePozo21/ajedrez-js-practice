import { PIECES } from './pieces/PIECES.js'
import { ORDER_PIECES } from './pieces/ORDER_PIECES.js'

const TABLE = document.querySelectorAll('#table')
const FILA = document.querySelectorAll('.fila')

const TABLE_LENGHT = TABLE[0].children.length

window.addEventListener('DOMContentLoaded', loadTable)

function loadTable () {
  for (let i = 0; i < TABLE_LENGHT; i++) {
    const fila = FILA[i]
    if (i === 0) {
      ORDER_PIECES.up.pieces.forEach((piece, index) => {
        const span = fila.children[index]
        const iPiece = document.createElement('i')
        iPiece.style.backgroundImage = `url(${PIECES[piece].black})`
        span.appendChild(iPiece)
      })
    }
    if (i === 1) {
      ORDER_PIECES.up.pieces.forEach((_, index) => {
        const span = fila.children[index]
        const iPiece = document.createElement('i')
        iPiece.style.backgroundImage = `url(${PIECES.pawn.black})`
        span.appendChild(iPiece)
      })
    }
    if (i === 6) {
      ORDER_PIECES.down.pieces.forEach((_, index) => {
        const span = fila.children[index]
        const iPiece = document.createElement('i')
        iPiece.style.backgroundImage = `url(${PIECES.pawn.white})`
        span.appendChild(iPiece)
      })
    }
    if (i === 7) {
      ORDER_PIECES.down.pieces.forEach((piece, index) => {
        const span = fila.children[index]
        const iPiece = document.createElement('i')
        iPiece.style.backgroundImage = `url(${PIECES[piece].white})`
        span.appendChild(iPiece)
      })
    }
  }
}
