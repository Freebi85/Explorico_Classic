onEvent('recipes', event => {


// ======================================================================= Removals =======================================================================


// ======================================================================= New Recipes =====================================================================


// Solidification Functions ====================================================

function solidifier_3(input1, input2, input3, liquid, lamount, output, outamount) {
event.custom({
type: 'cyclic:solidifier',
inputTop: {item: input1},
inputMiddle: {item: input2},
inputBottom: {item: input3},
mix: {fluid: liquid, count: lamount},
result: {item: output, count: outamount}
})
}

function solidifier_1(input1, liquid, lamount, output, outamount) {
event.custom({
type: 'cyclic:solidifier',
inputTop: {item: input1},
mix: {fluid: liquid, count: lamount},
result: {item: output, count: outamount}
})
}


solidifier_3('minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'xreliquary:xp_juice_still', 750, 'minecraft:experience_bottle', 3)
solidifier_3('minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'cofh_core:experience', 750, 'minecraft:experience_bottle', 3)
solidifier_3('minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'industrialforegoing:essence', 750, 'minecraft:experience_bottle', 3)
solidifier_3('minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'pneumaticcraft:memory_essence', 750, 'minecraft:experience_bottle', 3)
solidifier_3('minecraft:sugar', 'minecraft:sugar', 'minecraft:sugar', 'xreliquary:xp_juice_still', 1000, 'cyclic:experience_food', 1)
solidifier_3('minecraft:sugar', 'minecraft:sugar', 'minecraft:sugar', 'cofh_core:experience', 1000, 'cyclic:experience_food', 1)
solidifier_3('minecraft:sugar', 'minecraft:sugar', 'minecraft:sugar', 'industrialforegoing:essence', 1000, 'cyclic:experience_food', 1)
solidifier_3('minecraft:sugar', 'minecraft:sugar', 'minecraft:sugar', 'pneumaticcraft:memory_essence', 1000, 'cyclic:experience_food', 1)

solidifier_1('minecraft:glass_bottle', 'xreliquary:xp_juice_still', 250, 'minecraft:experience_bottle', 1)
solidifier_1('minecraft:glass_bottle', 'cofh_core:experience', 250, 'minecraft:experience_bottle', 1)
solidifier_1('minecraft:glass_bottle', 'industrialforegoing:essence', 250, 'minecraft:experience_bottle', 1)
solidifier_1('minecraft:glass_bottle', 'pneumaticcraft:memory_essence', 250, 'minecraft:experience_bottle', 1)







})
