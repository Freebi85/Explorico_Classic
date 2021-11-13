
import mods.jei.JEI;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.data.StringData;

val hammer = <item:immersiveengineering:hammer>.anyDamage().transformDamage(4);

// Removals  =============================================================================================
craftingTable.removeRecipe(<item:thermal:sulfur_dust>);

// Sulfur   =============================================================================================
craftingTable.removeRecipe(<item:thermal:sulfur_dust>);
craftingTable.addShapeless("sulfur_m", <item:thermal:sulfur_dust>, [hammer,<item:thermal:sulfur>], null);

// Iron   =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:iron_dust>);
craftingTable.removeRecipe(<item:thermal:iron_plate>);
craftingTable.addShapeless("iron_d", <item:silents_mechanisms:iron_dust>, [hammer, <item:minecraft:iron_ingot>], null);
craftingTable.addShapeless("iron_p", <item:thermal:iron_plate>, [hammer, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>], null);

// Gold  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:gold_dust>);
craftingTable.removeRecipe(<item:create:golden_sheet>);
craftingTable.removeRecipe(<item:thermal:gold_plate>);
craftingTable.addShapeless("gold_d", <item:silents_mechanisms:gold_dust>, [hammer,<item:minecraft:gold_ingot>], null);
craftingTable.addShapeless("gold_p", <item:thermal:gold_plate>, [hammer, <item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>], null);

// Glowstone  =============================================================================================
craftingTable.addShapeless("glowstone_m", <item:minecraft:glowstone_dust>, [hammer,<item:mekanism:ingot_refined_glowstone>], null);
craftingTable.addShapeless("glowstone_m2", <item:minecraft:glowstone_dust> * 3, [hammer,<item:minecraft:glowstone>], null);

// Ender  =============================================================================================
craftingTable.removeRecipe(<item:thermal:ender_pearl_dust>);
craftingTable.addShapeless("enderdust_block", <item:appliedenergistics2:ender_dust> *9, [<item:jaopca:storage_blocks.ender_pearl>], null);
craftingTable.addShapeless("enderdust_m", <item:appliedenergistics2:ender_dust>, [hammer,<item:minecraft:ender_pearl>], null);

// Fluix   =============================================================================================
craftingTable.removeRecipe(<item:appliedenergistics2:fluix_dust>);
craftingTable.addShapeless("fluixdust_m", <item:appliedenergistics2:fluix_dust>, [hammer,<tag:items:appliedenergistics2:crystals/fluix>], null);

// Certus  =============================================================================================
craftingTable.removeRecipe(<item:appliedenergistics2:certus_quartz_dust>);
craftingTable.addShapeless("certusdust_m", <item:appliedenergistics2:certus_quartz_dust>, [hammer,<tag:items:forge:gems/certus_quartz>], null);

// Cyanite  =============================================================================================
craftingTable.removeRecipe(<item:bigreactors:cyanite_dust>);
craftingTable.addShapeless("cyanitedust_m", <item:bigreactors:cyanite_dust>, [hammer,<tag:items:forge:ingots/cyanite>], null);

// Graphite  =============================================================================================
craftingTable.removeRecipe(<item:bigreactors:graphite_dust>);
craftingTable.addShapeless("graphiteedust_m", <item:bigreactors:graphite_dust>, [hammer,<item:bigreactors:graphite_ingot>], null);

// Coke  =============================================================================================
craftingTable.removeRecipe(<item:immersiveengineering:dust_coke>);
craftingTable.addShapeless("cokedust_m", <item:immersiveengineering:dust_coke>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(2),<tag:items:forge:coal_coke>], null);

// Lapis   =============================================================================================
craftingTable.removeRecipe(<item:thermal:lapis_dust>);
craftingTable.addShapeless("lapisdust_m", <item:thermal:lapis_dust>, [hammer,<tag:items:forge:gems/lapis>], null);

// Emerald   =============================================================================================
craftingTable.removeRecipe(<item:thermal:emerald_dust>);
craftingTable.addShapeless("emeralddust_m", <item:thermal:emerald_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(20),<tag:items:forge:gems/emerald>], null);

// Diamond   =============================================================================================
craftingTable.removeRecipe(<item:thermal:diamond_dust>);
craftingTable.addShapeless("diadust_m", <item:thermal:diamond_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(20),<tag:items:forge:gems/diamond>], null);

// Netherrite   =============================================================================================
craftingTable.removeRecipe(<item:mekanism:dust_netherite>);
craftingTable.addShapeless("netherritedust_m", <item:mekanism:dust_netherite>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(10),<tag:items:forge:ingots/netherite>], null);

