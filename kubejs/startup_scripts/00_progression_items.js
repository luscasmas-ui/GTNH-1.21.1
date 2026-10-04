// GTNH 1.21.1 — Foundation progression items
// Custom components are used as explicit gates between technological stages.

StartupEvents.registry('item', event => {
  event.create('primitive_engineering_kit')
    .texture('minecraft:item/flint')
    .tooltip('§7Foundation of primitive industrial engineering');

  event.create('steam_engineering_core')
    .texture('minecraft:item/iron_ingot')
    .tooltip('§8Core component for the Steam Age');

  event.create('lv_machine_core')
    .texture('minecraft:item/gold_ingot')
    .tooltip('§bCore component for Low Voltage electrical machinery');

  event.create('mv_machine_core')
    .texture('minecraft:item/aluminium_ingot')
    .tooltip('§9Core component for Medium Voltage electrical machinery');

  event.create('hv_machine_core')
    .texture('minecraft:item/diamond')
    .tooltip('§cCore component for High Voltage electrical machinery');

  event.create('ev_machine_core')
    .texture('minecraft:item/netherite_ingot')
    .tooltip('§5Core component for Extreme Voltage electrical machinery');
});
