# Local Development

Install dependencies:
- Run `yarn install`

Run the app:
- (Android) Run `yarn run android`
- (iOS) Run `yarn run ios`

## Guides

### Configure the splash screen
This project uses `react-native-bootsplash` package for control the splash screen. Use the following command to change the splash screen content:
```sh
yarn react-native generate-bootsplash src/assets/images/splash.png --background-color=F6F1E7 --logo-width=128
```

### Generate icons
This project uses `@svgr/cli` package for generate icons components from .svg files. Add all icons in the `src/assets/icons` folder then run:
```sh
yarn run svgr:build
```