// GTNH 1.21.1 — Cross-mod progression cores
// These items make Mekanism, AE2, and magic progression explicit.

StartupEvents.registry('item', event => {
  event.create('mekanism_machine_core')
    .texture('minecraft:item/iron_ingot')
    .tooltip('§2Core component for integrated Mekanism machinery');

  event.create('ae2_machine_core')
    .texture('minecraft:item/diamond')
    .tooltip('§bCore component for advanced ME infrastructure');

  event.create('arcane_machine_core')
    .texture('minecraft:item/amethyst_shard')
    .tooltip('§5Core component for Arcane progression');

  event.create('spirit_machine_core')
    .texture('minecraft:item:echo_shard')
    .tooltip('§8Core component for Spirit Arcana progression');
});