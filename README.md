# Welcome to the BP Tours iOS App! 📱🏖️

<img width="454" height="319" alt="image" src="https://github.com/user-attachments/assets/20ffd855-590a-4fc4-8921-ba3d9bf0af61" />
<img width="451" height="278" alt="image" src="https://github.com/user-attachments/assets/52c16b15-34b5-4565-aadd-0fdac079c32d" />


## Who are BP Tours?
A tourism company based in Blackpool that focus on high quality day activities, suitable for friends and families. 

## How will BP Tours benefit from this app?
Customers will be able to easily book their Blackpool activities from their phones rather than having to call BP Tours or come see us in person. This increases the potential audience, as people can book their tours in advance. 

## How to run the application locally?

Prerequisites:
- Xcode
- VSCode 

Remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

Installing Ruby
1. `brew install rbenv     `
2. `rbenv init   `
3. Add to /.zshrc: 
    - `export PATH="$HOME/.rbenv/bin:$PATH"`
    - `eval "$(rbenv init -)"`
    - `source ~/.zshrc`
4. `rbenv install 3.2.2   `                   
5. `rbenv global 3.2.2`
6. In a new terminal -> `ruby -v`

Installing CocoaPods
1. `sudo gem install cocoapods  `  
2. `export PATH="$HOME/.gem/bin:$PATH"` and add to /.zshrc --> `source ~/.zshrc`

To install dependencies in Podfile 
1. `cd ios && pod install `

To install node_modules 
1. `npm install in bp-tours-app-js`

To run the application 
1. Open the project in Xcode 
2. Build the application in the /ios directory in VSCode using --> `xcodebuild -workspace BPToursJavascript.xcworkspace -scheme BPToursJavascript clean build`
3. To clean and build the project in XCode 
    - Cmd + Shift + K = Clean
    - Cmd + B = Build 

4. In the root, execute `npx react-native run-ios`

## How to run the test suite?

Prerequisites:
- Detox 
- Jest 

To install Detox locally to the project:
(For Mac users, using Homebrew)
1. `npm install detox --save-dev`
2. `brew tap wix/brew`
3. `brew install applesimutils`
4. Verify detox installation using: `npx detox --version` 

To run the tests:
1. Have the Metro bundler running: `npx react-native start`
2. `npm run detox:build:ios:debug`
3. `npm run detox:test:ios:debug  `

