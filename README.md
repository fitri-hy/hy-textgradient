# Modules Text Gradient for React v.1.0.1

<img src="./Screenshot.png"/>
ReactJS modules are simple but have many advantages, one of which is that you can customize them freely.

## NPM Installation

```sh
npm install hy-textgradient
```

## Example Project Implemented

```sh
// Add - Impport module //
import TextGradient from "hy-textgradient";
//----//

const App = () => {
  return (
    <div>
    
      // Add - Default components //
      <TextGradient colors={["#ff0000", "#ffff00", "#00ff00"]} >	
        Your Text To Gradient Here
	  </TextGradient>
      //----//
      
    </div>
  );
};

export default App;
```

## Customization

| Atribute | Key | Description | Status |
|:---------|:-----------|:-----------|:-----------|
| `colors="key?"`|`{["#ff0000", "#ffff00", "#00ff00"]}`|Customize color, 2+ colors supported|required|
| `direction="key?"`|`horizontal` `vertical` `diagonal-left` `diagonal-right` |Customize gradient direction|optional|
| `decoration="key?"`|`underline` `overline` `line-through` `none`|Customize text decoration|optional|
| `style="key?"`|`normal` `bold` `italic`|Customize text style|optional|
| `size="key?"`|`normal` `s` `m` `x` `xl` `xxl` `xxxl`|Customize text size|optional|
| `font="key?"`|`Name font family` Support all web font|Customize font style|optional|
| `className="key?"`|Support variable css|Customize with css|optional|

## Full Customization

```sh
<TextGradient className="my-css" colors={["#ff0000", "#ffff00", "#00ff00"]} size="xxl" style="bold" decoration="underline" direction="diagonal-left" font="Arial">
  Your Text To Gradient Here
</TextGradient>
```

Happy Coding :)
Follow Me: <a href="https://hy-tech.my.id/">FOLLOW</a>
