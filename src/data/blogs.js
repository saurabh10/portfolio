const blogs = [
  {
    id: "vector-api",
    title: "Optimizing Recommendation Systems with JDK’s Vector API",
    author: "Harshad Sane",
    date: "Mar 3, 2026",
    readTime: "9 min read",
    thumbnail: "/images/blog1.png",

    content: `
      <h2>Introduction</h2>
      <p>Ranker is one of the largest and most complex services at Netflix...</p>

      <blockquote>
        “How different is this new title from what you’ve been watching so far?”
      </blockquote>

      <h3>Solution</h3>
      <p>The original implementation used nested loops...</p>

      <pre>
for (Video candidate : candidates) {
  Vector c = embedding(candidate);
}
      </pre>

      <img src="/images/blog-detail.png" alt="diagram" />

      <p>This improved performance significantly...</p>
    `,
  },

  {
    id: "ai-media",
    title: "MediaFM: AI Foundation for Media Understanding",
    author: "Netflix Team",
    date: "Feb 23, 2026",
    readTime: "8 min read",
    thumbnail: "/images/blog2.png",

    content: `
      <h2>Overview</h2>
      <p>This blog explains how AI powers media understanding...</p>
      <img src="/images/blog3.png" />
    `,
  },
];

export default blogs;