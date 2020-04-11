
# FireScrollJS

FireScrollJS is a 2 KB vanilla JavaScript library that allows you to detect which scroll device the user is using when scrolling. Can detect **mouse** or **trackpad** when scrolling, on any HTML tag.

[TRY THE DEMO.](https://pedroos46.github.io/FireScrollJS/)

## Usage:
FireSrollJS needs the scroll event from Document or Window, to be able to detect the device.   

    document.onwheel = (e) => {  
      let isTrackpad = fireScroll.isTrackpad(e);  
    };

    document.onwheel = (e) => {  
      let isMouse = fireScroll.isMouse(e);  
    };
    
    window.onwheel = (e) => {  
      let isMouse = fireScroll.isMouse(e);  
    };


  
Can also be used in selected elements.  
         
    const square = document.getElementById("square");  
    square.addEventListener("wheel", (e) => {  
      let isTrackpad = fireScroll.isTrackpad(e);  
    });


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


### Browser Support: 

|          | Desktop                                  | Mobile |
|----------|------------------------------------------|--------|
| Chrome   | ✅                                       |    ❌  |
| Firefox  | ✅☢️ Trackpad detection could be inaccurate |    ❌  |
| Safari   | ✅ Not as accurate as Chromium           |    ❌  |
| Opera    | ✅                                       |    ❌  |
| Edge     | ✅                                       |    ❌  |
| Chromium | ✅                                       |    ❌  |

