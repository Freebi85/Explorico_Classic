onEvent('recipes', event => {

var cloche = event.recipes.immersiveengineering.cloche

function inferium(amount, time, soil) {
    cloche({
      results: [{
        item: 'mysticalagriculture:inferium_essence',
        count: amount
      }],
      input: {
        item: 'mysticalagriculture:inferium_seeds'
      },
      soil: {
        item: soil
      },
      time: time,
      render: {
        type: 'crop',
        block: 'mysticalagriculture:inferium_crop'
      }
    })
  }


// Inferium output based on soil ===================================
inferium(1, 1000, 'minecraft:dirt')
inferium(2, 900, 'mysticalagriculture:inferium_farmland')
inferium(3, 800, 'mysticalagriculture:prudentium_farmland')
inferium(4, 700, 'mysticalagriculture:tertium_farmland')
inferium(5, 600, 'mysticalagriculture:imperium_farmland')
inferium(6, 500, 'mysticalagriculture:supremium_farmland')
inferium(7, 400, 'mysticalagradditions:insanium_farmland')  
  
  


  

})

