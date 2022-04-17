MyGame.systems.render['static-renderer'] = (function(graphics){
    function render(entities){
        graphics.clear();
        for (let key in entities) {
            let entity = entities[key];
            if (entity.components.position && entity.components['static-sprite'] && entity.components.size && entity.components.rotation) {
                let mImage = MyGame.assets[entity.components['static-sprite'].assetKey];
                graphics.drawTexture(mImage, entity.components.position, entity.components.rotation.rotation, entity.components.size)
            }
        }
    }
    function update(entities, elapsedTime){
        render(entities);
    }
    return {
        update: update
    }
}(MyGame.systems.render.graphics))