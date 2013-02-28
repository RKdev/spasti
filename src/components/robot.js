'use strict';

Spasti.Component.Robot = function(go, comp) {
    //public
    comp.speed = 10;

    //private
    var transform = go.getComponent('transform2d');    
    
    //play the walk animation when it starts
    comp.$on('create', function() {
        go.getComponent('spriteAnimator').play('walk');
    });
    
    //move the robot accross the screen
    comp.$on('update', function(deltaTime) {
        transform.position.x += comp.speed / deltaTime;
    });
};
Spasti.Component.Robot.alias = "spasti.robot";
//Spasti.Component.Robot.requires = ['sprite'];
Spasti.Component.Robot.requires = ['spasti.anim.robot'];

