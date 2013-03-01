'use strict';

Spasti.Component.RobotAnimationWithAtlas = function(go, comp) {
    
    //define animations on create
    comp.$on('create', function() {
        //disable until we know we've loaded & defined the animations needed
        go.disable();
        var animator = go.getComponent('spriteAnimator');

        //load assets on start
        go.engine.loadAsset('assets/robot.atlas.json', function(atlas) {
            
            //walk animation
            animator.define('walk', [
                atlas.images['robowalk00.png'],
                atlas.images['robowalk01.png'],
                atlas.images['robowalk02.png'],
                atlas.images['robowalk03.png'],
                atlas.images['robowalk04.png'],
                atlas.images['robowalk05.png'],
                atlas.images['robowalk06.png'],
                atlas.images['robowalk07.png'],
                atlas.images['robowalk08.png'],
                atlas.images['robowalk09.png'],
                atlas.images['robowalk10.png'],
                atlas.images['robowalk11.png'],
                atlas.images['robowalk12.png'],
                atlas.images['robowalk13.png'],
                atlas.images['robowalk14.png'],
                atlas.images['robowalk15.png'],
                atlas.images['robowalk16.png'],
                atlas.images['robowalk17.png'],
                atlas.images['robowalk18.png']
            ]);
            
            //activate
            go.enable();
        });
    });
};
Spasti.Component.RobotAnimationWithAtlas.alias = "spasti.anim.robot_atlas";
Spasti.Component.RobotAnimationWithAtlas.requires = ['spriteAnimator'];
