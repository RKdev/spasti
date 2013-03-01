'use strict';

Spasti.Scene.Testing = {
    name: "Testing",
    requiredAssets: [
        'spasti.robot'
    ],
    objects: [
        {
            name: "Robot",
            components: {
                "spasti.robot_manager": {
                    maxRobots: 100,
                    createDelay: 10,
                    destroyDelay: 10,
                    robotPrefab: 'spasti.fast_robot'
                },
            }
        }
    ]
};
