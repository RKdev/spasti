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
        assetUrl: "https://www.udacity.com/"
    },
    plugins: [
        Javelin.Plugin.Canvas2d
//        ,Javelin.Plugin.Input
//        ,Javelin.Plugin.Box2d
    ],
    options: {
        "canvas2d": {
            target: '#game',            //TODO: actually implement this properly
            height: 1024,
            width: 768,
            framesPerSecond: 1000/30
        }
    },
    autoregisterComponents: Spasti.Component,
    autoregisterPrefabs: Spasti.Prefab,
    autoregisterScenes: Spasti.Scene,
    scripts: [],
    requiredAssets: []
};
