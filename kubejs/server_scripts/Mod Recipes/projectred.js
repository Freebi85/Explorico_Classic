onEvent('recipes', event => {

// ======================================================================= Removals =======================================================================

// misc
event.remove({output: 'projectred-core:silicon'})
event.remove({output: 'projectred-exploration:peridot_block_wall'})
event.remove({output: 'projectred-exploration:ruby_block_wall'})
event.remove({output: 'projectred-exploration:sapphire_block_wall'})
event.remove({output: 'projectred-exploration:copper_block_wall'})
event.remove({output: 'projectred-exploration:tin_block_wall'})
event.remove({output: 'projectred-exploration:silver_block_wall'})

// ores, metals
event.remove({output: 'projectred-exploration:sapphire_block'})
event.remove({output: 'projectred-exploration:copper_block'})
event.remove({output: 'projectred-exploration:tin_block'})
event.remove({output: 'projectred-exploration:silver_block'})
event.remove({output: 'projectred-core:copper_ingot'})
event.remove({output: 'projectred-core:tin_ingot'})
event.remove({output: 'projectred-core:silver_ingot'})
event.remove({output: 'projectred-core:ruby'})
event.remove({output: 'projectred-core:sapphire'})
event.remove({output: 'projectred-core:peridot'})
event.remove({output: 'projectred-exploration:peridot_ore'})
event.remove({output: 'projectred-exploration:copper_ore'})
event.remove({output: 'projectred-exploration:tin_ore'})
event.remove({output: 'projectred-exploration:silver_ore'})
event.remove({output: 'projectred-exploration:ruby_ore'})
event.remove({output: 'projectred-exploration:sapphire_ore'})
event.remove({output: 'projectred-exploration:peridot_block'})
event.remove({output: 'projectred-exploration:ruby_block'})
event.remove({output: 'projectred-core:red_iron_comp'})
event.remove({output: 'projectred-core:red_ingot'})


// ======================================================================= New Recipes =======================================================================

// Replace red alloy with redstone alloy =======================================
event.replaceInput({}, '#forge:ingots/red_alloy', 'silents_mechanisms:redstone_alloy_ingot')
event.replaceInput({}, 'projectred-core:red_ingot', 'silents_mechanisms:redstone_alloy_ingot')

// Replace silicon with AE2 silicon ============================================
event.replaceInput({}, 'projectred-core:silicon', 'appliedenergistics2:silicon')
event.replaceOutput({}, 'projectred-core:silicon', 'appliedenergistics2:silicon')

// Sawing all that Silicon =====================================================
event.recipes.thermal.sawmill([item.of('appliedenergistics2:silicon', 16), Item.of('industrialforegoing:dryrubber').withChance(0.10)], 'projectred-core:boule')
event.recipes.mekanism.sawing(item.of('appliedenergistics2:silicon', 16), 'projectred-core:boule', Item.of('industrialforegoing:dryrubber', 1))
event.custom({type: 'create:cutting', ingredients: [{item: 'projectred-core:boule'}], results: [{item: 'appliedenergistics2:silicon', count: 16}], processingTime: 50})
event.recipes.immersiveengineering.sawmill(item.of('appliedenergistics2:silicon', 16), 'projectred-core:boule')



// Metal Walls =================================================================
event.shaped('20x projectred-exploration:peridot_block_wall', [
    '   ',
    'BBB',
    'BBB'
  ], {
    'B': '#forge:storage_blocks/peridot'
})

event.shaped('20x projectred-exploration:ruby_block_wall', [
    '   ',
    'BBB',
    'BBB'
  ], {
    'B': '#forge:storage_blocks/ruby'
})

event.shaped('20x projectred-exploration:sapphire_block_wall', [
    '   ',
    'BBB',
    'BBB'
  ], {
    'B': '#forge:storage_blocks/sapphire'
})

event.shaped('20x projectred-exploration:copper_block_wall', [
    '   ',
    'BBB',
    'BBB'
  ], {
    'B': '#forge:storage_blocks/copper'
})

event.shaped('20x projectred-exploration:tin_block_wall', [
    '   ',
    'BBB',
    'BBB'
  ], {
    'B': '#forge:storage_blocks/tin'
})

event.shaped('20x projectred-exploration:silver_block_wall', [
    '   ',
    'BBB',
    'BBB'
  ], {
    'B': '#forge:storage_blocks/silver'
})










})
