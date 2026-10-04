// GTNH 1.21.1 — Mekanism integration
// Mekanism supplies chemistry and specialized processing, but its machines
// are gated into the GregTech electrical backbone.

ServerEvents.recipes(event => {
  event.shaped('kubejs:mekanism_machine_core', [
    'SCS',
    'AEA',
    'SCS'
  ], {
    S: 'gtceu:steel_plate',
    C: 'gtceu:good_electronic_circuit',
    A: 'minecraft:redstone',
    E: 'kubejs:lv_machine_core'
  });

  const machines = [
    ['mekanism:metallurgic_infuser', [
      'ISI',
      'CEC',
      'ISI'
    ], { I: 'gtceu:steel_plate', S: 'minecraft:redstone', C: 'kubejs:mekanism_machine_core', E: 'gtceu:iron_plate' }],
    ['mekanism:enrichment_chamber', [
      'SOS',
      'CMC',
      'SOS'
    ], { O: 'mekanism:osmium_ingot', S: 'gtceu:steel_plate', C: 'kubejs:mekanism_machine_core', M: 'minecraft:redstone' }],
    ['mekanism:energized_smelter', [
      'SES',
      'CMC',
      'SES'
    ], { E: 'mekanism:energy_tablet', S: 'gtceu:steel_plate', C: 'kubejs:mekanism_machine_core', M: 'minecraft:redstone' }],
    ['mekanism:purification_chamber', [
      'ITI',
      'CHC',
      'ITI'
    ], { I: 'gtceu:stainless_steel_plate', T: 'gtceu:titanium_plate', C: 'kubejs:hv_machine_core', H: 'minecraft:diamond' }],
    ['mekanism:chemical_infuser', [
      'TPT',
      'CHC',
      'TPT'
    ], { T: 'gtceu:titanium_plate', P: 'gtceu:polyethylene_plate', C: 'kubejs:hv_machine_core', H: 'minecraft:diamond' }],
    ['mekanism:electrolytic_separator', [
      'TET',
      'CHC',
      'TET'
    ], { T: 'gtceu:titanium_plate', E: 'mekanism:energy_tablet', C: 'kubejs:hv_machine_core', H: 'minecraft:diamond' }],
    ['mekanism:pressurized_reaction_chamber', [
      'TPT',
      'CEC',
      'TPT'
    ], { T: 'gtceu:titanium_plate', P: 'gtceu:polyethylene_plate', C: 'kubejs:ev_machine_core', E: 'minecraft:nether_star' }]
  ];

  for (const [output, pattern, key] of machines) {
    event.remove({ output });
    event.shaped(output, pattern, key);
  }
});