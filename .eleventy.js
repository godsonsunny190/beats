const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/defaultstyle.css');
	eleventyConfig.addPassthroughCopy('./src/mainstyle.css');
	eleventyConfig.addPassthroughCopy('./src/assets');

	eleventyConfig.addFilter('postDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED);
	});
	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};
