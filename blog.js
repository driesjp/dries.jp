document.addEventListener('DOMContentLoaded', (event) => {

// Prismic API endpoint
const apiEndpoint = 'https://dries.cdn.prismic.io/api/v2';

// We'll use the native fetch API to make the API call to Prismic
function fetchBlogPosts() {
  fetch(apiEndpoint + '/documents/search?ref=' + apiRef + '&q=[[at(document.type, "driesjp_blog")]]')
    .then(response => response.json())
    .then(response => {
      // Process and display your blog posts
      displayPosts(response.results);
    })
    .catch(error => console.error('Error fetching content from Prismic:', error));
}

function displayPosts(posts) {
    const blogContainer = document.getElementById('blog-container');
    
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'blog-post';
      
      // Handling the image
      let imageHtml = '';
      if (post.data.image && post.data.image.url) {
        imageHtml = `<img src="${post.data.image.url}" alt="${post.data.image.alt || ''}" style="max-width: 600px; height: auto;" /><br><br>`;
      }
  
      // Handling the text
      let textHtml = '';
      if (post.data.text) {
        textHtml = post.data.text.map(paragraph => `<p>${paragraph.text}</p>`).join('');
      }

      // Formatting the publish date
      let publishDateHtml = '';
      if (post.first_publication_date) {
        const publishDate = new Date(post.first_publication_date);
        const formattedDate = publishDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        publishDateHtml = `<div class="publish-date">${formattedDate}</div><br><br>`;
      }
  
      postElement.innerHTML = `
        <div class="blog-post-title">${post.data.title[0].text}</div><br>
        ${imageHtml}
        ${textHtml}<br>
        ${publishDateHtml}
      `;
      blogContainer.appendChild(postElement);
    });
}
  

// Initial API reference fetch
let apiRef = '';
fetch(apiEndpoint)
  .then(response => response.json())
  .then(response => {
    apiRef = response.refs[0].ref;
    fetchBlogPosts();
  })
  .catch(error => console.error('Error fetching API ref from Prismic:', error));

});