// GTNH 1.21.1 — Applied Energistics 2 integration
// AE2 is the digital logistics layer. It simplifies logistics, not progression.

ServerEvents.recipes(event => {
  event.shaped('kubejs:ae2_machine_core', [
    'FCF',
    'DGD',
    'FCF'
  ], {
    F: 'ae2:fluix_crystal',
    C: 'gtceu:good_electronic_circuit',
    D: 'minecraft:diamond',
    G: 'kubejs:mv_machine_core'
  });

  const recipes = [
    ['ae2:inscriber', [
      'ICI',
      'PGP',
      'ICI'
    ], { I: 'gtceu:iron_plate', C: 'ae2:certus_quartz_crystal', P: 'minecraft:piston', G: 'kubejs:ae2_machine_core' }],
    ['ae2:charger', [
      'ICI',
      'PFP',
      'ICI'
    ], { I: 'gtceu:iron_plate', C: 'ae2:certus_quartz_crystal', P: 'minecraft:piston', F: 'ae2:fluix_crystal' }],
    ['ae2:molecular_assembler', [
      'FAF',
      'CMC',
      'FAF'
    ], { F: 'ae2:fluix_crystal', A: 'ae2:annihilation_core', C: 'ae2:calculation_processor', M: 'kubejs:ae2_machine_core' }],
    ['ae2:drive', [
      'FHF',
      'MAM',
      'FHF'
    ], { F: 'ae2:fluix_crystal', H: 'gtceu:hv_machine_hull', M: 'ae2:engineering_processor', A: 'kubejs:ae2_machine_core' }],
    ['ae2:controller', [
      'FSF',
      'GCG',
      'FSF'
    ], { F: 'ae2:fluix_crystal', S: 'ae2:sky_stone', G: 'gtceu:hv_machine_hull', C: 'kubejs:ae2_machine_core' }]
  ];

  for (const [output, pattern, key] of recipes) {
    event.remove({ output });
    event.shaped(output, pattern, key);
  }

  // Storage cells are progression milestones rather than free storage.
  const cells = [
    ['ae2:1k_storage_cell', 'kubejs:mv_machine_core', 'ae2:logic_processor'],
    ['ae2:4k_storage_cell', 'kubejs:hv_machine_core', 'ae2:calculation_processor'],
    ['ae2:16k_storage_cell', 'kubejs:ev_machine_core', 'ae2:engineering_processor'],
    ['ae2:64k_storage_cell', 'kubejs:iv_machine_core', 'ae2:engineering_processor']
  ];

  for (const [output, core, processor] of cells) {
    event.remove({ output });
    event.shaped(output, [
      'SPS',
      'PCP',
      'SPS'
    ], {
      S: 'ae2:sky_stone',
      P: processor,
      C: core
    });
  }
});