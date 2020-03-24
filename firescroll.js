/**
 * @license
 * Copyright (c) 2020. Roger Pedrós Villorbina. Licensed under the Apache License, Version 2.0.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * @version 1.0.0
 *
 * */


(function (window) {
    function TM_DetecionOnScroll() {
        var _TM_DetecionOnScroll = {};

        let Mouse = "mouse";
        let TrackpPad = "trackpad";

        // This variable will be inaccessible to the user, only can be visible in the scope of your library.
        let params = {
            posX: 0, posY: 0, lastXvalues: [null, null, null], lastYvalues: [null, null, null], state: null
        };

        let main = {
            logic: (e) => {
                params.posX -= e.deltaX;
                params.lastXvalues.shift();
                params.lastXvalues.push(params.posX);

                params.posY -= e.deltaY;
                params.lastYvalues.shift();
                params.lastYvalues.push(params.posY);


                //DATA EVALUATION
                //(lastXvalues.every( (val, i, arr) => val === arr[0] )) check if all numbers on an array is equal to each other.
                let Xequal = params.lastXvalues.every((val, i, arr) => val === arr[0]); // X values of array are equal to each other = NEVER CHANGE. IF EQUAL = TRUE.
                let Yequal = params.lastYvalues.every((val, i, arr) => val === arr[0]); // Y values of array are equal to each other = NEVER CHANGE. IF EQUAL = TRUE.
                let YdecimaEqual = params.lastYvalues.map((y) => {return y % 1}).every((val, i, arr) => val === arr[0]); //Get the decimal part of Y values and check if are equal. IF EQUAL = NEVER CHANGE. IF EQUAL = TRUE.


                //IF MOUSE: X never change. Y change. Y has a changer decimal number.
                if ((Xequal) && !(Yequal) && !(YdecimaEqual)) {
                    params.state = Mouse;
                    return;
                }

                //IF TRACKPAD: X and Y changes. Y can carry some decimal numbers that never change.
                if (!(Xequal) && !(Yequal) && (YdecimaEqual)) {
                    params.state = TrackpPad;
                    return;
                }

                //IF NONE OF OTHER: detect deficient deltaX or deltaY data input form browser
                if( params.state === null){
                    if(YdecimaEqual  && Xequal && !params.lastXvalues.some((val) => val === null)){
                        params.state = TrackpPad;
                        return;
                    }

                    if(!YdecimaEqual && !Xequal && params.lastXvalues.some((val) => val === null)) {
                        params.state = Mouse;
                        return;
                    }
                }

            }
        };


        _TM_DetecionOnScroll.isTrackpad = (e) => {
            main.logic(e);
            if (params.state === TrackpPad) {
                return true;
            }

            if (params.state === Mouse) {
                return false;
            }

            if (params.state === null) {
                return null;
            }


        };

        _TM_DetecionOnScroll.isMouse = function (e) {
            params.state = main.logic(e);
            if (params.state === TrackpPad) {
                return false;
            }

            if (params.state === Mouse) {
                return true;
            }

            if (params.state === null) {
                return null;
            }

        };

        return _TM_DetecionOnScroll;
    }

    // Library is globally accesible
    if (typeof (window.fireScroll) === 'undefined') {
        window.fireScroll = TM_DetecionOnScroll();
    }

})(window);
