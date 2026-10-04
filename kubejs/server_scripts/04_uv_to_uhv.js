// GTNH 1.21.1 — UV → UHV
// UHV is the final conventional GregTech electrical age.
// Its transition consumes a UV Machine Hull and requires extreme-tier materials.

ServerEvents.recipes(event => {
  event.shaped('kubejs:uhv_machine_core', [
    'NQN',
    'UHU',
    'NQN'
  ], {
    N: '#forge:plates:neutronium',
    Q: 'gtceu:quantum_star',
    U: 'gtceu:uv_machine_hull',
    H: 'minecraft:nether_star'
  });

  event.remove({ output: 'gtceu:uhv_machine_hull' });

  event.shaped('gtceu:uhv_machine_hull', [
    'NPN',
    'CEC',
    'NPN'
  ], {
    N: '#forge:plates/neutronium',
    P: '#forge:plates/naquadah_alloy',
    C: 'gtceu:europium_single_cable',
    E: 'kubejs:uhv_machine_core'
  });
});
