# BP Tours

## Local development and running the application using a Simulator 

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
