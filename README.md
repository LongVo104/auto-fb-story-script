# Android - Auto post Facebook story
`auto-fb-story-script` is used to auto post Facebook story music with steps input from a JSON file.
## Prerequisites
You need to:
- Install ADB in your computer (`sudo apt install adb`)
- Enable `USB Debugging` in your Android device (`Settings > Developer Options > USB Debugging`)
- I recommend installing Node using Homebrew. Run the following commands in a Terminal after installing Homebrew: `brew install node`.
<br>
Now, connect your device to your computer, via a USB cable, and run the following bash script in a terminal:

```
node main.js your_device_id
```
You can get `your_device_id` with command `adb devices`.
