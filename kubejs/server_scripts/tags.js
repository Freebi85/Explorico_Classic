
events.listen('item.tags', function (event) {
	
// Remove


// Silicone
event.get('appliedenergistics2:silicon').add('refinedstorage:silicon')
event.get('forge:silicon').add('appliedenergistics2:silicon')
event.get('refinedstorage:silicon').add('appliedenergistics2:silicon')



// Sawdust
event.get('forge:dusts/wood').add('thermal:sawdust')
event.get('forge:dusts/obsidian').add('create:powdered_obsidian')

// Sapphire Ore
event.get('forge:ores/sapphire').add('iceandfire:sapphire_ore')

// Amethyst Ore
event.get('forge:ores/amythest').add('iceandfire:amythest_ore')

// Charged Quartz Ore and Gems
event.get('forge:ores/certus_quartz').remove('appliedenergistics2:charged_quartz_ore')
event.get('forge:ores/certus_quartz_charged').add('appliedenergistics2:charged_quartz_ore')
event.get('appliedenergistics2:crystals/certus').remove('appliedenergistics2:charged_certus_quartz_crystal')
event.get('appliedenergistics2:crystals/quartz').remove('appliedenergistics2:charged_certus_quartz_crystal')
event.get('forge:gems/certus_quartz').remove('appliedenergistics2:charged_certus_quartz_crystal')
event.get('forge:gems/certus_quartz_charged').add('appliedenergistics2:charged_certus_quartz_crystal')


})





















