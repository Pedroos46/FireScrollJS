# FireScrollJS


FireScrollJS is a 2 KB vanilla JavaScript library that allows detecting from which devices the user scrolls. Can detect **mouse** or **trackpad** when scrolling, on any HTML tag. 

DEMO.

## Support:

### API Support: 
Works only with the standarized ECMAScript 6 APIs.

| API |  |
|--|--|
| [onwheel Event](https://developer.mozilla.org/es/docs/Web/API/Element/wheel_event) | ✅ |
| [WheelEvent](https://developer.mozilla.org/es/docs/Web/API/WheelEvent) | ✅ |
| MouseWheelEvent | ❌ Non-Standard & Deprecated |
| MouseScrollEvent | ❌ Non-Standard & Deprecated |
| onmousewheel Event | ❌ Non-Standard |
| onsroll | ❌ |
| DOMMouseScroll | ❌ Non-Standard & Deprecated


check examples
### Browser Support: 
|Browser|  |
|--|--|
| Chrome | ✅  |
| Firefox | ❌ Not yet |
| Safari | ☢️ |
| Opera | ☢️ |
| Edge | ✅ |
| Chromium | ✅ |

### Device Support: 
|Device|  |
|--|--|
| Desktop | ✅|
| Mobile | ☢️|


## Usage:



    document.onwheel = (e) => {  
      TM_detection.isTrackPad(e);  
    };

