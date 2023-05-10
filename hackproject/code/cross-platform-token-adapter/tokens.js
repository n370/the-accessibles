const merge = require('lodash/merge')
const tokens = require('./generated-tokens-replace-with-theme-builder-json.json')

// When copying the JSON from the theme-builder CODE tab, the "Core-Colors" are missing.
// Add them here.
// I've only added the colors used by the "Sample" theme.
const coreColors = {
  "Core-Colors": {
    White: {
      Color: {
        type: 'color',
        value: '#ffffff'
      },
      'On-Color': {
        type: 'color',
        value: '#ffffff'
      }
    },
    Gray: {
      Color: {
        '050': {
          type: 'color',
          value: '#101010'
        },
        '200': {
          type: 'color',
          value: '#202020'
        }
      }
    },
    Black: {
      'Color-Half': {
        type: 'color',
        value: '#808080'
      },
      'Color-Quarter': {
        type: 'color',
        value: '#404040'
      },
      'On-Color': {
        type: 'color',
        value: '#000000'
      }
    }
  }
}

// The "Theme-Colors" are missing too.
// Add them here.
// I've only added the colors used by the "Sample" theme.
const themeColors = {
  'Theme-Colors': {
    Primary: {
      "On-Color": {
        Half: {
          type: 'color',
          value: '#050000'
        },
        Quarter: {
          type: 'color',
          value: '#025000'
        }
      }
    }
  }
}

// The "Elevation-Shadows" are missing too.
// Add them here.
// I've only added the values used by the "Sample" theme.
const elevationShadows = {
  'Elevation-Shadows': {
    'elevation-0': {
      value: 0
    },
    'elevation-1': {
      value: 1
    },
    'elevation-2': {
      value: 2
    }
  }
}

// The "Bevels" are missing too.
// Add them here.
// I've only added the values used by the "Sample" theme.
const bevels = {
  'Bevels': {
    'bevel-0': {
      value: 0
    }
  }
}

// Finally, the generated JSON has references to "spacing" that appears to be a typo.
// Replace "spacing" with "Spacing" so that the references can be resolved.
const fixedTokens = {
  // Include _all_ of the original tokens
  ...tokens,

  // Add Spacing, fixing the typo
  Spacing: Object.fromEntries(
    Object.entries(tokens.Spacing).map(
      ([key, spacing]) => {
        return [key, {type: spacing.type, value: spacing.value.replace('spacing', 'Spacing')}]
      }
    )
  )
}

// Merge all of the above together to create a set of tokens that has no missing values.
module.exports = merge(
  {},
  coreColors,
  themeColors,
  elevationShadows,
  bevels, 
  fixedTokens
  )