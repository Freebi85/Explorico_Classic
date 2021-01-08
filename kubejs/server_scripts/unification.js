events.listen("recipes", function (event) {

  // Dust Unification
  var dusts = [
    "dust_copper",
    "dust_tin",
    "dust_silver",
    "dust_nickel",
    "dust_zinc",
    "dust_aluminum",
    "dust_lead",
    "dust_gold",
    "dust_brass",
    "dust_signalum",
    "dust_enderium",
    "dust_lumium",
    "dust_constantan",
    "dust_invar",
    "dust_electrum",
    "dust_bronze",
    "dust_uranium",
    "dust_steel",
    "dust_coal",
    "dust_iron",

    
    "copper_dust",
    "tin_dust",
    "lead_dust",
    "silver_dust",
    "nickel_dust",
    "zinc_dust",
    "aluminum_dust",
    "gold_dust",
    "iron_dust",
    "brass_dust",
    "signalum_dust",
    "enderium_dust",
    "lumium_dust",
    "constantan_dust",
    "invar_dust",
    "electrum_dust",
    "bronze_dust",
    "uranium_dust",
    "steel_dust",
    "coal_dust",
	
	
	"ground_iron",
    "ground_gold",
	
	
  ]

  dusts.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "bluepower:" + item, "silents_mechanisms:" + item)
  })

  // Copper Unification
  var copper = [
    "ingot_copper",
    "block_copper",
    "nugget_copper",
    "storage_copper",
    "copper_ingot",
    "copper_block",
    "copper_nugget",
    "copper_chunk",
    "chunk_copper",
  ]

  copper.forEach(function (item, index) {
	event.replaceOutput({}, "bluepower:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "iceandfire:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "bno:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "tmechworks:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "create:" + item, "silents_mechanisms:" + item)
  })

  // Tin Unification
  var tin = [
    "ingot_tin",
    "block_tin",
    "nugget_tin",
    "storage_tin",
    "tin_ingot",
    "tin_block",
    "tin_nugget",
  ]

  tin.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "bno:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
  })

  // Lead Unification
  var lead = [
    "ingot_lead",
    "block_lead",
    "nugget_lead",
    "storage_lead",
    "lead_ingot",
    "lead_block",
    "lead_nugget",
  ]

  lead.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "bno:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
  })

  // Silver Unification
  var silver = [
    "ingot_silver",
    "block_silver",
    "nugget_silver",
    "storage_silver",
    "silver_ingot",
    "silver_block",
    "silver_nugget",
  ];

  silver.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
	event.replaceOutput({}, "bluepower:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "iceandfire:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "bno:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "silentgems:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
  })

  // Nickel Unification
  var nickel = [
    "ingot_nickel",
    "block_nickel",
    "nugget_nickel",
    "storage_nickel",
    "nickel_ingot",
    "nickel_block",
    "nickel_nugget",
  ]

  nickel.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "bno:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
  })

  // Uranium Unification
  var uranium = [
    "ingot_uranium",
    "block_uranium",
    "nugget_uranium",
    "storage_uranium",
    "uranium_ingot",
    "uranium_block",
    "uranium_nugget",
  ]

  uranium.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "bno:" + item, "silents_mechanisms:" + item)
  })

  // Aluminum Unification
  var aluminum = [
    "ingot_aluminum",
    "block_aluminum",
    "nugget_aluminum",
    "storage_aluminum",
    "aluminum_ingot",
    "aluminum_block",
    "aluminum_nugget",
  ]

  aluminum.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "bno:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "tmechworks:" + item, "silents_mechanisms:" + item)
  })

  // Steel Unification
  var steel = [
    "ingot_steel",
    "steel_ingot",
    "nugget_steel",
    "steel_nugget",
    "storage_steel",
    "block_steel",
    "steel_block",
  ]

  steel.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
  });

  // Osmium Unification
  var osmium = [
    "osmium_ingot",
    "ingot_osmium",
    "osmium_nugget",
    "nugget_osmium",
    "osmium_block",
    "block_osmium",
    "osmium_dust",
    "dust_osmium",
  ]

  osmium.forEach(function (item, index) {
    event.replaceOutput({}, "bno:" + item, "mekanism:" + item)
  });

  // Bronze Unification
  var bronze = [
    "bronze_ingot",
    "ingot_bronze",
    "bronze_nugget",
    "nugget_bronze",
    "bronze_block",
    "block_bronze",
  ]

  bronze.forEach(function (item, index) {
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
  })

  // Electrum Unification
  var electrum = [
    "electrum_ingot",
    "ingot_electrum",
    "electrum_nugget",
    "nugget_electrum",
    "electrum_block",
    "block_electrum",
  ]

  electrum.forEach(function (item, index) {
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
  })

  // Invar Unification
  var invar = [
    "invar_ingot",
    "ingot_invar",
    "invar_nugget",
    "nugget_invar",
    "invar_block",
    "block_invar",
  ]

  invar.forEach(function (item, index) {
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mysticalagriculture:" + item, "silents_mechanisms:" + item)
  })

  // Constantan Unification
  var constantan = [
    "constantan_ingot",
    "ingot_constantan",
    "constantan_nugget",
    "nugget_constantan",
    "constantan_block",
    "block_constantan",
  ]

  constantan.forEach(function (item, index) {
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
  })

  // Lumium Unification
  var lumium = [
    "lumium_ingot",
    "ingot_lumium",
    "lumium_nugget",
    "nugget_lumium",
    "lumium_block",
    "block_lumium",
  ]

  lumium.forEach(function (item, index) {
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
  })

  // Enderium Unification
  var enderium = [
    "enderium_ingot",
    "ingot_enderium",
    "enderium_nugget",
    "nugget_enderium",
    "enderium_block",
    "block_enderium",
  ]

  enderium.forEach(function (item, index) {
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
 })

  // Signalum Unification
  var signalum = [
    "signalum_ingot",
    "ingot_signalum",
    "signalum_nugget",
    "nugget_signalum",
    "signalum_block",
    "block_signalum",
  ]

  signalum.forEach(function (item, index) {
    event.replaceOutput({}, "thermal:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
  })
  
    // Zinc Unification
  var zinc = [
    "zinc_ingot",
    "ingot_zinc",
    "zinc_nugget",
    "nugget_zinc",
    "zinc_block",
    "block_zinc",
  ]
  
    zinc.forEach(function (item, index) {
    event.replaceOutput({}, "bluepower:" + item, "silents_mechanisms:" + item)
	event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
	event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "create:" + item, "silents_mechanisms:" + item)
  })
  
      // Brass Unification
  var brass = [
    "brass_ingot",
    "ingot_brass",
    "brass_nugget",
    "nugget_brass",
    "brass_block",
    "block_brass",
  ]
  
    brass.forEach(function (item, index) {
    event.replaceOutput({}, "bluepower:" + item, "silents_mechanisms:" + item)
	event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
	event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "create:" + item, "silents_mechanisms:" + item)
  })
 
  // Quartz Dust Unification
  var quartzdusts = [
    "quartz_dust",
    "dust_quartz",
    "nether_quartz_dust",
    "diamond_dust",
    "dust_diamond",
  ]

  quartzdusts.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
    event.replaceOutput({}, "bluepower:" + item, "thermal:" + item)
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
  })
  
  // Sulfur Dust Unification
  var sulfurdust = [
    "sulfur_dust",
    "dust_sulfur",
  ]

  sulfurdust.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
  }) 
  
  // Saltpeter Dust Unification
  var saltpeterdust = [
    "saltpeter_dust",
    "dust_saltpeter",
    "dust_niter",
    "niter_dust",
  ]

  saltpeterdust.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
  }) 

  // Cinnabar Unification
  var cinnabar = [
    "cinnabar_ingot",
    "ingot_cinnabar",
    "cinnabar_nugget",
    "nugget_cinnabar",
    "cinnabar_block",
    "block_cinnabar",
    "dust_cinnabar",
    "cinnabar_dust",
    "cinnabar_powder",
    "powder_cinnabar",
    "cinnabar",
  ]

  cinnabar.forEach(function (item, index) {
    event.replaceOutput({}, "gaiadimension:" + item, "thermal:" + item)
  })
  
  // Sawdust Dust Unification
  var sawdust = [
    "sawdust",
    "dust_wood",
    "wood_dust",
  ]

  sawdust.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
  })
  
