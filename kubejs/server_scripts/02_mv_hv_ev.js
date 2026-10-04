// GTNH 1.21.1 — LV → MV → HV → EV
// Three electrical ages are established here as a continuous backbone.
//
// Design:
// MV: aluminium + wrought iron + Good Electronic Circuits.
// HV: stainless steel + titanium + Advanced Electronic Circuits.
// EV: titanium + polyethylene + Advanced Electronic Circuits.
//
// Each tier receives a dedicated progression core. The stock GTCEu hull
// recipes are replaced so the tier transition itself is an explicit gate.

ServerEvents.recipes(event => {
  // -------------------------
  // MV — Medium Voltage
  // -------------------------
  event.shaped('kubejs:mv_machine_core', [
    'ACA',
    'WGW',
    'ACA'
  ], {
    A: 'gtceu:aluminium_plate',
    C: 'gtceu:good_electronic_circuit',
    W: 'gtceu:wrought_iron_plate',
    G: 'minecraft:gold_ingot'
  });

  event.remove({ output: 'gtceu:mv_machine_hull' });

  event.shaped('gtceu:mv_machine_hull', [
    'WAW',
    'ACA',
    'WGW'
  ], {
    W: 'gtceu:wrought_iron_plate',
    A: 'gtceu:aluminium_plate',
    C: 'kubejs:mv_machine_core',
    G: 'gtceu:copper_single_wire'
  });

  // -------------------------
  // HV — High Voltage
  // -------------------------
  event.shaped('kubejs:hv_machine_core', [
    'SAS',
    'CDC',
    'SAS'
  ], {
    S: 'gtceu:stainless_steel_plate',
    A: 'gtceu:advanced_electronic_circuit',
    D: 'minecraft:diamond',
    C: 'gtceu:copper_single_wire'
  });

  event.remove({ output: 'gtceu:hv_machine_hull' });

  event.shaped('gtceu:hv_machine_hull', [
    'STS',
    'ACA',
    'SDS'
  ], {
    S: 'gtceu:stainless_steel_plate',
    T: 'gtceu:titanium_plate',
    A: 'gtceu:aluminium_plate',
    C: 'kubejs:hv_machine_core',
    D: 'gtceu:copper_single_wire'
  });

  // -------------------------
  // EV — Extreme Voltage
  // -------------------------
  event.shaped('kubejs:ev_machine_core', [
    'TAT',
    'CNC',
    'TAT'
  ], {
    T: 'gtceu:titanium_plate',
    A: 'gtceu:advanced_electronic_circuit',
    C: 'gtceu:aluminium_single_wire',
    N: 'minecraft:netherite_ingot'
  });

  event.remove({ output: 'gtceu:ev_machine_hull' });

  event.shaped('gtceu:ev_machine_hull', [
    'TPT',
    'ACA',
    'TNT'
  ], {
    T: 'gtceu:titanium_plate',
    P: 'gtceu:polyethylene_plate',
    A: 'gtceu:aluminium_plate',
    C: 'kubejs:ev_machine_core',
    N: 'gtceu:aluminium_single_wire'
  });
});
