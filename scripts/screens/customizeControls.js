MyGame.screens['customizeControlsScreen'] = (function (keyboard) {
    function initialize() {
        //     // do something
        // document.getElementById('customizeControlsBackButt').addEventListener(
        //     'click', () => { game.showScreen('mainMenu'); }
        // );
        //     // if(key)
        //     // document.getElementById('currentMoveUp').innerHTML += keyboard.currentControls['MoveUp']
        // }

    }
        function changeControl(domElement, control) {
            domElement.innerHTML = "";
            domElement.innerHTML += "Press Key to Change Control";
            window.addEventListener(
                'keydown',
                function changeKey(e) {
                    keyboard.registerControl(e.key, control);
                    window.removeEventListener('keydown', changeKey)
                    render();
                }
            );
        }
    function render() {
        console.log("rendering controls screen");
        if (keyboard.controls[MyGame.constants.direction.UP]) {
            let myKey = document.getElementById('currentMoveUp');
            // clear innerHTML
            myKey.innerHTML = "";
            myKey.innerHTML += keyboard.controls[MyGame.constants.direction.UP]
        }
        if (keyboard.controls[MyGame.constants.direction.DOWN]) {
            let myKey = document.getElementById('currentMoveDown');
            // clear innerHTML
            myKey.innerHTML = "";
            myKey.innerHTML += keyboard.controls[MyGame.constants.direction.DOWN]
        }
        if (keyboard.controls[MyGame.constants.direction.RIGHT]) {
            let myKey = document.getElementById('currentMoveRight');
            myKey.innerHTML = "";
            myKey.innerHTML += keyboard.controls[MyGame.constants.direction.RIGHT]
        }
        if (keyboard.controls[MyGame.constants.direction.LEFT]) {
            let myKey = document.getElementById('currentMoveLeft');
            myKey.innerHTML = "";
            myKey.innerHTML += keyboard.controls[MyGame.constants.direction.LEFT]
        }
    }
    function run() {
        render();
        if (keyboard.controls[MyGame.constants.direction.UP]) {
            let myKey = document.getElementById('currentMoveUp');
            myKey.addEventListener(
                'click', () => { changeControl(myKey, MyGame.constants.direction.UP) }
            )
        }
        if (keyboard.controls[MyGame.constants.direction.DOWN]) {
            let myKey = document.getElementById('currentMoveDown');
            myKey.addEventListener(
                'click', () => { changeControl(myKey, MyGame.constants.direction.DOWN) }
            )
        }
        if (keyboard.controls[MyGame.constants.direction.RIGHT]) {
            let myKey = document.getElementById('currentMoveRight');
            myKey.addEventListener(
                'click', () => { changeControl(myKey, MyGame.constants.direction.RIGHT) }
            )
        }
        if (keyboard.controls[MyGame.constants.direction.LEFT]) {
            let myKey = document.getElementById('currentMoveLeft');
            myKey.addEventListener(
                'click', () => { changeControl(myKey, MyGame.constants.direction.LEFT) }
            )
        }

    }

    return {
        initialize: initialize,
        run: run
    };
}(MyGame.systems.keyboardInput))