#  

ScrollGlassJS is a 2KB vanilla JavaScript library that enables 

drag and drop functionality with zero dependencies. 

By implementing this library, you will know by event the device the user is using. 

demo aqui. 

## Support:

### API Support: 

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
| Firefox | ❌ |
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

