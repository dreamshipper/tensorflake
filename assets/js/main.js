fetch('/data/posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('latest-posts');

    posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3)
      .forEach(post => {
        const div = document.createElement('div');

        div.className = 'card';

        div.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.date}</p>
          <p>${post.excerpt}</p>
          <a href="/post.html?id=${post.id}" class="btn">Read</a>
        `;

        container.appendChild(div);
      });
  });
