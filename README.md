## Announcements
•	🎉 This is the first version of ui-kit-native

•	🥰 We still have a lot of bugs. If you find any conflict, please leave a message at [new issue](https://github.com/dpain99/ui-kit-native/issues)


## ui-kit-native
![Static Badge](https://img.shields.io/badge/npm_package-v1.0.4-green?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fui-kit-native&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fui-kit-native)
 ![Static Badge](https://img.shields.io/badge/platform-android%7Cios-blue)

A beautiful, flexible UI package, production-ready component based on react-native components.

The goal of `ui-kit-native` is expanding the original `React Native component` by adding animations, style customization options, and new features, while still providing a simple API.




## Features
•	Plain simple and flexibel API

•	Easy to edit

•	Friendly for React Native apps

•	Replace and extend basic react native components


## Setup
This library is available on npm, install it:
```
npm i ui-kit-native

```
We use the following dependencies:

    "react": ">=18.x.x",
    "react-native": ">=0.71.x",
    "react-native-modal": ">=13.x.x",
    "react-native-svg": ">=13.11.x",
    "react-native-vector-icons": ">=10.x.x"

## Usage

We have all the basic components that make up the user interface like: input, button, view, layout...

Since `ui-kit-native` is an extension of the original React Native component, it works in a similar fashion.

1. Import `ui-kit-native`:

   ```JS
    import {Button, FormInput, LayoutContainer} from 'ui-kit-native';

   ```
2. Create a component using the basic components of ui-kit-native, similar to the usage of the basic React Native components:
   ```JS
       const HomeScreen = () => {
           return (
              <LayoutContainer>
                  <HeaderBar />
                  <FormInput label="Full name" placeHolder="Input your name" />
                  <FormInput
                     label="Password"
                     placeHolder="Input your password"
                     passWord={true}
                    />
                  <Button title="Login" />
              </LayoutContainer>
                 );
               };
       export default HomeScreen;
   ```

That's the basic way to use ui-kit-react native. We will go into more detail in the next section.

## List Components And Props

### 1. View

|No. | Name | Description|
|---|---|---|
|1|`LayoutContainer`| LayoutContainer is a container used to wrap child components in your component|
|2|`HeaderBar`| Used to display the header of the screen |
|3|`Divider`|Divider is a horizontal bar |

#### 1.1 LayoutContainer

Like Views in React Native, LayoutContainer wraps components with pre-set styles.

If you don't like these built-in styles, you can freely customize the parameters accordingly.

|Name |Type| Defaul | Description|
|---|---|---|---|
|`sx`|`StyleProp`/`undefined`|`undefined`|set style for background children|
|`sxInferior`|`StyleProp`/`undefined`|`undefined`|set style for background container|

#### 1.2 HeaderBar

Use to display the menu section in the top bar, with pre-set styles.

|Name |Type| Defaul | Description|
|---|---|---|---|
|`title`|`string`/`undefined`|`undefined`|set title for HeaderBar|
|`sxTitle`|`string`/`undefined`|`undefined`|set style for title|
|`sx`|`string`/`undefined`|`undefined`|set style for HeaderBar background|
|`leftIcon`|`React.ReactNode`/`undefined`|`undefined`|set the icon on the left side HeaderBar|
|`rightIcon`|`React.ReactNode`/`undefined`|`undefined`|set the icon on the right side HeaderBar|
|`pressLeftIcon`|`funtion`/`undefined`|`undefined`|set function press for icon on the left side|
|`pressRightIcon`|`function`/`undefined`|`undefined`|set function press for icon on the right side|

#### 1.3 Divider

Show a horizontal bar, you can freely customize the style.

|Name |Type| Defaul | Description|
|---|---|---|---|
|`sx`|`StyleProp`/`undefined`|`undefined`|set style for divider|

You can add <Text> for Divider to make a title for Divider, like:
  ```JS
     <Divider>
        <Text>Divider Tittle</Text>
     </Divider>
  ```

### 2. Input

An improved and enhanced type of TextInput.

|No. | Name | Description|
|---|---|---|
|1|`FormInput`| similar to TextInput, but with a few tweaks and built-in styles |
|2|`InputDropDown`| display a list of options for the user to choose |


#### 2.1 FormInput

|Name |Type| Defaul | Description|
|---|---|---|---|
|`value`|`any`|`undefined`|value of FormInput|
|`onChangeValue`|`any`|`undefined`|set value for FormInput|
|`placeHolder`|`string`/`undefined`|`undefined`|set placeHolder for FormInput|
|`colorPlaceHolder`|`string`/`undefined`|`undefined`|set color of placeHolder for FormInput|
|`containerStyle`|`ViewStyle`/`undefined`|`undefined`|set style for FormInput container|
|`iconLeft`|`React.ReactNode`/`undefined`|`undefined`|set the icon on the left side FormInput|
|`iconRight`|`React.ReactNode`/`undefined`|`undefined`|set the icon on the right side FormInput|
|`label`|`string`/`undefined`|`undefined`|set title for FormInput|
|`errorMess`|`string`/`undefined`|`undefined`|set error messagae for FormInput in validate|
|`numberOfLine`|`number`/`undefined`|`undefined`|number of lines in FormInput|
|`isMultiline`|`boolean`/`undefined`|`false`|if you need FormInput has multiline, change to true|
|`keyboardType`|`any`/`undefined`|`undefined`|type of keyboard|
|`editable`|`boolean`/`undefined`|`true`|if false, text is not editable|
|`autoFocus`|`boolean`/`undefined`|`true`|if true, focus input on|
|`passWord`|`boolean`/`undefined`|`flase`|if true, FormInput change mode to password|

#### 2.2 InputDropDown

A list of options or choices to the user, which can be selected from a list that "drops down" when the user interacts with it.

Props `extends` Props of `FormInput`, but with extra dataDropDown

|Name |Type| Defaul | Description|
|---|---|---|---|
|`dataDropDown`|`dataDropDownType:{id: number, value: string}`/`undefined`|`undefined`|value of InputDropDown|

### 3. Button

A version that uses `TouchableOpacity` to form the button.

|Name |Type| Defaul | Description|
|---|---|---|---| 
|`title`|`string`/`undefined`|`undefined`|tittle of button|
|`size`|`small`/`medium`/`large`/`iconOnly`/`undefined`|`undefined`|size for button|
|`type`|`primary`/`secondary`/`disabled`/`danger`  ,/`warning`/`success`/`outline`/`undefined`|`undefined`|style for button|
|`buttonStyle`|`ViewStyle`/`undefined`|`undefined`|custom style for button|
|`iconStyle`|`ViewStyle`/`undefined`|`undefined`|custom style for icon in button|
|`titleStyle`|`TextStyle`/`undefined`|`undefined`|custom style for icon in button|
|`icon`|`string`/`undefined`|`undefined`|name of icon, using icon from `AntDesign`|
|`onPress`|`string`/`undefined`|`undefined`|name of icon, using icon from `AntDesign`|
|`rightIcon`|`string`/`undefined`|`undefined`|name of icon, using icon from `AntDesign`, on the right side button|


