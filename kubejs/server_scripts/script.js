// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true


events.listen('recipes', event => {
	
// Cured Rubber ================================================================================
event.remove({output: 'thermal:cured_rubber'})
event.remove({id: 'mysticalagriculture:essence/common/rubber'})

event.shaped(Item.of('thermal:cured_rubber', 5), [
    'SAS',
    'ASA',
    'SAS'
  ], {
    'A': '#forge:gems/coal',
    'S': '#forge:rubber'
  })
  
 event.shaped(Item.of('industrialforegoing:dryrubber', 4), [
    'SSS',
    'S S',
    'SSS'
  ], {
    'S': 'mysticalagriculture:rubber_essence'
  }) 
  
  
  
  
  
})

