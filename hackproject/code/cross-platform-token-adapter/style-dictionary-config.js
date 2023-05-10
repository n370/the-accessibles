module.exports = {
	// Tokens.js is a wrapper over the generated tokens that adds the missing tokens from the JSON exported from the theme-builder
	source: ['./tokens.js'],
	transform: {
		themeBuilder: {
			name: 'themeBuilder',
			type: 'attribute',
			transformer(token) {
				// Given the structure of the theme-builder tokens, extract the attributes that Style-Dictionary expects.
				// This replaces the Style-Dictionary attribute/cti transformer, source: https://github.com/amzn/style-dictionary/blob/2cf72f3f89996503608c238d7f3bcbab5b53e719/lib/common/transforms.js#L84
				// See the Style-Dictionary docs for more info on CTI: https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item
				const category = token.type;
				const type = token.path?.[0];
				const item = token.path?.[1];
				const state = token.path?.[2];
				const attributes = {type, category, item, state};

        const originalAttributes = token.attributes || {};
				return Object.assign(attributes, originalAttributes);
			},
		},
	},
	// Here are just a few examples of the types of platforms and tokens Style-Dictionary can generate
	platforms: {
		android: {
			// Use our themeBuilder transformer in place of attribute/cti
			transforms: ['themeBuilder', 'name/cti/snake', 'color/hex', 'size/remToSp', 'size/remToDp'],
			buildPath: 'build/android/',
			files: [{
				destination: 'style_dictionary_colors.xml',
				format: 'android/colors',
			}],
		},
		ios: {
			// Use our themeBuilder transformer in place of attribute/cti
			transforms: ['themeBuilder', 'name/cti/camel', 'color/UIColorSwift', 'content/swift/literal', 'asset/swift/literal', 'size/swift/remToCGFloat', 'font/swift/literal'],
			buildPath: 'build/ios/',
			files: [{
				destination: 'StyleDictionary+Class.swift',
				format: 'ios-swift/class.swift',
				className: 'StyleDictionaryClass',
				filter: {
					attributes: {
						category: 'color',
					},
				},
			}],
		},
		css: {
			// Use our themeBuilder transformer in place of attribute/cti
			transforms: ['themeBuilder', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/rem', 'color/css'],
			buildPath: 'build/css/',
			files: [{
				destination: 'colors.css',
				format: 'css/variables',
				filter: {
					attributes: {
						category: 'color',
					},
				},
			}],
		},
		ts: {
			buildPath: 'build/ts/',
			// Use our themeBuilder transformer in place of attribute/cti
			transforms: ['themeBuilder', 'name/cti/pascal', 'size/rem', 'color/hex'],
			files: [
				{
					format: 'javascript/module',
					destination: 'colors.js',
				},
				{
					format: 'typescript/module-declarations',
					destination: 'colors.d.ts',
				},
			],
		},
	},
};
