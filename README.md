# FireScrollJS


FireScrollJS is a 2 KB vanilla JavaScript library that allows you to detect which scroll device the user is using when scrolling.Can detect **mouse** or **trackpad** when scrolling, on any HTML tag.

DEMO.

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

FireSrollJS needs the scroll event to be able to detect.

    document.onwheel = (e) => {  
      fireScroll.isTrackPad(e);  
    };

