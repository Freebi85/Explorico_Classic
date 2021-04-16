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



// Fluorite Essence ================================================================================
event.shaped(Item.of('mekanism:fluorite_gem', 3), [
    'EEE',
    'E E',
    'EEE'
  ], {
    'E': 'mysticalagriculture:fluorite_essence'
  })



// Azure Silver ================================================================================
event.shaped(Item.of('silentgear:azure_silver_ingot', 2), [
    'EEE',
    'E E',
    'EEE'
  ], {
    'E': 'mysticalagriculture:azure_silver_essence'
  })



// Azure Eelctrum ================================================================================
event.shaped(Item.of('silentgear:azure_electrum_ingot', 2), [
    'EEE',
    'E E',
    'EEE'
  ], {
    'E': 'mysticalagriculture:azure_electrum_essence'
  })



// Crimson Steel ================================================================================
event.shaped(Item.of('silentgear:crimson_steel_ingot', 2), [
    'EEE',
    'E E',
    'EEE'
  ], {
    'E': 'mysticalagriculture:crimson_steel_essence'
  })

// Crimson Iron ================================================================================
event.shaped(Item.of('silentgear:crimson_iron_ingot', 2), [
    'EEE',
    'E E',
    'EEE'
  ], {
    'E': 'mysticalagriculture:crimson_iron_essence'
  })

// Sulfur ================================================================================
event.shaped(Item.of('thermal:sulfur', 3), [
    'EEE',
    'E E',
    'EEE'
  ], {
    'E': 'mysticalagriculture:sulfur_essence'
  })












})