import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import '../styles/prism';
// const components = require('prismjs/components.json');
// const languages = Object.keys(components.languages).filter((l) => l !== 'meta');
// languages.forEach((lang) => {
//     require.resolve(`prismjs/components/prism-${lang}`);
// });
export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).use(prism).process(markdown);
    return result.toString();
}
