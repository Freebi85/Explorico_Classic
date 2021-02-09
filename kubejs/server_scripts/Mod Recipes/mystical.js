onEvent('recipes', event => {

// Prudentium Soil ================================================================================
event.remove({output: 'mysticalagriculture:prudentium_farmland'})


event.shaped('mysticalagriculture:prudentium_farmland', [
    'EEE',
    'EFE',
    'EEE'
  ], {
    'E': 'mysticalagriculture:prudentium_essence',
    'F': 'mysticalagriculture:inferium_farmland'
  })
  
// Tertium Soil ================================================================================
event.remove({output: 'mysticalagriculture:tertium_farmland'})


event.shaped('mysticalagriculture:tertium_farmland', [
    'EEE',
    'EFE',
    'EEE'
  ], {
    'E': 'mysticalagriculture:tertium_essence',
    'F': 'mysticalagriculture:prudentium_farmland'
  })
  
// Imperium Soil ================================================================================
event.remove({output: 'mysticalagriculture:imperium_farmland'})


event.shaped('mysticalagriculture:imperium_farmland', [
    'EEE',
    'EFE',
    'EEE'
  ], {
    'E': 'mysticalagriculture:imperium_essence',
    'F': 'mysticalagriculture:tertium_farmland'
  })
  
  
  
// Supremium Soil ================================================================================
event.remove({output: 'mysticalagriculture:supremium_farmland'})


event.shaped('mysticalagriculture:supremium_farmland', [
    'BEB',
    'EFE',
    'BEB'
  ], {
    'E': 'mysticalagriculture:supremium_essence',
    'B': 'mysticalagriculture:supremium_block',
    'F': 'mysticalagriculture:imperium_farmland'
  })





// Insanium Soil ================================================================================
event.remove({output: 'mysticalagradditions:insanium_farmland'})


event.shaped('mysticalagradditions:insanium_farmland', [
    'BEB',
    'EFE',
    'BEB'
  ], {
    'E': 'mysticalagradditions:insanium_essence',
    'B': 'mysticalagradditions:insanium_block',
    'F': 'mysticalagriculture:supremium_farmland'
  })

})



})