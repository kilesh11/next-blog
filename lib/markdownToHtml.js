import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';

export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).use(prism).process(markdown);
    return result.toString();
}
