const dummy = (blogs) => {
  return 1;
};

const totalLike = (blogs) => {
  return blogs.reduce((total, blog) => total + blog.likes, 0);
};

module.exports = {
  dummy,
  totalLike,
};
