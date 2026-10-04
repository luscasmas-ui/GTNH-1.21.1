// GTNH 1.21.1 — Progression cleanup
// Remove stock recipes that would bypass the integrated progression.
// This file intentionally targets only machines/systems with explicit
// replacement gates; it does not globally delete useful vanilla recipes.

ServerEvents.recipes(event => {
  const gatedOutputs = [
    'mekanism:metallurgic_infuser',
    'mekanism:enrichment_chamber',
    'mekanism:energized_smelter',
    'mekanism:purification_chamber',
    'mekanism:chemical_infuser',
    'mekanism:electrolytic_separator',
    'mekanism:pressurized_reaction_chamber',

    'ae2:inscriber',
    'ae2:charger',
    'ae2:molecular_assembler',
    'ae2:drive',
    'ae2:controller',
    'ae2:1k_storage_cell',
    'ae2:4k_storage_cell',
    'ae2:16k_storage_cell',
    'ae2:64k_storage_cell'
  ];

  for (const output of gatedOutputs) {
    event.remove({ output });
  }

  // ProjectE must never provide a free early progression path.
  event.remove({ output: 'projecte:transmutation_table' });
  event.remove({ output: 'projecte:transmutation_tablet' });
  event.remove({ output: 'projecte:philosophers_stone' });

  // Avaritia's final systems are recreated later as pack-specific milestones.
  event.remove({ output: 'avaritia:extreme_crafting_table' });
  event.remove({ output: 'avaritia:neutronium_ingot' });
  event.remove({ output: 'avaritia:infinity_ingot' });
});