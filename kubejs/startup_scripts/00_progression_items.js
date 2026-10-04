// GTNH 1.21.1 — Foundation progression items
// Custom progression components are registered during startup.

StartupEvents.registry('item', event => {
  event.create('primitive_engineering_kit')
    .texture('minecraft:item/flint')
    .tooltip('§7Foundation of primitive industrial engineering');

  event.create('steam_engineering_core')
    .texture('minecraft:item/iron_ingot')
    .tooltip('§8Core component for the Steam Age');
});
