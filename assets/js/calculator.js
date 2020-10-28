// Listen for any input updates
let container = document.getElementById('tip-container')

container.addEventListener('input', update)

// Track input values & update
function update () {
  let bill       = Number(document.getElementById('yourBill').value)
  let tipPercent = document.getElementById('tipInput').value
  let split      = document.getElementById('splitInput').value

  let tipValue = bill * (tipPercent / 100)
  let tipEach = tipValue / split
  let newBillEach = (bill + tipValue) / split

  // Calculate totals based on percentage
  document.getElementById('tipPercent').innerHTML = tipPercent + '%'
  document.getElementById('tipValue').innerHTML = tipValue
  document.getElementById('totalWithTip').innerHTML = bill + tipValue

  // Calculate individual totals based on split
  document.getElementById('splitValue').innerHTML = split
  document.getElementById('billEach').innerHTML = newBillEach
  document.getElementById('tipEach').innerHTML = tipEach
}
