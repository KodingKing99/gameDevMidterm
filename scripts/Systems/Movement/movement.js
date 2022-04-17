MyGame.systems.movement = (function(){
    // TODO: Move this into a component
    let MOVERATE = 4;
    let mCommandPat = {};
    mCommandPat[MyGame.constants.direction.UP] = function(entity, elapsedTime){
        entity.components.position.y -= MOVERATE * elapsedTime;
    }

    mCommandPat[MyGame.constants.direction.DOWN] = function(entity, elapsedTime){
        entity.components.position.y += MOVERATE * elapsedTime;
    }

    mCommandPat[MyGame.constants.direction.RIGHT] = function(entity, elapsedTime){
        entity.components.position.x += MOVERATE * elapsedTime;
    }

    mCommandPat[MyGame.constants.direction.LEFT] = function(entity, elapsedTime){
        entity.components.position.x -= MOVERATE * elapsedTime;
    }

    mCommandPat[MyGame.constants.direction.STOPPED] = function(entity, elapsedTime){
        // do nothing
    }
    function doMove(entities, elapsedTime){
        for(let id in entities){
            let entity = entities[id];
            if(entity.components.movable){
                let dir = entity.components.movable.moveDirection;
                mCommandPat[dir](entity, elapsedTime); 
            }
        }
    }
    function update(entities, elapsedTime){
        doMove(entities, elapsedTime);
        // console.log(entities);
    }
    return {
        update: update
    }
}())