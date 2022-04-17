MyGame.components.StaticSprite = function(spec){
    return {
        get name(){return 'static-sprite'},
        get assetKey(){return spec.key},
    }   
}