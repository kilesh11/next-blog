import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import 'prismjs';
import 'prismjs/components/prism-markup';

export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).use(prism).process(markdown);
    return result.toString();
}
