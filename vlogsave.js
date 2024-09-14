document.addEventListener('DOMContentLoaded', function() {
    loadLikes();
    loadComments();
});

let likes = parseInt(localStorage.getItem('likes')) || 0;

function likeVideo() {
    likes++;
    localStorage.setItem('likes', likes);
    document.getElementById('like-count').textContent = likes;
}

function showCommentBox() {
    document.getElementById('comment-box').style.display = 'block';
}

function postComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;

    if (commentText) {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(commentText);
        localStorage.setItem('comments', JSON.stringify(comments));
        addCommentToList(commentText);
        commentInput.value = ''; // clear the input box
    }
}

function loadLikes() {
    document.getElementById('like-count').textContent = likes;
}

function loadComments() {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => addCommentToList(comment));
}

function addCommentToList(commentText) {
    const commentList = document.getElementById('comments-list');
    const newComment = document.createElement('li');
    newComment.textContent = commentText;
    commentList.appendChild(newComment);
}
