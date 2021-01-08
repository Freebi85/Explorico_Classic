
import mods.jei.JEI;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.data.StringData;

// Removals  =============================================================================================
craftingTable.removeRecipe(<item:thermal:sulfur_dust>);

// Sulfur   =============================================================================================
craftingTable.removeRecipe(<item:thermal:sulfur_dust>);
craftingTable.addShapeless("sulfur_m", <item:thermal:sulfur_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<item:thermal:sulfur>], null);

// Iron   =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:iron_dust>);
craftingTable.addShapeless("iron_m", <item:silents_mechanisms:iron_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<item:minecraft:iron_ingot>], null);

// Gold  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:gold_dust>);
craftingTable.addShapeless("gold_m", <item:silents_mechanisms:gold_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<item:minecraft:gold_ingot>], null);

// Glowstone  =============================================================================================
craftingTable.addShapeless("glowstone_m", <item:minecraft:glowstone_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<item:mekanism:ingot_refined_glowstone>], null);
craftingTable.addShapeless("glowstone_m2", <item:minecraft:glowstone_dust> * 3, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<item:minecraft:glowstone>], null);

// Ender  =============================================================================================
craftingTable.removeRecipe(<item:thermal:ender_pearl_dust>);
craftingTable.addShapeless("enderdust_m", <item:thermal:ender_pearl_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<item:minecraft:ender_pearl>], null);

// Fluix   =============================================================================================
craftingTable.removeRecipe(<item:appliedenergistics2:fluix_dust>);
craftingTable.addShapeless("fluixdust_m", <item:appliedenergistics2:fluix_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:appliedenergistics2:crystals/fluix>], null);

// Certus  =============================================================================================
craftingTable.removeRecipe(<item:appliedenergistics2:certus_quartz_dust>);
craftingTable.addShapeless("certusdust_m", <item:appliedenergistics2:certus_quartz_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:gems/certus_quartz>], null);

// Cyanite  =============================================================================================
craftingTable.removeRecipe(<item:bigreactors:cyanite_dust>);
craftingTable.addShapeless("cyanitedust_m", <item:bigreactors:cyanite_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/cyanite>], null);

// Graphite  =============================================================================================
craftingTable.removeRecipe(<item:bigreactors:graphite_dust>);
craftingTable.addShapeless("graphiteedust_m", <item:bigreactors:graphite_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<item:bigreactors:graphite_ingot>], null);

// Coke  =============================================================================================
craftingTable.removeRecipe(<item:immersiveengineering:dust_coke>);
craftingTable.addShapeless("cokedust_m", <item:immersiveengineering:dust_coke>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(2),<tag:forge:coal_coke>], null);

// Lapis   =============================================================================================
craftingTable.removeRecipe(<item:thermal:lapis_dust>);
craftingTable.addShapeless("lapisdust_m", <item:thermal:lapis_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:gems/lapis>], null);

// Emerald   =============================================================================================
craftingTable.removeRecipe(<item:thermal:emerald_dust>);
craftingTable.addShapeless("emeralddust_m", <item:thermal:emerald_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(20),<tag:forge:gems/emerald>], null);

// Diamond   =============================================================================================
craftingTable.removeRecipe(<item:thermal:diamond_dust>);
craftingTable.addShapeless("diadust_m", <item:thermal:diamond_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(20),<tag:forge:gems/diamond>], null);

// Netherrite   =============================================================================================
craftingTable.removeRecipe(<item:mekanism:dust_netherite>);
craftingTable.addShapeless("netherritedust_m", <item:mekanism:dust_netherite>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(10),<tag:forge:ingots/netherite>], null);

// Refined Obsidian  =============================================================================================
craftingTable.removeRecipe(<item:mekanism:dust_refined_obsidian>);
craftingTable.addShapeless("refindobsidust_m", <item:mekanism:dust_refined_obsidian>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/refined_obsidian>], null);

// Fluorite   =============================================================================================
craftingTable.removeRecipe(<item:mekanism:dust_fluorite>);
craftingTable.addShapeless("fluoritedust_m", <item:mekanism:dust_fluorite>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:gems/fluorite>], null);

// Osmium  =============================================================================================
craftingTable.removeRecipe(<item:mekanism:dust_osmium>);
craftingTable.addShapeless("osmiumdust_m", <item:mekanism:dust_osmium>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/osmium>], null);

// Apatite   =============================================================================================
craftingTable.removeRecipe(<item:thermal:apatite_dust>);
craftingTable.addShapeless("apatitedust_m", <item:thermal:apatite_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:gems/apatite>], null);

// Cinnabar   =============================================================================================
craftingTable.removeRecipe(<item:thermal:cinnabar_dust>);
craftingTable.addShapeless("cinnabar_m", <item:thermal:cinnabar_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:gems/cinnabar>], null);

// Niter   =============================================================================================
craftingTable.removeRecipe(<item:thermal:niter_dust>);
craftingTable.addShapeless("niter_m", <item:thermal:niter_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:gems/niter>], null);

// Quartz  =============================================================================================
craftingTable.removeRecipe(<item:thermal:quartz_dust>);
craftingTable.addShapeless("quartz_m", <item:thermal:quartz_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:gems/quartz>], null);

// Redstone Alloy  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:redstone_alloy_dust>);
craftingTable.addShapeless("redalloy_m", <item:silents_mechanisms:redstone_alloy_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/redstone_alloy>], null);

// Copper  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:copper_dust>);
craftingTable.addShapeless("copper_m", <item:silents_mechanisms:copper_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/copper>], null);

// Tin =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:tin_dust>);
craftingTable.addShapeless("tin_m", <item:silents_mechanisms:tin_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/tin>], null);

// Silver   =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:silver_dust>);
craftingTable.addShapeless("silver_m", <item:silents_mechanisms:silver_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/silver>], null);

