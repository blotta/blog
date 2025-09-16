
import eleventySass from 'eleventy-sass'
import slugify from '@sindresorhus/slugify';

export default async function (eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPlugin(eleventySass);

    eleventyConfig.addCollection("projects", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/projects/*.md")
            .sort((a, b) => b.data.priority - a.data.priority);
    });

    eleventyConfig.addCollection("categoryList", function (collectionApi) {
        let categorySet = new Set();
        collectionApi.getAll().forEach(item => {
            console.log(item);
            if ("categories" in item.data) {
                for (let category of item.data.categories) {
                    categorySet.add(category);
                }
            }
        });
        return [...categorySet];
    });
};