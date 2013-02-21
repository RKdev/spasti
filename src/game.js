'use strict';

/**
 * This file is basic setup for the entire game.  It defines the namespaces the rest of the code uses, and
 * the configuration passed to the engine when it's instantiated.
 */

//setup namespace & sub namespaces for game
var Spasti = Spasti || {};

Spasti.Component = {};      //for game object components
Spasti.Prefab = {};         //for prefab definitions
Spasti.Scene = {};          //for scene definitions

//config passed to Javelin engine instance
Spasti.config = {
    name: "Spasti!",
    debug: true,
    loader: {
        baseUrl: "http://localhost/spasti/assets"
    },
    plugins: [
        Javelin.Plugin.Canvas2d
//        ,Javelin.Plugin.Input
//        ,Javelin.Plugin.Box2d
    ],
    options: {
        "canvas2d": {
            canvas: document.getElementById('game'),
            height: 600,
            width: 800
        }
    },
    scripts: [],
    requiredAssets: []
}