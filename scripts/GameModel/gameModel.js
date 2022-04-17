MyGame.gameModel = function(){
    'use strict';
    let entities = {};
    let GAME_WIDTH = MyGame.systems.render.graphics.width;
    let GRID_SIZE = 10;
    
    function initalizeEntityAtXY(x, y){
        let mEntity = MyGame.systems.entityFactory.createEntity();
        mEntity.addComponent(MyGame.components.Size({ x: GAME_WIDTH / GRID_SIZE, y: GAME_WIDTH / GRID_SIZE }))
        mEntity.addComponent(MyGame.components.Rotation({ rotation: 0 }));
        mEntity.addComponent(MyGame.components.Position({x: x, y: y}));
        return mEntity;
    }
    function initalizeSparkle(x, y){
        let mEntity = initalizeEntityAtXY(x, y);
        mEntity.addComponent(MyGame.components.StaticSprite({key: 'sparkle'}));
        let controls = MyGame.systems.keyboardInput.controls;
        // for()
        let keys = {};
        for(let dir in controls){
            let control = controls[dir];
            keys[control] = dir;
        }
        mEntity.addComponent(MyGame.components.KeyboardControlled({
            keys: keys,
        }));
        mEntity.addComponent(MyGame.components.Movable({
            moveDirection: MyGame.constants.direction.STOPPED,
            facing: MyGame.constants.direction.UP,
        }))
        return mEntity;
    }
    function addSparkle(x, y, entities){
        let mEntity = initalizeSparkle(x, y);
        entities[mEntity.id] = mEntity;
    }
    function initialize(){
        addSparkle(GAME_WIDTH / 2, GAME_WIDTH / 2, entities);
        console.log(entities);
    }
    function update(elapsedTime){
        MyGame.systems.keyboardInput.update(entities, elapsedTime);
        MyGame.systems.movement.update(entities, elapsedTime);
        MyGame.systems.render['static-renderer'].update(entities, elapsedTime);
    }
    initialize();
    return {
        update: update
    }
}