// Refined Obsidian  =============================================================================================
craftingTable.removeRecipe(<item:mekanism:dust_refined_obsidian>);
craftingTable.addShapeless("refindobsidust_m", <item:mekanism:dust_refined_obsidian>, [hammer,<tag:items:forge:ingots/refined_obsidian>], null);

// Fluorite   =============================================================================================
craftingTable.removeRecipe(<item:mekanism:dust_fluorite>);
craftingTable.addShapeless("fluoritedust_m", <item:mekanism:dust_fluorite>, [hammer,<tag:items:forge:gems/fluorite>], null);

// Osmium  =============================================================================================
craftingTable.removeRecipe(<item:mekanism:dust_osmium>);
craftingTable.addShapeless("osmiumdust_m", <item:mekanism:dust_osmium>, [hammer,<tag:items:forge:ingots/osmium>], null);

// Apatite   =============================================================================================
craftingTable.removeRecipe(<item:thermal:apatite_dust>);
craftingTable.addShapeless("apatitedust_m", <item:thermal:apatite_dust>, [hammer,<tag:items:forge:gems/apatite>], null);

// Cinnabar   =============================================================================================
craftingTable.removeRecipe(<item:thermal:cinnabar_dust>);
craftingTable.addShapeless("cinnabar_m", <item:thermal:cinnabar_dust>, [hammer,<tag:items:forge:gems/cinnabar>], null);

// Niter   =============================================================================================
craftingTable.removeRecipe(<item:thermal:niter_dust>);
craftingTable.addShapeless("niter_m", <item:thermal:niter_dust>, [hammer,<tag:items:forge:gems/niter>], null);

// Quartz  =============================================================================================
craftingTable.removeRecipe(<item:thermal:quartz_dust>);
craftingTable.addShapeless("quartz_m", <item:thermal:quartz_dust>, [hammer,<tag:items:forge:gems/quartz>], null);

// Redstone Alloy  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:redstone_alloy_dust>);
craftingTable.addShapeless("redalloy_m", <item:silents_mechanisms:redstone_alloy_dust>, [hammer,<tag:items:forge:ingots/redstone_alloy>], null);

// Copper  =============================================================================================
craftingTable.removeRecipe(<item:thermal:copper_plate>);
craftingTable.removeRecipe(<item:silents_mechanisms:copper_dust>);
craftingTable.addShapeless("copper_d", <item:silents_mechanisms:copper_dust>, [hammer, <tag:items:forge:ingots/copper>], null);
craftingTable.addShapeless("copper_p", <item:thermal:copper_plate>, [hammer, <tag:items:forge:ingots/copper>, <tag:items:forge:ingots/copper>], null);

// Tin =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:tin_dust>);
craftingTable.removeRecipe(<item:thermal:tin_plate>);
craftingTable.addShapeless("tin_d", <item:silents_mechanisms:tin_dust>, [hammer,<tag:items:forge:ingots/tin>], null);
craftingTable.addShapeless("tin_p", <item:thermal:tin_plate>, [hammer, <tag:items:forge:ingots/tin>, <tag:items:forge:ingots/tin>], null);

// Silver   =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:silver_dust>);
craftingTable.removeRecipe(<item:thermal:silver_plate>);
craftingTable.addShapeless("silver_d", <item:silents_mechanisms:silver_dust>, [hammer, <tag:items:forge:ingots/silver>], null);
craftingTable.addShapeless("silver_p", <item:thermal:silver_plate>, [hammer, <tag:items:forge:ingots/silver>, <tag:items:forge:ingots/silver>], null);

// Nickel   =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:nickel_dust>);
craftingTable.removeRecipe(<item:thermal:nickel_plate>);
craftingTable.addShapeless("nickel_d", <item:silents_mechanisms:nickel_dust>, [hammer, <tag:items:forge:ingots/nickel>], null);
craftingTable.addShapeless("nickel_p", <item:thermal:nickel_plate>, [hammer, <tag:items:forge:ingots/nickel>, <tag:items:forge:ingots/nickel>], null);

// Platinum   =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:platinum_dust>);
craftingTable.addShapeless("platinum_m", <item:silents_mechanisms:platinum_dust>, [hammer,<tag:items:forge:ingots/platinum>], null);

// Zinc  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:zinc_dust>);
craftingTable.addShapeless("zinc_m", <item:silents_mechanisms:zinc_dust>, [hammer,<tag:items:forge:ingots/zinc>], null);

