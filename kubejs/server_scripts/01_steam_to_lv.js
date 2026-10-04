// GTNH 1.21.1 — Steam → LV
// The first electrical transition.

ServerEvents.recipes(event => {
  const greg = event.recipes.gtceu;

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

  event.remove({ output: 'gtceu:basic_electronic_circuit' });

  greg.circuit_assembler('gtnh_basic_electronic_circuit')
    .itemInputs(
      'gtceu:phenolic_printed_circuit_board',
      '2x gtceu:vacuum_tube',
      '2x gtceu:resistor',
      '2x gtceu:red_alloy_single_cable'
    )
    .inputFluids('gtceu:tin 144')
    .itemOutputs('2x gtceu:basic_electronic_circuit')
    .duration(100)
    .EUt(30);
});