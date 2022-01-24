import '../styles/article_show.scss';

$(document).ready(function() {
    const likeArticle = $('.js-like-article');
    likeArticle.tooltip();
    likeArticle.on('click', function(e) {
        e.preventDefault();

        var $link = $(e.currentTarget);
        $link.toggleClass('fa-heart-o').toggleClass('fa-heart');

        $.ajax({
            method: 'POST',
            url: $link.attr('href')
        }).done(function(data) {
            $('.js-like-article-count').html(data.hearts);
        })
    });
});