// Nickel   =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:nickel_dust>);
craftingTable.addShapeless("nickel_m", <item:silents_mechanisms:nickel_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/nickel>], null);

// Platinum   =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:platinum_dust>);
craftingTable.addShapeless("platinum_m", <item:silents_mechanisms:platinum_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/platinum>], null);

// Zinc  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:zinc_dust>);
craftingTable.addShapeless("zinc_m", <item:silents_mechanisms:zinc_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/zinc>], null);

// Bismuth   =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:bismuth_dust>);
craftingTable.addShapeless("bismuth_m", <item:silents_mechanisms:bismuth_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/bismuth>], null);

// Aluminum  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:aluminum_dust>);
craftingTable.addShapeless("alum_m", <item:silents_mechanisms:aluminum_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/aluminum>], null);

// Uranium =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:uranium_dust>);
craftingTable.addShapeless("uranium_m", <item:silents_mechanisms:uranium_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/uranium>], null);


// Bronze  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:bronze_dust>);
craftingTable.addShapeless("bronze_m", <item:silents_mechanisms:bronze_dust> * 4, [<tag:forge:dusts/copper>,<tag:forge:dusts/copper>,<tag:forge:dusts/copper>,<tag:forge:dusts/tin>], null);
craftingTable.addShapeless("bronze_m2", <item:silents_mechanisms:bronze_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/bronze>], null);

// Brass  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:brass_dust>);
craftingTable.addShapeless("brass_m", <item:silents_mechanisms:brass_dust> * 4, [<tag:forge:dusts/copper>,<tag:forge:dusts/copper>,<tag:forge:dusts/copper>,<tag:forge:dusts/zinc>], null);
craftingTable.addShapeless("brass_m2", <item:silents_mechanisms:brass_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/brass>], null);

// Invar  =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:invar_dust>);
craftingTable.addShapeless("invar_m", <item:silents_mechanisms:invar_dust> * 3, [<tag:forge:dusts/iron>,<tag:forge:dusts/iron>,<tag:forge:dusts/nickel>], null);
craftingTable.addShapeless("invar_m2", <item:silents_mechanisms:invar_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/invar>], null);

// Electrum =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:electrum_dust>);
craftingTable.addShapeless("electrum_m", <item:silents_mechanisms:electrum_dust> * 2, [<tag:forge:dusts/gold>,<tag:forge:dusts/silver>], null);
craftingTable.addShapeless("electrum_m2", <item:silents_mechanisms:electrum_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/electrum>], null);

// Steel =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:steel_dust>);
craftingTable.addShapeless("steel_m", <item:silents_mechanisms:steel_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/steel>], null);

// Bismuth-Brass =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:bismuth_brass_dust>);
craftingTable.addShapeless("bis_brass_m", <item:silents_mechanisms:bismuth_brass_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/bismuth_brass>], null);

// ALu-Steel =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:aluminum_steel_dust>);
craftingTable.addShapeless("alu-steel_m", <item:silents_mechanisms:aluminum_steel_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/aluminum_steel>], null);

// Bismuth-Steel =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:bismuth_steel_dust>);
craftingTable.addShapeless("bis-steel_m", <item:silents_mechanisms:bismuth_steel_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/bismuth_steel>], null);

// Signalum =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:signalum_dust>);
craftingTable.addShapeless("signalum_m", <item:silents_mechanisms:signalum_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/signalum>], null);
craftingTable.addShapeless("signalum_m2", <item:silents_mechanisms:signalum_dust> * 4, [<tag:forge:dusts/copper>,<tag:forge:dusts/copper>,<tag:forge:dusts/copper>,<tag:forge:dusts/silver>, <tag:forge:dusts/redstone>,<tag:forge:dusts/redstone>,<tag:forge:dusts/redstone>,<tag:forge:dusts/redstone>], null);

// Lumium =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:lumium_dust>);
craftingTable.removeRecipe(<item:thermal:lumium_dust>);
craftingTable.addShapeless("lumium_m", <item:silents_mechanisms:lumium_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/lumium>], null);
craftingTable.addShapeless("lumium_m2", <item:silents_mechanisms:lumium_dust> * 4, [<tag:forge:dusts/tin>,<tag:forge:dusts/tin>,<tag:forge:dusts/tin>,<tag:forge:dusts/silver>, <tag:forge:dusts/glowstone>,<tag:forge:dusts/glowstone>], null);

// Enderium =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:enderium_dust>);
craftingTable.addShapeless("enderium_m", <item:silents_mechanisms:enderium_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/lumium>], null);
craftingTable.addShapeless("enderium_m2", <item:silents_mechanisms:enderium_dust> * 4, [<tag:forge:dusts/lead>,<tag:forge:dusts/lead>,<tag:forge:dusts/lead>,<tag:forge:dusts/diamond>, <tag:forge:dusts/ender_pearl>,<tag:forge:dusts/ender_pearl>], null);

// Coal =============================================================================================
craftingTable.removeRecipe(<item:silents_mechanisms:coal_dust>);
craftingTable.addShapeless("coal_m", <item:silents_mechanisms:coal_dust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:gems/coal>], null);

// Starmetal =============================================================================================
craftingTable.removeRecipe(<item:astralsorcery:stardust>);
craftingTable.addShapeless("starmetal_m", <item:astralsorcery:stardust>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:astralsorcery:starmetal>], null);

// Tungsten =============================================================================================
craftingTable.removeRecipe(<item:jaopca:dusts.tungsten>);
craftingTable.addShapeless("tungsten_m", <item:jaopca:dusts.tungsten>, [<item:immersiveengineering:hammer>.anyDamage().transformDamage(4),<tag:forge:ingots/tungsten>], null);















