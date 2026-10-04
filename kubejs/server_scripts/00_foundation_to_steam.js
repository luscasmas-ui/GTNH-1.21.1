// GTNH 1.21.1 — Foundation → Steam
// First concrete progression layer.

ServerEvents.recipes(event => {
  // Primitive Engineering Kit
  // This is the first intentional step beyond pure vanilla survival.
  event.shaped('kubejs:primitive_engineering_kit', [
    'FI',
    'CS'
  ], {
    F: 'minecraft:flint',
    I: 'minecraft:iron_nugget',
    C: 'minecraft:copper_ingot',
    S: 'minecraft:string'
  });

  // Steam Engineering Core
  // Requires primitive engineering before Create's first major machine.
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

  // Mechanical Press becomes the first explicitly gated Steam-era machine.
  // The default Create recipe is replaced by a recipe that requires
  // the Steam Engineering Core.
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
});
