'use strict';

//just to experiment with creating multiple game objects
Spasti.Component.RobotManager = function(go, comp) {
    //public api
    comp.maxRobots = 20;
    comp.createDelay = 333;
    comp.destroyDelay = 1000;
    
    //private
    var lastTimeCreated = 0;
    var lastTimeDestroyed = 0;
    var robots = [];
    var y = 0;
    
    //behavior
    comp.$on('update', function(deltaTime) {
        var time = go.engine.time;
        
        //create a new robot
        if (time >= lastTimeCreated + comp.createDelay) {
            lastTimeCreated = time;

            if (robots.length < comp.maxRobots) {
                var robot = go.engine.instantiate(Spasti.Prefab.Robot);
                var t = robot.getComponent('transform2d');
                robots.push(robot);
                y += 30;
                t.position.y = y;
            }
        }
        
        //or destroy a new robot
        if (time >= lastTimeDestroyed + comp.destroyDelay && robots.length === comp.maxRobots) {
            lastTimeDestroyed = time;
            
            var index = Math.floor(Math.random() * (comp.maxRobots));
            console.log("destroying " + index);
            var deleted = robots.splice(index, 1);
            deleted[0].destroy();
        }
    });

};
Spasti.Component.RobotManager.alias = "spasti.robot_manager";
Javelin.register(Spasti.Component.RobotManager);
