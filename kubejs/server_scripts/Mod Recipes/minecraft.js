onEvent('recipes', event => {

// ======================================================================= Removals =======================================================================




// ======================================================================= New Recipes ====================================================================

// JEI helper -> recipes for fireworks -.- ========================================
const gunnys = ['minecraft:gunpowder', 'thermal:sulfur_dust']

event.shapeless(Item.of('3x minecraft:firework_rocket', {Fireworks:{Flight:1}}), ['#forge:paper', gunnys])
event.shapeless(Item.of('3x minecraft:firework_rocket', {Fireworks:{Flight:2}}), ['#forge:paper', gunnys, gunnys])
event.shapeless(Item.of('3x minecraft:firework_rocket', {Fireworks:{Flight:3}}), ['#forge:paper', gunnys, gunnys, gunnys])


// Trapped Chest ===============================================================
event.shapeless('minecraft:trapped_chest', ['minecraft:chest', 'minecraft:tripwire_hook'])








})
