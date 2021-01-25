events.listen("recipes", function (event) {

var s = event.recipes.minecraft.smelting




// Removals =======================================================================
event.remove({output: 'silents_mechanisms:compressed_iron_ingot'})
event.remove({id: 'silents_mechanisms:compressing/compressed_iron_ingot'})

event.remove({type: 'minecraft:smelting', output: '#forge:ingots/tin'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/copper'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/aluminum'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/aluminium'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/bismuth'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/bronze'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/electrum'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/enderium'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/invar'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/lead'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/lumium'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/nickel'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/platinum'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/signalum'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/silver'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/steel'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/uranium'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/zinc'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/osmium'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/iron'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/gold'})
event.remove({type: 'minecraft:smelting', output: '#forge:dusts/redstone'})
event.remove({type: 'minecraft:smelting', output: '#forge:gems/cinnabar'})
event.remove({type: 'minecraft:smelting', output: '#forge:ingots/tungsten'})
event.remove({type: 'minecraft:smelting', output: '#forge:nuggets/tungsten'})
event.remove({type: 'minecraft:smelting', output: '#forge:gems/sapphire'})
event.remove({type: 'minecraft:smelting', output: '#forge:gems/amethyst'})
event.remove({type: 'minecraft:smelting', output: '#forge:gems/ruby'})
event.remove({type: 'minecraft:smelting', output: '#forge:gems/malachite'})
event.remove({type: 'minecraft:smelting', output: '#forge:gems/apatite'})


// Additions and cleanups =======================================================================
s('silents_mechanisms:tin_ingot', '#forge:ores/tin').xp(0.1)
s('silents_mechanisms:tin_ingot', '#silents_mechanisms:chunks/tin').xp(0.1)
s('silents_mechanisms:tin_ingot', '#forge:dusts/tin')
s('silents_mechanisms:tin_ingot', 'create:crushed_tin_ore')
s('silents_mechanisms:copper_ingot', '#forge:ores/copper').xp(0.1)
s('silents_mechanisms:copper_ingot', '#silents_mechanisms:chunks/copper').xp(0.1)
s('silents_mechanisms:copper_ingot', '#forge:dusts/copper')
s('silents_mechanisms:copper_ingot', 'create:crushed_copper_ore')
s('silents_mechanisms:aluminum_ingot', '#forge:ores/aluminum').xp(0.1)
s('silents_mechanisms:aluminum_ingot', '#silents_mechanisms:chunks/aluminum').xp(0.1)
s('silents_mechanisms:aluminum_ingot', '#forge:dusts/aluminum')
s('silents_mechanisms:aluminum_ingot', 'create:crushed_aluminum_ore')
s('silents_mechanisms:bismuth_ingot', '#forge:ores/bismuth').xp(0.1)
s('silents_mechanisms:bismuth_ingot', '#silents_mechanisms:chunks/bismuth').xp(0.1)
s('silents_mechanisms:bismuth_ingot', '#forge:dusts/bismuth')
s('silents_mechanisms:bronze_ingot', '#forge:dusts/bronze')
s('silents_mechanisms:electrum_ingot', '#forge:dusts/electrum')
s('silents_mechanisms:enderium_ingot', '#forge:dusts/enderium')
s('silents_mechanisms:invar_ingot', '#forge:dusts/invar')
s('silents_mechanisms:lead_ingot', '#forge:ores/lead').xp(0.1)
s('silents_mechanisms:lead_ingot', '#silents_mechanisms:chunks/lead').xp(0.1)
s('silents_mechanisms:lead_ingot', '#forge:dusts/lead')
s('silents_mechanisms:lead_ingot', 'create:crushed_lead_ore')
s('silents_mechanisms:lumium_ingot', '#forge:dusts/lumium')
s('silents_mechanisms:nickel_ingot', '#forge:ores/nickel').xp(0.1)
s('silents_mechanisms:nickel_ingot', '#silents_mechanisms:chunks/nickel').xp(0.1)
s('silents_mechanisms:nickel_ingot', '#forge:dusts/nickel')
s('silents_mechanisms:nickel_ingot', 'create:crushed_nickel_ore')
s('silents_mechanisms:platinum_ingot', '#forge:ores/platinum').xp(0.1)
s('silents_mechanisms:platinum_ingot', '#silents_mechanisms:chunks/platinum').xp(0.1)
s('silents_mechanisms:platinum_ingot', '#forge:dusts/platinum')
s('silents_mechanisms:platinum_ingot', 'create:crushed_platinum_ore')
s('silents_mechanisms:signalum_ingot', '#forge:dusts/signalum')
s('silents_mechanisms:silver_ingot', '#forge:ores/silver').xp(0.1)
s('silents_mechanisms:silver_ingot', 'create:crushed_silver_ore').xp(0.1)
s('silents_mechanisms:silver_ingot', '#silents_mechanisms:chunks/silver').xp(0.1)
s('silents_mechanisms:silver_ingot', '#forge:dusts/silver')
s('silents_mechanisms:uranium_ingot', '#forge:ores/uranium').xp(0.1)
s('silents_mechanisms:uranium_ingot', '#silents_mechanisms:chunks/uranium').xp(0.1)
s('silents_mechanisms:uranium_ingot', '#forge:dusts/uranium')
s('silents_mechanisms:uranium_ingot', 'create:crushed_uranium_ore')
s('silents_mechanisms:zinc_ingot', '#forge:ores/zinc').xp(0.1)
s('silents_mechanisms:zinc_ingot', '#silents_mechanisms:chunks/zinc').xp(0.1)
s('silents_mechanisms:zinc_ingot', '#forge:dusts/zinc')
s('silents_mechanisms:zinc_ingot', 'create:crushed_zinc_ore')
s('mekanism:ingot_osmium', '#forge:ores/osmium').xp(0.1)
s('mekanism:ingot_osmium', '#silents_mechanisms:chunks/osmium').xp(0.1)
s('mekanism:ingot_osmium', '#forge:dusts/osmium')
s('mekanism:ingot_osmium', 'create:crushed_osmium_ore')
s('minecraft:iron_ingot', '#forge:ores/iron').xp(0.1)
s('minecraft:iron_ingot', '#silents_mechanisms:chunks/iron').xp(0.1)
s('minecraft:iron_ingot', '#forge:dusts/iron')
s('minecraft:iron_ingot', 'create:crushed_iron_ore')
s('minecraft:redstone', '#forge:ores/redstone')
s('minecraft:gold_ingot', '#forge:ores/gold').xp(0.1)
s('minecraft:gold_ingot', '#silents_mechanisms:chunks/gold').xp(0.1)
s('minecraft:gold_ingot', '#forge:dusts/gold')
s('minecraft:gold_ingot', 'create:crushed_gold_ore')
s('thermal:cinnabar', '#forge:ores/cinnabar')
s('iceandfire:sapphire_gem', '#forge:ores/sapphire').xp(0.1)
s('iceandfire:amythest_gem', '#forge:ores/amethyst').xp(0.1)
s('bluepower:ruby_gem', '#forge:ores/ruby').xp(0.1)
s('bluepower:malachite_gem', '#forge:ores/malachite').xp(0.1)
s('silents_mechanisms:uranium_ingot', 'bigreactors:yellorite_ore').xp(0.1)
s('thermal:apatite', '#forge:ores/apatite').xp(0.1)








})








