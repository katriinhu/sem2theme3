function getdata() {
  fetch("https://semester2-d348.restdb.io/rest/posts", {
    method: "GET",
    headers: {
      "x-apikey": "602fa4645ad3610fb5bb63d6",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showPosts(response);
    })

    .catch((err) => {
      console.error(err);
    });
}

getdata();

function showPosts(posts) {
  console.log(posts);
  const template = document.querySelector("template.frontpagelist").content;

  posts.forEach((post) => {
    console.log(post);
    if (post.approved == true) {
      //clone
      const copy = template.cloneNode(true);

      //adjust
      template.querySelector("h2").textContent = post.title;
      template.querySelector("h3 span").textContent = post.username;
      template.querySelector("a").href = `article.html?article=${post._id}`;
      //append
      document.querySelector("main").appendChild(copy);
    }
  });
}
