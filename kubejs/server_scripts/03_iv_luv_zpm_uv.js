// GTNH 1.21.1 — EV → IV → LuV → ZPM → UV
// Four high-tier electrical ages are established here.
// Each transition consumes the previous tier hull.

ServerEvents.recipes(event => {
  event.shaped('kubejs:iv_machine_core', [
    'TPT',
    'EHE',
    'TPT'
  ], {
    T: '#forge:plates/tungsten_steel',
    P: '#forge:plates/platinum',
    E: 'gtceu:ev_machine_hull',
    H: 'minecraft:nether_star'
  });

  event.remove({ output: 'gtceu:iv_machine_hull' });
  event.shaped('gtceu:iv_machine_hull', [
    'TPT',
    'CEC',
    'TPT'
  ], {
    T: '#forge:plates/tungsten_steel',
    P: '#forge:plates/polytetrafluoroethylene',
    C: 'gtceu:platinum_single_cable',
    E: 'kubejs:iv_machine_core'
  });

  event.shaped('kubejs:luv_machine_core', [
    'RNR',
    'IHI',
    'RNR'
  ], {
    R: '#forge:plates/rhodium_plated_palladium',
    N: 'gtceu:niobium_titanium_single_cable',
    I: 'gtceu:iv_machine_hull',
    H: 'minecraft:nether_star'
  });

  event.remove({ output: 'gtceu:luv_machine_hull' });
  event.shaped('gtceu:luv_machine_hull', [
    'RPR',
    'CEC',
    'RPR'
  ], {
    R: '#forge:plates/rhodium_plated_palladium',
    P: '#forge:plates/polytetrafluoroethylene',
    C: 'gtceu:niobium_titanium_single_cable',
    E: 'kubejs:luv_machine_core'
  });

  event.shaped('kubejs:zpm_machine_core', [
    'NVN',
    'LHL',
    'NVN'
  ], {
    N: '#forge:plates/naquadah_alloy',
    V: 'gtceu:vanadium_gallium_single_cable',
    L: 'gtceu:luv_machine_hull',
    H: 'minecraft:nether_star'
  });

  event.remove({ output: 'gtceu:zpm_machine_hull' });
  event.shaped('gtceu:zpm_machine_hull', [
    'NPN',
    'CEC',
    'NPN'
  ], {
    N: '#forge:plates/naquadah_alloy',
    P: '#forge:plates/polybenzimidazole',
    C: 'gtceu:vanadium_gallium_single_cable',
    E: 'kubejs:zpm_machine_core'
  });

  event.shaped('kubejs:uv_machine_core', [
    'DYD',
    'ZHZ',
    'DYD'
  ], {
    D: '#forge:plates/darmstadtium',
    Y: 'gtceu:yttrium_barium_cuprate_single_cable',
    Z: 'gtceu:zpm_machine_hull',
    H: 'minecraft:nether_star'
  });

  event.remove({ output: 'gtceu:uv_machine_hull' });
  event.shaped('gtceu:uv_machine_hull', [
    'DPD',
    'CEC',
    'DPD'
  ], {
    D: '#forge:plates/darmstadtium',
    P: '#forge:plates/polybenzimidazole',
    C: 'gtceu:yttrium_barium_cuprate_single_cable',
    E: 'kubejs:uv_machine_core'
  });
});
