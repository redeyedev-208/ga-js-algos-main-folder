// We are going to write a function that is called `displayLikes`
// Requirements:
// If no one likes your post, it must return "No one likes this post"
// If one person likes your post, it must return "name1 likes this post"
// If two people like your post, it must return "name1 and name2 like this post"
// If more than two people like your post, it must return "name1, name2 and number of other people like this post"
// If more than three people like your post, it must return "name1, name2 and number of other people like this post"
// The names should be an array of people who like the post
function displayLikes(names) {
  // Get the length of the array
  const length = names.length;

  // Return the appropriate string based on the length of the array
  if (length === 0) {
    return 'no one likes this';
  } else if (length === 1) {
    return `${names[0]} likes this`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}

module.exports = displayLikes;