// Bismuth   =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:bismuth_dust>);
craftingTable.addShapeless("bismuth_m", <item:silents_mechanisms:bismuth_dust>, [hammer,<tag:items:forge:ingots/bismuth>], null);

// Aluminum  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:aluminum_dust>);
craftingTable.removeRecipe(<item:immersiveengineering:plate_aluminum>);
craftingTable.addShapeless("alum_d", <item:silents_mechanisms:aluminum_dust>, [hammer, <tag:items:forge:ingots/aluminum>], null);
craftingTable.addShapeless("alum_p", <item:immersiveengineering:plate_aluminum>, [hammer, <tag:items:forge:ingots/aluminum>, <tag:items:forge:ingots/aluminum>], null);

// Uranium =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:uranium_dust>);
craftingTable.removeRecipe(<item:immersiveengineering:plate_uranium>);
craftingTable.addShapeless("uranium_d", <item:silents_mechanisms:uranium_dust>, [hammer, <tag:items:forge:ingots/uranium>], null);
craftingTable.addShapeless("uranium_p", <item:immersiveengineering:plate_uranium>, [hammer, <tag:items:forge:ingots/uranium>, <tag:items:forge:ingots/uranium>], null);

// Bronze  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:bronze_dust>);
craftingTable.removeRecipe(<item:thermal:bronze_plate>);
craftingTable.addShapeless("bronze_d", <item:silents_mechanisms:bronze_dust> * 4, [<tag:items:forge:dusts/copper>,<tag:items:forge:dusts/copper>,<tag:items:forge:dusts/copper>,<tag:items:forge:dusts/tin>], null);
craftingTable.addShapeless("bronze_d2", <item:silents_mechanisms:bronze_dust>, [hammer,<tag:items:forge:ingots/bronze>], null);
craftingTable.addShapeless("bronze_p", <item:thermal:bronze_plate>, [hammer, <tag:items:forge:ingots/bronze>, <tag:items:forge:ingots/bronze>], null);

// Brass  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:brass_dust>);
craftingTable.removeRecipe(<item:create:brass_sheet>);
craftingTable.addShapeless("brass_d", <item:silents_mechanisms:brass_dust> * 4, [<tag:items:forge:dusts/copper>,<tag:items:forge:dusts/copper>,<tag:items:forge:dusts/copper>,<tag:items:forge:dusts/zinc>], null);
craftingTable.addShapeless("brass_d2", <item:silents_mechanisms:brass_dust>, [hammer, <tag:items:forge:ingots/brass>], null);
craftingTable.addShapeless("brass_p", <item:create:brass_sheet>, [hammer, <tag:items:forge:ingots/brass>, <tag:items:forge:ingots/brass>], null);

// Invar  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:invar_dust>);
craftingTable.removeRecipe(<item:thermal:invar_plate>);
craftingTable.addShapeless("invar_d", <item:silents_mechanisms:invar_dust> * 3, [<tag:items:forge:dusts/iron>,<tag:items:forge:dusts/iron>,<tag:items:forge:dusts/nickel>], null);
craftingTable.addShapeless("invar_d2", <item:silents_mechanisms:invar_dust>, [hammer, <tag:items:forge:ingots/invar>], null);
craftingTable.addShapeless("invar_p", <item:thermal:invar_plate>, [hammer, <tag:items:forge:ingots/invar>, <tag:items:forge:ingots/invar>], null);

// Electrum =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:electrum_dust>);
craftingTable.removeRecipe(<item:thermal:electrum_plate>);
craftingTable.addShapeless("electrum_d", <item:silents_mechanisms:electrum_dust> * 2, [<tag:items:forge:dusts/gold>,<tag:items:forge:dusts/silver>], null);
craftingTable.addShapeless("electrum_d2", <item:silents_mechanisms:electrum_dust>, [hammer, <tag:items:forge:ingots/electrum>], null);
craftingTable.addShapeless("electrum_p", <item:thermal:electrum_plate>, [hammer, <tag:items:forge:ingots/electrum>, <tag:items:forge:ingots/electrum>], null);

// Steel =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:steel_dust>);
craftingTable.removeRecipe(<item:immersiveengineering:plate_steel>);
craftingTable.addShapeless("steel_d", <item:silents_mechanisms:steel_dust>, [hammer, <tag:items:forge:ingots/steel>], null);
craftingTable.addShapeless("steel_p", <item:immersiveengineering:plate_steel>, [hammer, <tag:items:forge:ingots/steel>, <tag:items:forge:ingots/steel>], null);

