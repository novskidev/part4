const dummy = (blogs) => {
  return 1;
};

const totalLike = (blogs) => {
  return blogs.reduce((total, blog) => total + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }

  return blogs.reduce((max, blog) => {
    return blog.likes > max.likes ? blog : max;
  }, blogs[0]);
}

module.exports = {
  dummy,
  totalLike,
  favoriteBlog
};
