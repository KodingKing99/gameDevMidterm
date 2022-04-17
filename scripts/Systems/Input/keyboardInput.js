// --------------------------------------------------------------
//
// This system knows how to accept keyboard input and use that
// to move an entity, based on the entities 'keyboard-controlled'
// component settings.
//
// --------------------------------------------------------------
MyGame.systems.keyboardInput = (function () {

    'use strict';
    let keysDown = {};

    function keyPress(e) {
        e.preventDefault();
        keysDown[e.key] = e.timeStamp;
    }

    function keyRelease(e) {
        delete keysDown[e.key];
    }
    function keyRelease2(key) {
        delete keysDown[key];
    }

    
    // function
    function moveAll(entities, key, input){
        for(let id in entities){
            let entity = entities[id];
            if(entity.components.movable){
                entity.components.movable.facing = input.keys[key];
                entity.components.movable.moveDirection = input.keys[key];
            }
        }
    }
    function move(entity, key, input){
        if(entity.components.movable){
            entity.components.movable.facing = input.keys[key];
            entity.components.movable.moveDirection = input.keys[key];
        }
        // console.log(entity)
    }
    function stop(entity){
         if(entity.components.movable){
            // entity.components.movable.facing = MyGame.constants.direction.STOPPED;
            entity.components.movable.moveDirection = MyGame.constants.direction.STOPPED;
        }       
        // console.log(entity);
    }
    let moveCount = 0;
    function doMove(entities) {
        // console.log("in keyboard");
        for (let id in entities) {
            let entity = entities[id];
            if (entity.components['keyboard-controlled']) {
                let input = entity.components['keyboard-controlled'];
                for (let key in input.keys) {
                    if (keysDown[key]) {
                        moveCount += 1;
                        move(entity, key, input)
                        // keyRelease2(key);
                    }
                }
                if(moveCount === 0){
                    stop(entity);
                }
                moveCount = 0;
            }
        }
    }

    // --------------------------------------------------------------
    //
    // Public interface used to update entities based on keyboard input.
    //
    // --------------------------------------------------------------
    function update(entities, elapsedTime) {
        doMove(entities);
        
    }

    window.addEventListener('keydown', keyPress);
    window.addEventListener('keyup', keyRelease);

    let api = {
        update: update
    };

    return api;
}());