// Bismuth-Brass =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:bismuth_brass_dust>);
craftingTable.addShapeless("bis_brass_m", <item:silents_mechanisms:bismuth_brass_dust>, [hammer,<tag:items:forge:ingots/bismuth_brass>], null);

// ALu-Steel =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:aluminum_steel_dust>);
craftingTable.addShapeless("alu-steel_m", <item:silents_mechanisms:aluminum_steel_dust>, [hammer,<tag:items:forge:ingots/aluminum_steel>], null);

// Bismuth-Steel =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:bismuth_steel_dust>);
craftingTable.addShapeless("bis-steel_m", <item:silents_mechanisms:bismuth_steel_dust>, [hammer,<tag:items:forge:ingots/bismuth_steel>], null);

// Signalum =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:signalum_dust>);
craftingTable.removeRecipe(<item:thermal:signalum_plate>);
craftingTable.addShapeless("signalum_d", <item:silents_mechanisms:signalum_dust>, [hammer, <tag:items:forge:ingots/signalum>], null);
craftingTable.addShapeless("signalum_p", <item:thermal:signalum_plate>, [hammer, <tag:items:forge:ingots/signalum>, <tag:items:forge:ingots/signalum>], null);
craftingTable.addShapeless("signalum_d2", <item:silents_mechanisms:signalum_dust> * 4, [<tag:items:forge:dusts/copper>,<tag:items:forge:dusts/copper>,<tag:items:forge:dusts/copper>,<tag:items:forge:dusts/silver>, <tag:items:forge:dusts/redstone>,<tag:items:forge:dusts/redstone>,<tag:items:forge:dusts/redstone>,<tag:items:forge:dusts/redstone>], null);

// Lumium =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:lumium_dust>);
craftingTable.removeRecipe(<item:thermal:lumium_dust>);
craftingTable.removeRecipe(<item:thermal:lumium_plate>);
craftingTable.addShapeless("lumium_d", <item:silents_mechanisms:lumium_dust> * 4, [<tag:items:forge:dusts/tin>,<tag:items:forge:dusts/tin>,<tag:items:forge:dusts/tin>,<tag:items:forge:dusts/silver>, <tag:items:forge:dusts/glowstone>,<tag:items:forge:dusts/glowstone>], null);
craftingTable.addShapeless("lumium_d2", <item:silents_mechanisms:lumium_dust>, [hammer, <tag:items:forge:ingots/lumium>], null);
craftingTable.addShapeless("lumium_p", <item:thermal:lumium_plate>, [hammer, <tag:items:forge:ingots/lumium>, <tag:items:forge:ingots/lumium>], null);

// Enderium =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:enderium_dust>);
craftingTable.removeRecipe(<item:thermal:enderium_plate>);
craftingTable.addShapeless("enderium_d", <item:silents_mechanisms:enderium_dust> * 4, [<tag:items:forge:dusts/lead>,<tag:items:forge:dusts/lead>,<tag:items:forge:dusts/lead>,<tag:items:forge:dusts/diamond>, <tag:items:forge:dusts/ender_pearl>,<tag:items:forge:dusts/ender_pearl>], null);
craftingTable.addShapeless("enderium_d2", <item:silents_mechanisms:enderium_dust>, [hammer, <tag:items:forge:ingots/enderium>], null);
craftingTable.addShapeless("enderium_p", <item:thermal:enderium_plate>, [hammer, <tag:items:forge:ingots/enderium>, <tag:items:forge:ingots/enderium>], null);

// Coal =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:coal_dust>);
craftingTable.addShapeless("coal_m", <item:silents_mechanisms:coal_dust>, [hammer,<tag:items:forge:gems/coal>], null);

// Starmetal =============================================================================================
craftingTable.removeRecipe(<item:astralsorcery:stardust>);
craftingTable.addShapeless("starmetal_m", <item:astralsorcery:stardust>, [hammer,<tag:items:astralsorcery:starmetal>], null);

// Lead =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:lead_dust>);
craftingTable.removeRecipe(<item:thermal:lead_plate>);
craftingTable.addShapeless("lead_d", <item:silents_mechanisms:lead_dust>, [hammer,<tag:items:forge:ingots/lead>], null);
craftingTable.addShapeless("lead_p", <item:thermal:lead_plate>, [hammer,<tag:items:forge:ingots/lead>, <tag:items:forge:ingots/lead>], null);
