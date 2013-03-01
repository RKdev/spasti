'use strict';

Spasti.Component.RobotController = function(go, comp) {
    //public
    comp.speed = 10;

    //private
    var transform = go.getComponent('transform2d');
    
    //play the walk animation when it starts
    comp.$on('create', function() {
        go.getComponent('spriteAnimator').play('walk');
    });
    
    //move the robot accross the screen a little each frame
    comp.$on('update', function(deltaTime) {
        transform.position.x += comp.speed / deltaTime;
    });
};
Spasti.Component.RobotController.alias = "spasti.robot_controller";
Spasti.Component.RobotController.requires = ['spasti.anim.robot_separate'];
