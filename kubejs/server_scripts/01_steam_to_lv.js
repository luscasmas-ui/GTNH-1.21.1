// GTNH 1.21.1 — Steam → LV
// The first electrical transition.

ServerEvents.recipes(event => {
  // LV Machine Core
  // Steam infrastructure remains a prerequisite for electrical technology.
  event.shaped('kubejs:lv_machine_core', [
    'GSG',
    'RCR',
    'GSG'
  ], {
    G: 'minecraft:gold_ingot',
    S: 'gtceu:steel_plate',
    R: 'minecraft:redstone',
    C: 'kubejs:steam_engineering_core'
  });

  // Replace the base GTCEu LV machine hull recipe.
  // LV machines are the first electrical machines and therefore cannot
  // appear before the Steam Age has been established.
  event.remove({ output: 'gtceu:lv_machine_hull' });

  event.shaped('gtceu:lv_machine_hull', [
    'SPS',
    'PCP',
    'SPS'
  ], {
    S: 'gtceu:steel_plate',
    P: 'gtceu:iron_plate',
    C: 'kubejs:lv_machine_core'
  });

  // Make the first LV circuit explicitly dependent on the LV core.
  event.remove({ output: 'gtceu:basic_electronic_circuit' });

  event.shaped('gtceu:basic_electronic_circuit', [
    'RCR',
    'GPG',
    'RCR'
  ], {
    R: 'minecraft:redstone',
    C: 'minecraft:copper_ingot',
    G: 'minecraft:gold_ingot',
    P: 'kubejs:lv_machine_core'
  });
});
