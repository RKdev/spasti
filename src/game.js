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
Spasti.Plugin = {};         //for experimental engine plugins

//config passed to Javelin engine instance
Spasti.config = {
    name: "Spasti!",
    debug: true,
    loader: {
        assetUrl: "http://localhost/spasti/"
    },
    plugins: {
        "canvas2d": {
            renderTarget: '#game',            //TODO: actually implement this properly
            height: 768,
            width: 1024,
            framesPerSecond: 1000/30
        }
    },
    autoregisterComponents: Spasti.Component,
    autoregisterPrefabs: Spasti.Prefab,
    autoregisterScenes: Spasti.Scene,
    autoregisterPlugins: Spasti.Plugin,
    requireScripts: [],
    requiredAssets: []
};
