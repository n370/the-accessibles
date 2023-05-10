module.exports = {
  // parsers: [{
  //   pattern: /tokens\.json/,
  //   parse: ({contents, filePath}) => {
  //     console.log('hello')
  //     return JSON.parse(contents);
  //   }
  // }],
  source: ['./tokens.js'],
  transform: {
    themeBuilder: {
      name: 'themeBuilder',
      type: 'attribute',
      transformer: (token) => {
        // console.log('token', token)
        const category = token.type
        const type = token.path?.[0]
        const item = token.path?.[1]
        const state = token.path?.[2]
        const attributes = {type, category, item, state}
        // console.log({attributes})
        return Object(attributes, token.attributes);
      },
    }
  },
  platforms: {
    android: {
      transforms: [/*"themeBuilder", "attribute/cti",*/ "themeBuilder", "name/cti/snake", "color/hex", "size/remToSp", "size/remToDp"],
      buildPath: "build/android/",
      files: [{
        destination: "style_dictionary_colors.xml",
        format: "android/colors"
      }]
    },
    ios: {
      transforms: [/*"themeBuilder", "attribute/cti",*/ "themeBuilder", "name/cti/camel", "color/UIColorSwift", "content/swift/literal", "asset/swift/literal", "size/swift/remToCGFloat", "font/swift/literal"],
      buildPath: "build/ios/",
      files: [{
        "destination": "StyleDictionary+Class.swift",
        "format": "ios-swift/class.swift",
        "className": "StyleDictionaryClass",
        "filter": {
          "attributes": {
            "category": "color"
          }
        }
      }],
    },
    css: {
      // transforms: ["themeBuilder"],
      transforms: ["themeBuilder", "name/cti/kebab", "time/seconds", "content/icon", "size/rem", "color/css"],
      buildPath: "build/css/",
      files: [{
        destination: "colors.css",
        "format": "css/variables",
        "filter": {
          "attributes": {
            "category": "color"
          }
        }
      }],
    },
    ts: {
      buildPath: "build/ts/",
      "transforms": ["themeBuilder", "name/cti/pascal", "size/rem", "color/hex"],
      "files": [
        {
          "format": "javascript/module",
          "destination": "colors.js"
        },
        {
          "format": "typescript/module-declarations",
          "destination": "colors.d.ts"
        }
      ]
    }
  }
}