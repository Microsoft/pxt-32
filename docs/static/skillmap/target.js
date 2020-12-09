// eslint-disable-next-line 
var pxtTargetBundle = {"id":"arcade","name":"arcade","nickname":"arcade","thumbnailName":"MakeCode Arcade","title":"Microsoft MakeCode Arcade","description":"Develop your programming skills by quickly creating and modding retro arcade games with Blocks and JavaScript in the MakeCode editor","corepkg":"device","cloud":{"workspace":false,"sharing":true,"thumbnails":true,"importing":true,"packages":true,"publishing":true,"githubPackages":true,"cloudProviders":{"github":{}}},"bundleddirs":["libs/animation","libs/accelerometer","libs/lightsensor","libs/thermometer","libs/base","libs/core","libs/core---samd","libs/core---stm32","libs/core---nrf52","libs/core---linux","libs/core---vm","libs/serial","libs/serial---linux","libs/corgio","libs/darts","libs/keyboard","libs/mouse","libs/microphone","libs/hw","libs/hw---stm32f401","libs/hw---samd51","libs/hw---n3","libs/hw---n4","libs/hw---rpi","libs/hw---vm","libs/feather","libs/sevenseg","libs/settings","libs/settings---files","libs/screen","libs/screen---st7735","libs/screen---linux","libs/screen---ext","libs/game","libs/game---hw","libs/buttons","libs/mixer","libs/servo","libs/light","libs/mixer---samd","libs/mixer---stm32","libs/mixer---nrf52","libs/mixer---none","libs/mixer---linux","libs/mixer---ext","libs/device","libs/power","libs/controller","libs/controller---none","libs/edge-connector","libs/esp32","libs/mqtt","libs/net","libs/net-game","libs/azureiot","libs/color","libs/palette","libs/storyboard","libs/rotary-encoder","libs/radio","libs/radio-broadcast","libs/d5prj","libs/f4prj","libs/rpiprj","libs/color-coded-tilemap","libs/template"],"compile":{"useUF2":true,"deployDrives":"(ARCADE|PY|FTHR840BOOT)","deployFileMarker":"INFO_UF2.TXT","driveName":"ARCADE","floatingPoint":true,"taggedInts":true,"nativeType":"thumb","gc":true,"upgrades":[],"webUSB":true,"saveAsPNG":true,"patches":{"0.0.0 - *":[{"type":"missingPackage","map":{"(DigitalPin|AnalogPin|pins)\\.P\\d\\d?":"edge-connector","serial\\.":"serial"}}],"0.0.0 - 0.1.1":[{"type":"api","map":{"controller\\.controlSprite":"controller.moveSprite","controller\\.controlPlayer":"controller.movePlayer"}}],"0.0.0 - 0.3.23":[{"type":"package","map":{"local-multiplayer":""}}],"0.0.0 - 0.3.24":[{"type":"api","map":{"sprites\\.createEmptySprite\\(([^)]+)\\)":"sprites.create(img`.`, $1)"}},{"type":"blockId","map":{"keysdx":"keydx","keysdy":"keydy"}}],"0.0.0 - 0.11.20":[{"type":"api","map":{"SpriteKind":"SpriteKindLegacy"}}],"0.0.0 - 0.14.57":[{"type":"missingPackage","map":{"scene\\.setTileMap":"color-coded-tilemap","scene\\.setTile":"color-coded-tilemap","scene\\.getTile":"color-coded-tilemap","scene\\.getTilesByType":"color-coded-tilemap","scene\\.placeOnRandomTile":"color-coded-tilemap","scene\\.setTileAt":"color-coded-tilemap","scene\\.onHitTile":"color-coded-tilemap","\\.tileHitFrom":"color-coded-tilemap"}}],"0.0.0 - 0.18.9":[{"type":"api","map":{"tilemap\\s*\\.\\s*createTileSprite":"tiles.createTileSprite","tilemap\\s*\\.\\s*coverAllTiles":"tiles.coverAllTiles","tilemap\\s*\\.\\s*createSpritesOnTiles":"tiles.createSpritesOnTiles","tilemap\\s*\\.\\s*destorySpritesOfKind":"tiles.destroySpritesOfKind","tilemap\\s*\\.\\s*tileIs":"tiles.tileIs","tilemap\\s*\\.\\s*tileIsWall":"tiles.tileIsWall","tilemap\\s*\\.\\s*forEachTileOfKind":"tiles.forEachTileOfKind","tilemap\\s*\\.\\s*forEachTileOfMap":"tiles.forEachTileOfMap","tilemap\\s*\\.\\s*replaceAllTiles":"tiles.replaceAllTiles","tilemap\\s*\\.\\s*columnInDirection":"tiles.columnInDirection","tilemap\\s*\\.\\s*rowInDirection":"tiles.rowInDirection","tilemap\\s*\\.\\s*forEachDirection":"tiles.forEachDirection","tilemap\\s*\\.\\s*centerCameraOnTile":"tiles.centerCameraOnTile","tilemap\\s*\\.\\s*locationOfSprite":"tiles.locationOfSprite","tilemap\\s*\\.\\s*RowCol":"tiles.RowCol","tilemap\\s*\\.\\s*spriteRowCol":"tiles.spriteRowCol","tilemap\\s*\\.\\s*locationColumn":"tiles.locationColumn","tilemap\\s*\\.\\s*locationRow":"tiles.locationRow","tilemap\\s*\\.\\s*XY":"tiles.XY","tilemap\\s*\\.\\s*locationXY":"tiles.locationXY","tilemap\\s*\\.\\s*locationInDirection":"tiles.locationInDirection","tilemap\\s*\\.\\s*_directionEditor":"tiles._directionEditor","tilemap\\s*\\.\\s*tileWidth":"tiles.tileWidth","tilemap\\s*\\.\\s*tilemapColumns":"tiles.tilemapColumns","tilemap\\s*\\.\\s*tilemapRows":"tiles.tilemapRows","tilemap\\s*\\.\\s*screenCoordinateToTile":"tiles.screenCoordinateToTile","tilemap\\s*\\.\\s*tileCoordinateToScreen":"tiles.tileCoordinateToScreen","tilemap\\s*\\.\\s*centeredTileCoordinateToScreen":"tiles.centeredTileCoordinateToScreen","tilemap\\s*\\.\\s*OVERWORLD_MAP_ID":"tiles.OVERWORLD_MAP_ID","tilemap\\s*\\.\\s*MAP_LOADED_EVENT":"tiles.MAP_LOADED_EVENT","tilemap\\s*\\.\\s*WorldMap":"tiles.WorldMap","tilemap\\s*\\.\\s*WorldMapConnection":"tiles.WorldMapConnection","tilemap\\s*\\.\\s*createMap":"tiles.createMap","tilemap\\s*\\.\\s*copyMap":"tiles.copyMap","tilemap\\s*\\.\\s*loadMap":"tiles.loadMap","tilemap\\s*\\.\\s*getLoadedMap":"tiles.getLoadedMap","tilemap\\s*\\.\\s*onMapLoaded":"tiles.onMapLoaded","tilemap\\s*\\.\\s*onMapUnloaded":"tiles.onMapUnloaded","tilemap\\s*\\.\\s*connectMapById":"tiles.connectMapById","tilemap\\s*\\.\\s*loadConnectedMap":"tiles.loadConnectedMap","tilemap\\s*\\.\\s*getConnectedMap":"tiles.getConnectedMap","tilemap\\s*\\.\\s*setWorldLocationToMap":"tiles.setWorldLocationToMap","tilemap\\s*\\.\\s*loadMapAt":"tiles.loadMapAt","tilemap\\s*\\.\\s*getMapAtWorldLocation":"tiles.getMapAtWorldLocation","tilemap\\s*\\.\\s*loadMapInDirection":"tiles.loadMapInDirection","tilemap\\s*\\.\\s*loadedWorldColumn":"tiles.loadedWorldColumn","tilemap\\s*\\.\\s*loadedWorldRow":"tiles.loadedWorldRow"}}]}},"compileService":{"buildEngine":"codal","githubCorePackage":"lancaster-university/codal","gittag":"v0.8.0","dockerImage":"pext/yotta:latest","codalTarget":{"branches":{}}},"variants":{"stm32f401":{"compile":{"hasHex":true,"openocdScript":"source [find interface/stlink-v2.cfg]; source [find target/stm32f4x.cfg]","flashEnd":524288,"uf2Family":"0x57755a57"},"compileService":{"codalTarget":{"name":"codal-big-brainpad","url":"https://github.com/lancaster-university/codal-big-brainpad","branch":"v1.2.0","type":"git"},"codalBinary":"STM32","serviceId":"codal2stm32","dockerImage":"pext/yotta:latest"}},"samd51":{"compile":{"hasHex":true,"openocdScript":"source [find interface/cmsis-dap.cfg]; set CHIPNAME at91samd51g19; source [find target/atsame5x.cfg]","openocdScriptAlt":"source [find interface/stlink-v2.cfg]; set CPUTAPID 0x2ba01477; set CHIPNAME at91samd51g19; source [find target/at91samdXX.cfg]","ramSize":196608,"flashEnd":524288,"uf2Family":"0x55114460"},"compileService":{"codalTarget":{"name":"codal-itsybitsy-m4","url":"https://github.com/lancaster-university/codal-itsybitsy-m4","branch":"v0.2.7","type":"git"},"codalBinary":"ITSYBITSY_M4","serviceId":"codal2samd51","dockerImage":"pext/yotta:latest"}},"nrf52840":{"compile":{"hasHex":true,"openocdScript":"source [find interface/cmsis-dap.cfg]; source [find target/nrf52.cfg]","webUSB":false,"flashEnd":1007616,"uf2Family":"0xada52840"},"compileService":{"codalTarget":{"name":"codal-nrf52840-dk","url":"https://github.com/mmoskal/codal-nrf52840-dk","branch":"v1.1.7","type":"git"},"codalBinary":"NRF52840_DK","serviceId":"codal2nrf52840","dockerImage":"pext/yotta:latest","yottaConfig":{"pxt":{"board":{"id":"BOARD_ID_NRF52840"}}}}},"nrf52833":{"compile":{"hasHex":true,"openocdScript":"source [find interface/cmsis-dap.cfg]; source [find target/nrf52.cfg]","webUSB":false,"useUF2":false,"flashEnd":524288,"deployDrives":".*","deployFileMarker":"DETAILS.TXT"},"compileService":{"codalTarget":{"name":"codal-nrf52833-dk","url":"https://github.com/mmoskal/codal-nrf52833-dk","branch":"v1.1.4","type":"git"},"codalBinary":"NRF52840_DK","serviceId":"codal2nrf52840","dockerImage":"pext/yotta:latest","yottaConfig":{"pxt":{"board":{"id":"BOARD_ID_NRF52833"}}}}},"rpi":{"compile":{"hasHex":true,"useELF":true,"runtimeIsARM":true,"flashCodeAlign":256,"webUSB":false,"stackAlign":2},"compileService":{"buildEngine":"dockermake","dockerImage":"pext/rpi:alsa","serviceId":"rpi"}},"vm":{"compile":{"hasHex":true,"useELF":true,"flashCodeAlign":256,"webUSB":false,"nativeType":"vm","stackAlign":2},"compileService":{"buildEngine":"dockercross","dockerImage":"pext/crossbuild","serviceId":"crossbuild","skipCloudBuild":true}}},"serial":{"useEditor":true,"log":true,"editorTheme":{"graphBackground":"#d9d9d9","lineColors":["#009DDC","#FB48C7","#40bf4a","#8073E5","#d25b33"]}},"runtime":{"mathBlocks":true,"loopsBlocks":true,"logicBlocks":true,"variablesBlocks":true,"textBlocks":true,"functionBlocks":true,"functionsOptions":{"useNewFunctions":true,"extraFunctionEditorTypes":[{"typeName":"Sprite","icon":"send","defaultName":"mySprite"},{"typeName":"Image","icon":"image outline","defaultName":"myImage"}]},"listsBlocks":true,"tilesetFieldEditorIdentity":"images._tile","bannedCategories":["pins","control","input","serial","power"]},"simulator":{"autoRun":true,"autoRunLight":false,"emptyRunCode":"pxsim.pxtcore.updateScreen(new pxsim.RefImage(160, 120, 4))","aspectRatio":0.85,"dynamicBoardDefinition":true,"keymap":true},"appTheme":{"logoUrl":"https://github.com/microsoft/pxt-arcade","logo":"./static/logo.svg","docsLogo":"./static/logo.svg","cardLogo":"./static/logo.svg","portraitLogo":"./static/logo.svg","footerLogo":"./static/logo.svg","organization":"Microsoft MakeCode","organizationUrl":"https://makecode.com/org","organizationLogo":"./static/Micorsoft_logo_rgb_W-white_D-square.png","organizationWideLogo":"./static/Micorsoft_logo_rgb_W-white_D.png","homeUrl":"https://arcade.makecode.com/","embedUrl":"https://arcade.makecode.com/stable","privacyUrl":"https://go.microsoft.com/fwlink/?LinkId=521839","termsOfUseUrl":"https://go.microsoft.com/fwlink/?LinkID=206977","githubUrl":"https://github.com/microsoft/pxt-arcade","boardName":"Arcade","addNewTypeScriptFile":true,"docMenu":[{"name":"Docs","path":"/docs","popout":true},{"name":"Hardware","path":"/hardware","popout":true},{"name":"Forum","path":"https://forum.makecode.com"}],"coloredToolbox":true,"monacoToolbox":true,"selectLanguage":true,"availableLocales":["en","zh-CN","zh-TW","de","fr","ja"],"invertedMenu":true,"showHomeScreen":true,"highContrast":true,"greenScreen":true,"print":true,"hasAudio":true,"allowPackageExtensions":true,"homeScreenHero":"./static/hero.png","socialOptions":{"orgTwitterHandle":"MSMakeCode","hashtags":"MakeCode","discourse":"https://forum.makecode.com/","discourseCategory":"Arcade"},"blocklyOptions":{"grid":{"spacing":20,"length":100,"colour":"rgba(107, 79, 118, 0.10)","snap":true}},"blockColors":{"loops":"#20BF6B","logic":"#45AAF2","math":"#A55EEA","variables":"#EC3B59","text":"#F5D547","arrays":"#FF8F08","functions":"#1446A0"},"simAnimationEnter":"fly right in","simAnimationExit":"fly right out","crowdinProject":"kindscript","monacoColors":{"editor.background":"#FEF3E0"},"monacoFieldEditors":["image-editor","tilemap-editor"],"scriptManager":true,"saveInMenu":false,"debugger":true,"importExtensionFiles":true,"experiments":["debugExtensionCode","snippetBuilder","experimentalHw","recipes","tutorialBlocksDiff","blocksErrorList"],"blocksCollapsing":true,"errorList":true,"extendEditor":true,"simScreenshot":true,"simScreenshotKey":"P","simScreenshotMaxUriLength":300000,"simGif":true,"simGifKey":"R","qrCode":true,"shareFinishedTutorials":true,"nameProjectFirst":true,"githubEditor":true,"githubCompiledJs":true,"chooseLanguageRestrictionOnNewProject":true,"openProjectNewTab":true,"hasReferenceDocs":true,"python":true},"queryVariants":{"skillsMap=1":{"appTheme":{"embeddedTutorial":true,"allowParentController":true,"shareFinishedTutorials":false}}},"unsupportedBrowsers":[{"id":"ie"}],"uploadDocs":true,"versions":{"target":"1.2.14"}}