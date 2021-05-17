
events.listen('item.tags', function (event) {

// Removals
event.get('appliedenergistics2:dusts/quartz').remove('thermal:quartz_dust')
event.get('appliedenergistics2:dusts/quartz').remove('mekanism:dust_quartz')
event.get('appliedenergistics2:dusts/quartz').remove('appliedenergistics2:nether_quartz_dust')

// Silicone
event.get('appliedenergistics2:silicon').add('refinedstorage:silicon')
event.get('forge:silicon').add('appliedenergistics2:silicon')
event.get('refinedstorage:silicon').add('appliedenergistics2:silicon')



// Sawdust
event.get('forge:dusts/wood').add('thermal:sawdust')

// Enderpearldust
event.get('forge:dusts/ender_pearl').add('appliedenergistics2:ender_dust')

// Rubber
event.get('forge:rubber').add('industrialforegoing:dryrubber')
event.get('forge:rubber').add('thermal:rubber')

// Black Dye
event.get('forge:dyes/black').add('minecraft:ink_sac')

// Sapphire Ore
event.get('forge:ores/sapphire').add('iceandfire:sapphire_ore')

// Amethyst Ore
event.get('forge:ores/amythest').add('iceandfire:amythest_ore')

// Yellorite Ore
event.get('forge:ores/uranium').add('bigreactors:yellorite_ore')


// Charged Quartz Ore and Gems
event.get('forge:ores/certus_quartz').remove('appliedenergistics2:charged_quartz_ore')
event.get('forge:ores/certus_quartz_charged').add('appliedenergistics2:charged_quartz_ore')
event.get('appliedenergistics2:crystals/certus').remove('appliedenergistics2:charged_certus_quartz_crystal')
event.get('appliedenergistics2:crystals/quartz').remove('appliedenergistics2:charged_certus_quartz_crystal')
event.get('forge:gems/certus_quartz').remove('appliedenergistics2:charged_certus_quartz_crystal')
event.get('forge:gems/certus_quartz_charged').add('appliedenergistics2:charged_certus_quartz_crystal')


})
