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
});
