// THEME CHANGER
// Set root, required to modify CSS Variables
let root = document.documentElement;
// Simple theme modifier
function themeMod(theme) {
    // modify CSS Variables based on theme selection
    switch(theme) {
        case "dark":
            root.style.setProperty('--primeB', "#252525");
            root.style.setProperty('--primeT', "#FFFFFF");
            root.style.setProperty('--secondB', "#555555");
            root.style.setProperty('--shadow', "0px 1px 2px 0px rgba(200, 200, 200, 0.8)");
        break;
        case "light":
            root.style.setProperty('--primeB', "#D5D5D5");
            root.style.setProperty('--primeT', "#000000");
            root.style.setProperty('--secondB', "#B5B5B5");
            root.style.setProperty('--shadow', "0px 1px 2px 0px rgba(50, 50, 50, 0.8)");
        break;
    }
    
}

// COLOR CHANGER
// CSS colors, credit: https://gist.github.com/bobspace/2712980
var CSS_COLOR_NAMES = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black",
    "blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral",
    "cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey",
    "darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon",
    "darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink",
    "deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro",
    "ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred",
    "indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral",
    "lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon",
    "lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime",
    "limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple",
    "mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue",
    "mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered",
    "orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink",
    "plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon",
    "sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow",
    "springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke",
    "yellow","yellowgreen"];
// color validation for name/HEX input via text-input
function colorCheck(color) {
    color = color.toLowerCase();
    var ind = CSS_COLOR_NAMES.indexOf(color);
    if (ind > -1) {
        // if in colors, return as is
        return color;
    }
    else {
        // if not in colors, assume it's HEX value, check for '#' and return
        if (!color.includes("#")) { color = '#' + color; }
        return color;
    }
    // RGB & HSV can be entered via input[type="color"]
}
// id merger/action mapping
function idCheck(id) {
    // modify id, so text and color inputs have same action
    if (id.includes("color_1")) { id = "color_1"; } // e.g., same action for color_1A & color_1B
    if (id.includes("color_2")) { id = "color_2"; }
    if (id.includes("color_3")) { id = "color_3"; }
    if (id.includes("color_4")) { id = "color_4"; }
    if (id.includes("color_5")) { id = "color_5"; }
    return id;
}
// color modifier
function colorSticker(id, color) {
    id = idCheck(id);               // id merger/action mapping
    color = colorCheck(color);      // color validation for name/HEX input via text-input
    var colEl, rowEl;
    switch(id) {
        case "color_1": colEl = document.getElementsByClassName("column_A");
                        rowEl = document.getElementsByClassName("row_1");
            break;
        case "color_2": colEl = document.getElementsByClassName("column_B");
                        rowEl = document.getElementsByClassName("row_2");
            break;
        case "color_3": colEl = document.getElementsByClassName("column_C");
                        rowEl = document.getElementsByClassName("row_3");
            break;
        case "color_4": colEl = document.getElementsByClassName("column_D");
                        rowEl = document.getElementsByClassName("row_4");
            break;
        case "color_5": colEl = document.getElementsByClassName("column_E");
                        rowEl = document.getElementsByClassName("row_5");
            break;
    }
    for(var i = 0; i < colEl.length; i++) {
        colEl[i].style.background = color;
        if (i > 0) {
            rowEl[i-1].style.color = color;
        }
    }
}

// TEXT CHANGER
// text modifier
function textUpdater(text) {
    text = text + "<br /><em>" + text + "</em><br /><strong>" + text + "</strong>";
    var display = document.getElementsByClassName("display");
    for(var i = 0; i < display.length; i++) {
        display[i].innerHTML = text;
    }
}