'use strict';

Spasti.Scene.AsteroidDefense = {
    name: "spasti.asteroid_defense",
    
    //this forces Javelin to load any required
    //assets defined in these components before
    //actually starting the scene
    requireAssets: [
        'spasti.laser',
        'spasti.laser_turret',
        'spasti.defense_drone',
        'spasti.whatever...'
    ]
};
