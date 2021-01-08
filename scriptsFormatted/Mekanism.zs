import crafttweaker.api.BracketHandlers;
import crafttweaker.api.item.IIngredient;

craftingTable.removeRecipe(BracketHandlers.getItem('mekanism:cardboard_box'));
craftingTable.addShaped('cardbox', BracketHandlers.getItem('mekanism:cardboard_box'), [[BracketHandlers.getItem('minecraft:paper') as IIngredient, BracketHandlers.getItem('minecraft:paper') as IIngredient, BracketHandlers.getItem('minecraft:paper') as IIngredient], [BracketHandlers.getItem('minecraft:paper') as IIngredient, BracketHandlers.getTag('forge:chests/ender') as IIngredient, BracketHandlers.getItem('minecraft:paper') as IIngredient], [BracketHandlers.getItem('minecraft:paper') as IIngredient, BracketHandlers.getTag('minecraft:wool') as IIngredient, BracketHandlers.getItem('minecraft:paper') as IIngredient]], null);