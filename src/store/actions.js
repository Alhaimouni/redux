
function nmAction(payload) {
  return {
    type: 'chName',
    payload: payload
  }
}

function incAction(payload) {
  return {
    type: 'inc',
    payload: payload
  }
}

function decAction(payload) {
  return {
    type: 'dec',
    payload: payload
  }
}


export { nmAction, incAction, decAction };