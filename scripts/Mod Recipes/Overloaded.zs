
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.data.StringData;



// Removals =============================================================================================
craftingTable.removeRecipe(<item:overloaded:multi_tool>);
mods.jei.JEI.hideItem(<item:overloaded:multi_tool>);
craftingTable.removeRecipe(<item:overloaded:ray_gun>);
mods.jei.JEI.hideItem(<item:overloaded:ray_gun>);
craftingTable.removeRecipe(<item:overloaded:instant_furnace>);
mods.jei.JEI.hideItem(<item:overloaded:instant_furnace>);

// Chestplate =============================================================================================
craftingTable.removeRecipe(<item:overloaded:multi_chestplate>);

craftingTable.addShaped("multichest", <item:overloaded:multi_chestplate>, [
[<tag:items:forge:storage_blocks/nether_star>, <item:overloaded:energy_core>, <tag:items:forge:storage_blocks/nether_star>], 
[<tag:items:forge:storage_blocks/nether_star>, <item:botania:terrasteel_chestplate>, <tag:items:forge:storage_blocks/nether_star>],
[<tag:items:forge:storage_blocks/nether_star>, <item:overloaded:energy_core>, <tag:items:forge:storage_blocks/nether_star>]]);

// Leggins =============================================================================================
craftingTable.removeRecipe(<item:overloaded:multi_leggings>);

craftingTable.addShaped("multilegs", <item:overloaded:multi_leggings>, [
[<tag:items:forge:storage_blocks/nether_star>, <item:overloaded:energy_core>, <tag:items:forge:storage_blocks/nether_star>], 
[<tag:items:forge:storage_blocks/nether_star>, <item:botania:terrasteel_leggings>, <tag:items:forge:storage_blocks/nether_star>],
[<tag:items:forge:storage_blocks/nether_star>, <item:overloaded:energy_core>, <tag:items:forge:storage_blocks/nether_star>]]);


// Helmet=============================================================================================
craftingTable.removeRecipe(<item:overloaded:multi_helmet>);

craftingTable.addShaped("multihelmet", <item:overloaded:multi_helmet>, [
[<tag:items:forge:storage_blocks/nether_star>, <item:overloaded:energy_core>, <tag:items:forge:storage_blocks/nether_star>], 
[<tag:items:forge:storage_blocks/nether_star>, <item:botania:terrasteel_helmet>, <tag:items:forge:storage_blocks/nether_star>],
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);

// Boots =============================================================================================
craftingTable.removeRecipe(<item:overloaded:multi_boots>);

craftingTable.addShaped("multiboots", <item:overloaded:multi_boots>, [
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
[<tag:items:forge:storage_blocks/nether_star>, <item:botania:terrasteel_boots>, <tag:items:forge:storage_blocks/nether_star>],
[<tag:items:forge:storage_blocks/nether_star>, <item:overloaded:energy_core>, <tag:items:forge:storage_blocks/nether_star>]]);