// Ender Dust Unification
  var enderdust = [
    "dust_ender",
    "ender_dust",
    "ender_pearl_dust",
  ]

  enderdust.forEach(function (item, index) {
    event.replaceOutput({}, "appliedenergistics2:" + item, "thermal:" + item)
  })
  
// Lapis Dust Unification
  var lapisdust = [
    "lapis_dust",
    "dust_lapis",
    "dust_lapis_lazuli",
    "ground_lapis_lazuli",
  ]

  lapisdust.forEach(function (item, index) {
    event.replaceOutput({}, "assemblylinemachines:" + item, "thermal:" + item)
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
  })  
  
// Emerald Dust Unification
  var emeralddust = [
    "emerald_dust",
    "dust_emerald",
  ]

  emeralddust.forEach(function (item, index) {
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
  })    
  
  // Diamond Dust Unification
  var diadust = [
    "diamond_dust",
    "dust_diamond",
  ]

  diadust.forEach(function (item, index) {
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
  })   

  
  // Obsidian Dust Unification
  var obsidust = [
    "obsidian_dust",
    "dust_obsidian",
    "powdered_obsidian",
    "obsidian_shard",
  ]

  obsidust.forEach(function (item, index) {
    event.replaceOutput({}, "create:" + item, "mekanism:" + item)
  })  

  // Silicon  Unification
  var silicon = [
    "silicon"
  ]

  silicon.forEach(function (item, index) {
    event.replaceOutput({}, "appliedenergistics2:" + item, "refinedstorage:" + item)
  })    
  
 
  
})

















