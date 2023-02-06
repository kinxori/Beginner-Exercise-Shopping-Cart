
// Data array 

const data = {
    subTotal: 280,
    shirts: [
      {
        quantity: 1,
        id: 3,
        title: "Nike ACG Moc 3.5",
        description: "5/5.5/6",
        price: 115,
        img:
        "ASSETS/shoe 1.png"
      },
      {
        quantity: 2,
        id: 0,
        title: 'Jordan Nu Retro 1 "Fresh Ink"',
        description: "4.5/5/6",
        price: 150,
        img:
        "ASSETS/shoe 2.png"
            },
      {
        quantity: 3,
        id: 1,
        title: "Jordan",
        description: "Unique Size",
        price: 35,
        img:
        "ASSETS/hat 3.png"
      },
      {
        quantity: 4,
        id: 2,
        title: "KD Trey 5 X",
        description: "3/3.5/4.5/5",
        price: 115,
        img:
        "ASSETS/shoe 4.png"
      }
    ]
  };

// Creation of elements, tags, classNames and adding values

const tagSelection = document.querySelector('.products')
for(var i=0; i<data.shirts.length; i++){ //<---- Looping by index value

const producto = tagSelection.appendChild(document.createElement('div'))
  const productoImg = producto.appendChild(document.createElement('img'))
  const productoDetalles = producto.appendChild(document.createElement('p'))
    const productoNom = productoDetalles.appendChild(document.createElement('span'))
    const productoDes = productoDetalles.appendChild(document.createElement('span'))
    const productoBtn= productoDetalles.appendChild(document.createElement('button'))
  const productoPreUni = producto.appendChild(document.createElement('p'))
  const productoCant = producto.appendChild(document.createElement('p'))
    const productoInput = productoCant.appendChild(document.createElement('input'))
  const productoPreTotal = producto.appendChild(document.createElement('p'))
  
// Adding classNames and values
  
  producto.className = ('row')
    productoImg.src = data.shirts[i].img
    productoDetalles.className = ('title')
      productoNom.innerText = data.shirts[i].title
      productoDes.innerText = data.shirts[i].description
      productoBtn.className = ('btnQuitar')
        productoBtn.innerText = 'Remove'
        productoBtn.id = 'remove_'+i
    productoPreUni.className =('precioUnitario')
      productoPreUni.innerText = "$" + data.shirts[i].price + ".00"
    productoInput.className = ('inputValue')
      productoInput.id = data.shirts[i].id;
      productoInput.type = ('number')
      productoInput.value = data.shirts[i].quantity
      productoInput.min = ('0')
    productoPreTotal.className = ('precioTotal')
    productoPreTotal.id = 'total_'+data.shirts[i].id
    productoPreTotal.innerText = "$" + ((data.shirts[i].price)*productoInput.value) + ".00"
  }

// Function to remove elements from the cart by clicking "remove" button

  const removeElements = document.querySelectorAll('.btnQuitar')
  for(var i=0; i < removeElements.length; i++){
    const button = removeElements[i]
    button.addEventListener("click", function(event){
      const buttonClicked = event.target 
      const index = Number(event.target.id.replace('remove_', ''))
      data.shirts.splice(index, 1);
      buttonClicked.parentElement.parentElement.remove();
      updateTotal()
    })
  }

// Updating subtotal price by input value entry

    const inputs = document.querySelectorAll('.inputValue')
      for(var i=0; i < data.shirts.length; i++){
        inputs[i].onclick = (event) => { // Use event | Integrate IDs to button inputs
          console.log("input:", event.target)
          const quantity = Number(event.target.value);
          const shirt = data.shirts.find((shirt)=>shirt.id == event.target.id)  // quick selection by ID
          const price = shirt.price 
          const subtotalClass = document.querySelector('#total_'+shirt.id) // Create and add different element's ID by using data's IDs
          subtotalClass.innerText = "$" + ((price)*quantity) + ".00" 
          updateTotal() // calling total function on every input value update
        }
      }
      // Total function 

      
        function updateTotal() {
          let subtotal = 0;
          for (const shirt of data.shirts) {
            subtotal += shirt.price * shirt.quantity;
          }
          const subTotalSelection = document.querySelector('.subtotal');
          subTotalSelection.innerHTML = `<h2>Total</h2>
          <span id="total">$${subtotal.toFixed(2)} USD</span>`;
        }
      
        updateTotal() // Calling updated total function

        
