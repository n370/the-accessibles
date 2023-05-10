const merge = require('lodash/merge')
const tokens = require('./generated-tokens-replace-with-theme-builder-json.json')

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

const bevels = {
  'Bevels': {
    'bevel-0': {
      value: 0
    }
  }
}

const fixedTokens = {
  ...tokens,
  Spacing: Object.fromEntries(
    Object.entries(tokens.Spacing).map(
      ([key, spacing]) => {
        return [key, {type: spacing.type, value: spacing.value.replace('spacing', 'Spacing')}]
      }
    )
  )
}

module.exports = merge(
  {},
  coreColors,
  themeColors,
  // spacing,
  elevationShadows,
  bevels, 
  fixedTokens
  )