onEvent('recipes', event => {
	

// Removals to prevent incompatibility issues ======================================================================
event.remove({type: 'mekanism.enriching', output: '#forge:dusts/iron'})
event.remove({type: 'mekanism.enriching', output: '#forge:dusts/uranium'})
event.remove({type: 'immersiveengineering.crusher', output: '#forge:dusts/gold'})
event.remove({id: 'appliedenergistics2:grinder/ender_dust'})
event.remove({id: 'appliedenergistics2:grinder/nether_gold_dust_ore'})
event.remove({id: 'assemblylinemachines:grinder/grind_iron_ore'})
event.remove({id: 'assemblylinemachines:grinder/grind_iron_ingot'})
event.remove({id: 'assemblylinemachines:grinder/grind_lapis_ore'})
event.remove({id: 'assemblylinemachines:grinder/grind_lapis'})
event.remove({id: 'assemblylinemachines:grinder/grind_charcoal'})
event.remove({id: 'thermal:earth_charge/quartz_from_quartz_block'})
event.remove({id: 'create:mixing/chromatic_compound'})
event.remove({id: 'create:crushing/obsidian'})
event.remove({id: 'immersiveengineering:arcfurnace/ore_tungsten'})
event.remove({id: 'immersiveengineering:arcfurnace/dust_tungsten'})
event.remove({id: 'immersiveengineering:crusher/nether_gold'})
event.remove({id: 'immersiveengineering:crusher/ore_gold'})
event.remove({id: 'thermal:machine/plugins/mekanism/pulverizer_mekanism_fluorite_ore'})
event.remove({id: 'thermal:machine/plugins/create/pulverizer_create_zinc_ore'})
event.remove({id: 'thermal:machine/smelter/smelter_sapphire_ore'})
event.remove({id: 'thermal:machine/pulverizer/pulverizer_sulfur'})
event.remove({id: 'thermal:machine/pulverizer/pulverizer_sapphire_ore'})
event.remove({id: 'thermal:machine/pulverizer/pulverizer_emerald'})
event.remove({id: 'thermal:machine/press/press_emerald_gem_to_gear'})
event.remove({id: 'mekanism:processing/emerald/to_dust'})
event.remove({id: 'silents_mechanisms:crushing/cinnabar_gems'})
event.remove({id: 'silentgems:crushing/apatite'})


// Sulfur Dust in missing machines  ======================================================================
event.recipes.immersiveengineering.crusher('thermal:sulfur_dust', '#forge:gems/sulfur', item.of('thermal:sulfur_dust').chance(0.1)) //in - out - seconds
event.recipes.thermal.pulverizer(['thermal:sulfur_dust', item.of('thermal:sulfur_dust').chance(0.1)], '#forge:gems/sulfur')
event.recipes.mekanism.crushing('thermal:sulfur_dust', '#forge:gems/sulfur')


// Iron Dust/Ingots in missing machines ======================================================================
event.recipes.immersiveengineering.crusher(item.of('silents_mechanisms:iron_dust', 2), '#forge:ores/iron', item.of('silents_mechanisms:nickel_dust').chance(0.1)) //in - out - in_seconds
event.recipes.mekanism.crushing('silents_mechanisms:iron_dust', '#forge:ingots/iron')
event.recipes.mekanism.enriching('silents_mechanisms:iron_dust', '#mekanism:dirty_dusts/iron')
event.recipes.mekanism.enriching(item.of('silents_mechanisms:iron_dust', 2), '#forge:ores/iron')

// Gold Dust/Ingots in missing machines ======================================================================
event.recipes.immersiveengineering.crusher(item.of('silents_mechanisms:gold_dust', 2), '#forge:ores/gold', item.of('thermal:cinnabar').chance(0.05)) 
event.recipes.mekanism.enriching('silents_mechanisms:gold_dust', '#mekanism:dirty_dusts/gold')
event.recipes.mekanism.enriching(item.of('silents_mechanisms:gold_dust', 2), '#forge:ores/gold')
event.recipes.mekanism.crushing('silents_mechanisms:gold_dust', '#forge:ingots/gold')


// Skystone Dust/Ingots in missing machines ======================================================================
event.recipes.immersiveengineering.crusher('appliedenergistics2:sky_dust', 'appliedenergistics2:sky_stone_block') 
event.recipes.thermal.pulverizer('appliedenergistics2:sky_dust', 'appliedenergistics2:sky_stone_block')

// Ender Dust/Ingots in missing machines ======================================================================
event.recipes.immersiveengineering.crusher('thermal:ender_pearl_dust', '#forge:ender_pearls') 

// Fluix Dust/Ingots in missing machines ======================================================================
event.recipes.immersiveengineering.crusher('appliedenergistics2:fluix_dust', '#appliedenergistics2:crystals/fluix') 

// Certus Quartz Dust/Ingots in missing machines ======================================================================
event.recipes.thermal.pulverizer('appliedenergistics2:certus_quartz_dust', '#forge:gems/certus_quartz')
event.recipes.immersiveengineering.crusher('appliedenergistics2:certus_quartz_dust', '#forge:gems/certus_quartz')

// Cyanite Dust/Ingots in missing machines ======================================================================
event.recipes.mekanism.crushing('bigreactors:cyanite_dust', '#forge:ingots/cyanite')
event.recipes.immersiveengineering.crusher('bigreactors:cyanite_dust', '#forge:ingots/cyanite')

// Graphite Dust/Ingots in missing machines ======================================================================
event.recipes.mekanism.crushing('bigreactors:graphite_dust', '#forge:ingots/graphite')
event.recipes.immersiveengineering.crusher('bigreactors:graphite_dust', '#forge:ingots/graphite')

// Coke Dust/Ingots in missing machines ======================================================================
event.recipes.mekanism.crushing('immersiveengineering:dust_coke', '#forge:coal_coke')
event.recipes.thermal.pulverizer('immersiveengineering:dust_coke', '#forge:coal_coke')

// Lapis Dust/Ingots in missing machines ======================================================================
event.recipes.immersiveengineering.crusher('thermal:lapis_dust', '#forge:gems/lapis')

// Charcoal Dust/Ingots in missing machines ======================================================================
event.recipes.thermal.pulverizer('mekanism:dust_charcoal', '#forge:charcoal')
event.recipes.immersiveengineering.crusher('mekanism:dust_charcoal', '#forge:charcoal')

// Emerald Dust/Ingots in missing machines ======================================================================
event.recipes.mekanism.crushing('thermal:emerald_dust', '#forge:gems/emerald')
event.recipes.immersiveengineering.crusher('thermal:emerald_dust', '#forge:gems/emerald')
event.recipes.thermal.pulverizer('thermal:emerald_dust', '#forge:gems/emerald')

// Diamond Dust/Ingots in missing machines ======================================================================
event.recipes.mekanism.crushing('thermal:diamond_dust', '#forge:gems/diamond')
event.recipes.immersiveengineering.crusher('thermal:diamond_dust', '#forge:gems/diamond')

// Netherrite Dust/Ingots in missing machines ======================================================================
event.recipes.thermal.pulverizer('mekanism:dust_netherite', '#forge:ingots/netherite')
event.recipes.immersiveengineering.crusher('mekanism:dust_netherite', '#forge:ingots/netherite')

// Refined Obsidian Dust/Ingots in missing machines ======================================================================
event.recipes.thermal.pulverizer('mekanism:dust_refined_obsidian', '#forge:ingots/refined_obsidian')
event.recipes.immersiveengineering.crusher('mekanism:dust_refined_obsidian', '#forge:ingots/refined_obsidian')

// Obsidian Dust/Ingots in missing machines ======================================================================
event.recipes.thermal.pulverizer(item.of('mekanism:dust_obsidian', 4), '#forge:obsidian')
event.recipes.immersiveengineering.crusher(item.of('mekanism:dust_obsidian', 4), '#forge:obsidian')

// Flurotie Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.thermal.pulverizer('mekanism:dust_fluorite', '#forge:gems/fluorite')
event.recipes.immersiveengineering.crusher('mekanism:dust_fluorite', '#forge:gems/fluorite')
event.recipes.thermal.pulverizer(item.of('mekanism:fluorite_gem', 6), '#forge:ores/fluorite')

// Apatite Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('thermal:apatite_dust', '#forge:gems/apatite')
event.recipes.immersiveengineering.crusher('thermal:apatite_dust', '#forge:gems/apatite')
event.recipes.immersiveengineering.crusher(item.of('thermal:apatite', 12), '#forge:ores/apatite')
event.recipes.mekanism.enriching(item.of('thermal:apatite', 12), '#forge:ores/apatite')

// Cinnabar Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('thermal:cinnabar_dust', '#forge:gems/cinnabar')
event.recipes.immersiveengineering.crusher('thermal:cinnabar_dust', '#forge:gems/cinnabar')
event.recipes.immersiveengineering.crusher(item.of('thermal:cinnabar', 2), '#forge:ores/cinnabar')

// Niter Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('thermal:niter_dust', '#forge:gems/niter')
event.recipes.immersiveengineering.crusher('thermal:niter_dust', '#forge:gems/niter')
event.recipes.immersiveengineering.crusher(item.of('thermal:niter', 6), '#forge:ores/niter')
event.recipes.mekanism.enriching(item.of('thermal:niter', 6), '#forge:ores/niter')

// Quartz Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.immersiveengineering.crusher('thermal:quartz_dust', '#forge:gems/quartz')
event.recipes.immersiveengineering.crusher(item.of('minecraft:quartz', 4), '#forge:ores/quartz')

// Redstone Alloy Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:redstone_alloy_dust', '#forge:ingots/redstone_alloy')
event.recipes.immersiveengineering.crusher('silents_mechanisms:redstone_alloy_dust', '#forge:ingots/redstone_alloy')
event.recipes.thermal.pulverizer('silents_mechanisms:redstone_alloy_dust', '#forge:ingots/redstone_alloy')

event.recipes.appliedenergistics2.grinder({
    input: ingredient.of('#forge:ingots/redstone_alloy').toJson(),
    result: {
      primary: item.of('silents_mechanisms:redstone_alloy_dust').toResultJson(),
      optional: []
    },
    turns: 6
  }) 


// Silver Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.enriching(item.of('silents_mechanisms:silver_dust', 2), '#forge:ores/silver')
event.recipes.mekanism.crushing('silents_mechanisms:silver_dust', '#forge:ingots/silver')

// Lead Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.immersiveengineering.crusher('silents_mechanisms:lead_dust', '#forge:ingots/lead')
event.recipes.mekanism.enriching('silents_mechanisms:lead_dust', '#mekanism:dirty_dusts/lead')
event.recipes.mekanism.enriching(item.of('silents_mechanisms:lead_dust', 2), '#forge:ores/lead')
event.recipes.mekanism.crushing('silents_mechanisms:lead_dust', '#forge:ingots/lead')

// Nickel Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:nickel_dust', '#forge:ingots/nickel')

// Zinc Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.thermal.pulverizer('silents_mechanisms:zinc_dust', '#forge:ingots/zinc')

// Aluminum Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.thermal.pulverizer('silents_mechanisms:aluminum_dust', '#forge:ingots/aluminum')

// Uranium Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.thermal.pulverizer('silents_mechanisms:uranium_dust', '#forge:ingots/uranium')


// Brass Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:brass_dust', '#forge:ingots/brass')

// Invar Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:invar_dust', '#forge:ingots/invar')

// Electrum Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:electrum_dust', '#forge:ingots/electrum')
event.recipes.immersiveengineering.crusher('silents_mechanisms:electrum_dust', '#forge:ingots/electrum')

// Steel Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.thermal.pulverizer('silents_mechanisms:steel_dust', '#forge:ingots/steel')

// Bismuth-Brass Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:bismuth_brass_dust', '#forge:ingots/bismuth_brass')
event.recipes.immersiveengineering.crusher('silents_mechanisms:bismuth_brass_dust', '#forge:ingots/bismuth_brass')
event.recipes.thermal.pulverizer('silents_mechanisms:bismuth_brass_dust', '#forge:ingots/bismuth_brass') 

// Alu-Steel Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:aluminum_steel_dust', '#forge:ingots/aluminum_steel')
event.recipes.immersiveengineering.crusher('silents_mechanisms:aluminum_steel_dust', '#forge:ingots/aluminum_steel')
event.recipes.thermal.pulverizer('silents_mechanisms:aluminum_steel_dust', '#forge:ingots/aluminum_steel') 

// Bis-Steel Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:bismuth_steel_dust', '#forge:ingots/bismuth_steel')
event.recipes.immersiveengineering.crusher('silents_mechanisms:bismuth_steel_dust', '#forge:ingots/bismuth_steel')
event.recipes.thermal.pulverizer('silents_mechanisms:bismuth_steel_dust', '#forge:ingots/bismuth_steel') 

// Signalum Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:signalum_dust', '#forge:ingots/signalum')
event.recipes.immersiveengineering.crusher('silents_mechanisms:signalum_dust', '#forge:ingots/signalum')

// Lumium Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:lumium_dust', '#forge:ingots/lumium')
event.recipes.immersiveengineering.crusher('silents_mechanisms:lumium_dust', '#forge:ingots/lumium')

// Enderium Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('silents_mechanisms:enderium_dust', '#forge:ingots/enderium')
event.recipes.immersiveengineering.crusher('silents_mechanisms:enderium_dust', '#forge:ingots/enderium')

// Coal Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.thermal.pulverizer('silents_mechanisms:coal_dust', '#forge:gems/coal')

// Starmetal Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('astralsorcery:stardust', '#astralsorcery:starmetal')
event.recipes.thermal.pulverizer('astralsorcery:stardust', '#astralsorcery:starmetal')
event.recipes.immersiveengineering.crusher('astralsorcery:stardust', '#astralsorcery:starmetal')
event.recipes.silents_mechanisms.crushing({ingredient: ingredient.of('#astralsorcery:starmetal').toJson(),results: [item.of('astralsorcery:stardust').toResultJson()], process_time: 200}) 


// Tungsten Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.mekanism.crushing('jaopca:dusts.tungsten', '#forge:ingots/tungsten')
event.recipes.thermal.pulverizer('jaopca:dusts.tungsten', '#forge:ingots/tungsten')
event.recipes.silents_mechanisms.crushing({ingredient: ingredient.of('#forge:ingots/tungsten').toJson(),results: [item.of('jaopca:dusts.tungsten').toResultJson()], process_time: 200}) 
event.recipes.appliedenergistics2.grinder({
    input: ingredient.of('#forge:ingots/tungsten').toJson(),
    result: {
      primary: item.of('jaopca:dusts.tungsten').toResultJson(),
      optional: []
    },
    turns: 6
  }) 

// Sapphire Dust/Ingots/Ores in missing machines ======================================================================
event.replaceOutput({}, '#forge:gems/sapphire', 'iceandfire:sapphire_gem')
event.replaceOutput({}, '#forge:storage_blocks/sapphire', 'iceandfire:sapphire_block')
event.recipes.immersiveengineering.crusher(item.of('iceandfire:sapphire_gem', 2), '#forge:ores/sapphire')
event.recipes.thermal.pulverizer(item.of('iceandfire:sapphire_gem', 2), '#forge:ores/sapphire')
event.recipes.appliedenergistics2.grinder({
    input: ingredient.of('#forge:ores/sapphire').toJson(),
    result: {
      primary: item.of('iceandfire:sapphire_gem').toResultJson(),
      optional: []
    },
    turns: 6
  }) 

// Amethyst Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.immersiveengineering.crusher(item.of('iceandfire:amythest_gem', 2), '#forge:ores/amethyst')
event.recipes.thermal.pulverizer(item.of('iceandfire:amythest_gem', 2), '#forge:ores/amethyst')
event.recipes.appliedenergistics2.grinder({
    input: ingredient.of('#forge:ores/amethyst').toJson(),
    result: {
      primary: item.of('iceandfire:amythest_gem').toResultJson(),
      optional: []
    },
    turns: 6
  }) 


// Ruby Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.immersiveengineering.crusher(item.of('bluepower:ruby_gem', 2), '#forge:ores/ruby')
event.replaceOutput({}, '#forge:gems/ruby', 'bluepower:ruby_gem')
event.replaceOutput({}, '#forge:storage_blocks/ruby', 'bluepower:ruby_block')
event.recipes.appliedenergistics2.grinder({
    input: ingredient.of('#forge:ores/ruby').toJson(),
    result: {
      primary: item.of('bluepower:ruby_gem').toResultJson(),
      optional: []
    },
    turns: 6
  }) 

// Malachite Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.immersiveengineering.crusher(item.of('bluepower:malachite_gem', 2), '#forge:ores/malachite')
event.recipes.thermal.pulverizer(item.of('bluepower:malachite_gem', 2), '#forge:ores/malachite')
event.recipes.appliedenergistics2.grinder({
    input: ingredient.of('#forge:ores/malachite').toJson(),
    result: {
      primary: item.of('bluepower:malachite_gem').toResultJson(),
      optional: []
    },
    turns: 6
  }) 

// Certus Quartz Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.thermal.pulverizer(item.of('appliedenergistics2:certus_quartz_crystal', 4), '#forge:ores/certus_quartz') 
event.recipes.immersiveengineering.crusher(item.of('appliedenergistics2:certus_quartz_crystal', 4), '#forge:ores/certus_quartz') 
event.recipes.silents_mechanisms.crushing({ingredient: ingredient.of('#forge:ores/certus_quartz').toJson(),results: [item.of('appliedenergistics2:certus_quartz_crystal', 4).toResultJson()], process_time: 200})

event.recipes.create.crushing({
ingredients: [item.of('#forge:ores/certus_quartz').toJson()],
results: [
item.of('appliedenergistics2:certus_quartz_crystal', 4).toResultJson(), 
Item.of('appliedenergistics2:certus_quartz_crystal').chance(0.15).toResultJson()
],
processingTime: 100})





// Certus Quartz Charged Dust/Ingots/Ores in missing machines ======================================================================
event.recipes.thermal.pulverizer(item.of('appliedenergistics2:charged_certus_quartz_crystal', 4), '#forge:ores/certus_quartz_charged') 
event.recipes.immersiveengineering.crusher(item.of('appliedenergistics2:charged_certus_quartz_crystal', 4), '#forge:ores/certus_quartz_charged') 
event.recipes.silents_mechanisms.crushing({ingredient: ingredient.of('#forge:ores/certus_quartz_charged').toJson(),results: [item.of('appliedenergistics2:charged_certus_quartz_crystal', 4).toResultJson()], process_time: 200})

event.recipes.create.crushing({
ingredients: [item.of('#forge:ores/certus_quartz_charged').toJson()],
results: [
item.of('appliedenergistics2:charged_certus_quartz_crystal', 4).toResultJson(), 
Item.of('appliedenergistics2:charged_certus_quartz_crystal').chance(0.15).toResultJson()
],
processingTime: 100})







})


  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
