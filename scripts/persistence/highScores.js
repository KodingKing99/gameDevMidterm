// ------------------------------------------------------------------
// 
// This is the game module.  Everything about the game is located in 
// this object.
//
// ------------------------------------------------------------------
// let MyGame = {
    MyGame.persistence.highScores = (function () {
        'use strict';
        let highScores = {
            1: 0,
            2: 0,
            3: 0,
        };
        let previousScores = localStorage.getItem('MyGame.persistence.highScores');

        if (previousScores !== null) {
            highScores = JSON.parse(previousScores);
        }

        function add(value) {
            // highScores[key] = value;
            // if(value > highScores[3]){
                
            // } 
            if(value > highScores[1]){
                highScores[3] = highScores[2];
                highScores[2] = highScores[1];
                highScores[1] = value;
            }
            else if(value > highScores[2]){
                highScores[3] = highScores[2];
                highScores[2] = value;
            }
            else if(value > highScores[3]){
                highScores[3] = value;
            }
            
            localStorage['MyGame.persistence.highScores'] = JSON.stringify(highScores);
        }

        function remove(key) {
            delete highScores[key];
            localStorage['MyGame.persistence.highScores'] = JSON.stringify(highScores);
        }

        // function report() {
        //     let htmlNode = document.getElementById('div-console');
            
        //     htmlNode.innerHTML = '';
        //     for (let key in highScores) {
        //         htmlNode.innerHTML += ('Key: ' + key + ' Value: ' + highScores[key] + '<br/>'); 
        //     }
        //     htmlNode.scrollTop = htmlNode.scrollHeight;
        // }

        return {
            add : add,
            remove : remove,
            get highScores() { return {...highScores}; }
        };
    }())