
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.data.StringData;



// Nice Additions =============================================================================================
craftingTable.removeRecipe(<item:mysticalagriculture:infusion_crystal>);
mods.jei.JEI.hideItem(<item:mysticalagriculture:infusion_crystal>);

// Pedestals =============================================================================================
craftingTable.removeRecipe(<item:mysticalagriculture:infusion_pedestal>);
craftingTable.removeRecipe(<item:mysticalagriculture:infusion_altar>);

craftingTable.addShaped("infpedestal", <item:mysticalagriculture:infusion_pedestal>, [
[<item:minecraft:air>, <item:mysticalagriculture:inferium_essence>, <item:minecraft:air>], 
[<item:minecraft:red_carpet>, <tag:items:forge:stone>, <item:minecraft:red_carpet>],
[<item:minecraft:red_carpet>, <tag:items:forge:ingots/gold>, <item:minecraft:red_carpet>]]);

craftingTable.addShaped("infaltar", <item:mysticalagriculture:infusion_altar>, [
[<item:mysticalagriculture:inferium_block>, <item:minecraft:red_carpet>, <item:mysticalagriculture:inferium_block>], 
[<item:minecraft:red_carpet>, <item:overloaded_cb:compressed_stone_1>, <item:minecraft:red_carpet>],
[<item:minecraft:red_carpet>, <tag:items:forge:storage_blocks/gold>, <item:minecraft:red_carpet>]]);


// Master Crystal =============================================================================================
craftingTable.removeRecipe(<item:mysticalagriculture:master_infusion_crystal>);

craftingTable.addShaped("master_crystal", <item:mysticalagriculture:master_infusion_crystal>, [
[<item:mysticalagradditions:insanium_gemstone>, <item:mysticalagriculture:prismarine_agglomeratio>, <item:mysticalagradditions:insanium_gemstone>], 
[<item:matc:supremium_crystal>, <item:mysticalagriculture:prosperity_gemstone>, <item:matc:supremium_crystal>],
[<item:mysticalagradditions:insanium_gemstone>, <item:mysticalagriculture:prismarine_agglomeratio>, <item:mysticalagradditions:insanium_gemstone>]]);