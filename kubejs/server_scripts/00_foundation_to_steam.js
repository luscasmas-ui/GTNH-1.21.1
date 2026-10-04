// GTNH 1.21.1 — Foundation → Steam
// Steam is the first real industrial age.
// The Steam Engineering Core gates the first mechanical toolkit.

ServerEvents.recipes(event => {
  event.shaped('kubejs:primitive_engineering_kit', [
    'FI',
    'CS'
  ], {
    F: 'minecraft:flint',
    I: 'minecraft:iron_nugget',
    C: 'minecraft:copper_ingot',
    S: 'minecraft:string'
  });

  event.shaped('kubejs:steam_engineering_core', [
    'CAC',
    'IPI',
    'CRC'
  ], {
    C: 'create:cogwheel',
    A: 'create:andesite_alloy',
    I: 'minecraft:iron_ingot',
    P: 'kubejs:primitive_engineering_kit',
    R: 'minecraft:redstone'
  });

  // Core Create machines are gated behind Steam infrastructure.
  event.remove({ output: 'create:mechanical_press' });
  event.shaped('create:mechanical_press', [
    'CPC',
    'IAI',
    'SIS'
  ], {
    C: 'create:cogwheel',
    P: 'kubejs:steam_engineering_core',
    I: 'minecraft:iron_ingot',
    A: 'create:andesite_casing',
    S: 'create:shaft'
  });

  event.remove({ output: 'create:mechanical_mixer' });
  event.shaped('create:mechanical_mixer', [
    ' S ',
    'CPA',
    ' I '
  ], {
    S: 'create:shaft',
    C: 'create:cogwheel',
    P: 'kubejs:steam_engineering_core',
    A: 'create:andesite_casing',
    I: 'minecraft:iron_ingot'
  });

  event.remove({ output: 'create:deployer' });
  event.shaped('create:deployer', [
    ' S ',
    'APA',
    ' I '
  ], {
    S: 'create:shaft',
    A: 'create:andesite_casing',
    P: 'kubejs:steam_engineering_core',
    I: 'minecraft:iron_ingot'
  });

  event.remove({ output: 'create:mechanical_saw' });
  event.shaped('create:mechanical_saw', [
    ' I ',
    'CPC',
    ' S '
  ], {
    I: 'minecraft:iron_ingot',
    C: 'create:cogwheel',
    P: 'kubejs:steam_engineering_core',
    S: 'create:shaft'
  });

  event.remove({ output: 'create:mechanical_drill' });
  event.shaped('create:mechanical_drill', [
    ' I ',
    'CPC',
    ' S '
  ], {
    I: 'minecraft:iron_ingot',
    C: 'create:cogwheel',
    P: 'kubejs:steam_engineering_core',
    S: 'create:shaft'
  });

  event.remove({ output: 'create:mechanical_crafter' });
  event.shaped('create:mechanical_crafter', [
    ' I ',
    'CPC',
    ' S '
  ], {
    I: 'minecraft:iron_ingot',
    C: 'create:cogwheel',
    P: 'kubejs:steam_engineering_core',
    S: 'create:shaft'
  });
});
