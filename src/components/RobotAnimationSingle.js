'use strict';

Spasti.Component.RobotAnimationSingle = function(go, comp) {
    
    //define animations on create
    comp.$on('create', function() {
        //disable until we know we've loaded & defined the animations needed
        go.disable();
        var animator = go.getComponent('spriteAnimator');
        
        var assets = [
            'assets/robot/robowalk00.png',
            'assets/robot/robowalk01.png',
            'assets/robot/robowalk02.png',
            'assets/robot/robowalk03.png',
            'assets/robot/robowalk04.png',
            'assets/robot/robowalk05.png',
            'assets/robot/robowalk06.png',
            'assets/robot/robowalk07.png',
            'assets/robot/robowalk08.png',
            'assets/robot/robowalk09.png',
            'assets/robot/robowalk10.png',
            'assets/robot/robowalk11.png',
            'assets/robot/robowalk12.png',
            'assets/robot/robowalk13.png',
            'assets/robot/robowalk14.png',
            'assets/robot/robowalk15.png',
            'assets/robot/robowalk16.png',
            'assets/robot/robowalk17.png',
            'assets/robot/robowalk18.png'
        ];

        //load assets on start
        go.engine.loadAsset(assets, function(images) {            
            animator.define('walk', images);
            go.enable();
        });
    });
};
Spasti.Component.RobotAnimationSingle.alias = "spasti.anim.robot_single";
Spasti.Component.RobotAnimationSingle.requires = ['spriteAnimator'];
