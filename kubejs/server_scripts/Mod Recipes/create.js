onEvent('recipes', event => {


// ======================================================================= Removals =======================================================================
event.remove({id: 'create:pressing/copper_ingot'})
event.remove({id: 'create:pressing/iron_ingot'})
event.remove({id: 'create:pressing/gold_ingot'})


// ======================================================================= New Recipes =====================================================================


// Solidification Functions ====================================================

function press(input1, output) {
event.custom({
type: "create:pressing",
ingredients: [{tag: input1}],
results: [{item: output}]
})
}


press('forge:ingots/copper', 'thermal:copper_plate')
press('forge:ingots/iron', 'thermal:iron_plate')
press('forge:ingots/gold', 'thermal:gold_plate')





})
