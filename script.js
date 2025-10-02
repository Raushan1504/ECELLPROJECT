 document.addEventListener('DOMContentLoaded', function() {
    var hScroll = document.querySelector(".status-wrapper");
    var sCont = document.querySelector(".stories");
    var leftButton = document.querySelector("#scroll-left");
    var rightButton = document.querySelector("#scroll-right");
    var scrollAmount = 200;
    var currentScroll = 0;
    var maxScroll = 0;
    window.scrollHorizantal = function(val) {
        updateMaxScroll();
        currentScroll += (val * scrollAmount);
        if (currentScroll > 0) {
            currentScroll = 0;
        } else if (currentScroll < maxScroll) {
            currentScroll = maxScroll;
        }
        sCont.style.left = currentScroll + "px";
        leftButton.style.opacity = (currentScroll === 0) ? '0' : '1';
        rightButton.style.opacity = (currentScroll === maxScroll) ? '0' : '1';
    }
    function updateMaxScroll() {
        maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
        if (maxScroll > 0) maxScroll = 0;
    }
    function initScroll() {
        updateMaxScroll();
        if (sCont.offsetWidth <= hScroll.offsetWidth) {
            leftButton.style.display = 'none';
            rightButton.style.display = 'none';
        } else {
            leftButton.style.display = 'block';
            rightButton.style.display = 'block';
            leftButton.style.opacity = '0';
            rightButton.style.opacity = '1';
        }
        sCont.style.left = currentScroll + "px";
    }
    initScroll();
    window.addEventListener('resize', initScroll);
    function showToast(message) {
        var toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(function() {
            toast.classList.add('show');
        }, 10);
        setTimeout(function() {
            toast.classList.remove('show');
            setTimeout(function() {
                toast.remove();
            }, 300);
        }, 2000);
    }
    var searchInput = document.querySelector(".search");
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (this.value.trim() !== "") {
                    showToast(`Searching for: ${this.value.trim()}`);
                }
                this.value = ""; 
                this.blur(); 
            }
        });
    }
    var posts = document.querySelectorAll('.post');
    var defaultHeartSrc = 'heart.png';
    var likedHeartSrc = "yellowheart.png";
    var defaultSaveSrc = 'save.svg';

    posts.forEach(function(post) {
        var likeButton = post.querySelector('.reaction-wrapper img:first-child');
        var saveButton = post.querySelector('.save');
        var shareButton = post.querySelector('.reaction-wrapper img:nth-child(3)');
        var postImage = post.querySelector('.post-image');
        if (postImage && likeButton) {
            var tapCount = 0;
            var tapTimer = null;
            postImage.addEventListener('click', function(e) {
                tapCount++;
                if (tapCount === 1) {
                    tapTimer = setTimeout(function() {
                        tapCount = 0;
                    }, 300);
                } else if (tapCount === 2) {
                    clearTimeout(tapTimer);
                    tapCount = 0;
                    if (likeButton.getAttribute('data-liked') !== 'true') {
                        likeButton.src = likedHeartSrc;
                        likeButton.setAttribute('data-liked', 'true');
                        likeButton.classList.add('liked-animation');

                        setTimeout(function() {
                            likeButton.classList.remove('liked-animation');
                        }, 600);
                    }
                    createFloatingHeart(e, postImage);
                }
            });
        }
        if (likeButton) {
            likeButton.setAttribute('data-liked', likeButton.src.includes(likedHeartSrc) ? 'true' : 'false');

            likeButton.addEventListener('click', function() {
                var isLiked = likeButton.getAttribute('data-liked') === 'true';
                if (isLiked) {
                    likeButton.src = defaultHeartSrc;
                    likeButton.setAttribute('data-liked', 'false');
                    likeButton.classList.remove('liked-animation');
                } else {
                    likeButton.src = likedHeartSrc;
                    likeButton.setAttribute('data-liked', 'true');
                    likeButton.classList.add('liked-animation');
                    setTimeout(function() {
                        likeButton.classList.remove('liked-animation');
                    }, 600);
                }
            });
        }
        if (saveButton) {
            saveButton.setAttribute('data-saved', 'false'); 
            saveButton.addEventListener('click', function() {
                var isSaved = saveButton.getAttribute('data-saved') === 'true';

                saveButton.classList.add('save-animation');
                setTimeout(function() {
                    saveButton.classList.remove('save-animation');
                }, 400);

                if (isSaved) {
                    saveButton.src = defaultSaveSrc;
                    saveButton.setAttribute('data-saved', 'false');
                } else {
                    saveButton.src = 'bookmark.png';
                    saveButton.setAttribute('data-saved', 'true');
                }
            });
        }
        if (shareButton && (shareButton.alt === 'share' || shareButton.alt === 'send')) {
            shareButton.addEventListener('click', function() {
                var username = post.querySelector('.username').textContent;
                showShareModal(username);
            });
        }
        if (postImage) {
            postImage.style.transition = 'transform 0.3s ease';
            postImage.style.cursor = 'pointer';
            postImage.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
            });
            postImage.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }
    });
    var followButtons = document.querySelectorAll('.right-col .action-btn');
    followButtons.forEach(function(button) {
        if (button.textContent.toLowerCase() === 'follow') {
            button.setAttribute('data-following', 'false');
            button.addEventListener('click', function() {
                var isFollowing = button.getAttribute('data-following') === 'true';
                button.style.transform = 'scale(0.95)';
                setTimeout(function() {
                    button.style.transform = 'scale(1)';
                }, 150);
                if (isFollowing) {
                    button.textContent = 'Follow';
                    button.style.cssText = 'transition: all 0.3s ease;'; 
                    button.setAttribute('data-following', 'false');
                } else {
                    button.textContent = 'Following';
                    button.style.backgroundColor = 'transparent';
                    button.style.color = '#262626';
                    button.style.border = '1px solid #dbdbdb';
                    button.style.transition = 'all 0.3s ease';
                    button.setAttribute('data-following', 'true');
                    showToast('Now following!');
                }
            });
        }
    });
    var postCommentBtns = document.querySelectorAll('.comment-btn');
    postCommentBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            var commentBox = this.closest('.comment-wrapper').querySelector('.comment-box');
            if (commentBox.value.trim() !== "") {
                button.style.opacity = '0.5';
                button.textContent = 'Posting...';
                setTimeout(function() {
                    showToast('Comment posted successfully!');
                    commentBox.value = "";
                    button.style.opacity = '1';
                    button.textContent = 'Post';
                }, 500);
            }
        });
    });
    document.querySelectorAll('.no-comments').forEach(function(button) {
        if (button.textContent.includes('comments')) {
            button.addEventListener('click', function() {
                button.style.opacity = '0.5';
                setTimeout(function() {
                    button.style.opacity = '1';
                    alert("Opening comments section...");
                }, 200);
            });
        }
    });
    var storyCards = document.querySelectorAll('.status-card');
    storyCards.forEach(function(card) {
        card.style.transition = 'transform 0.2s ease';
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        card.addEventListener('click', function() {
            var username = this.querySelector('.username').textContent;
            alert(`Viewing status of ${username}`);
        });
    });
    var commentInputs = document.querySelectorAll('.comment-box');
    commentInputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#0095f6';
            this.style.transition = 'border-color 0.3s ease';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = 'transparent';
        });
    });
    function createFloatingHeart(event, container) {
        var heart = document.createElement('div');
        heart.innerHTML = '';
        heart.style.position = 'absolute';
        heart.style.fontSize = '80px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = 'floatHeart 1s ease-out forwards';
        var rect = container.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        heart.style.left = (x - 40) + 'px';
        heart.style.top = (y - 40) + 'px';
        container.style.position = 'relative';
        container.appendChild(heart);
        setTimeout(function() {
            heart.remove();
        }, 1000);
    }//for for showing the share layout, no file created for my convinience
    function showShareModal(username) {
        var modal = document.createElement('div');
        modal.className = 'share-modal';
        modal.innerHTML = `
            <div class="share-modal-content">
                <div class="share-modal-header">
                    <h3>Share Post</h3>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="share-modal-body">
                    <p>Share post from <strong>${username}</strong></p>
                    <div class="share-options">
                        <button class="share-option" data-type="message">
                            <i class="fas fa-envelope"></i> Send Message
                        </button>
                        <button class="share-option" data-type="link">
                            <i class="fas fa-link"></i> Copy Link
                        </button>
                        <button class="share-option" data-type="twitter">
                            <i class="fab fa-twitter"></i> Share to Twitter
                        </button>
                        <button class="share-option" data-type="facebook">
                            <i class="fab fa-facebook"></i> Share to Facebook
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.classList.add('fade-out');
            setTimeout(function() {
                modal.remove();
            }, 300);
        });
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('fade-out');
                setTimeout(function() {
                    modal.remove();
                }, 300);
            }
        });
        modal.querySelectorAll('.share-option').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var type = this.getAttribute('data-type');
                handleShare(type, username);
                if (type !== 'link') {
                    modal.remove();
                }
            });
        });
        setTimeout(function() {
            modal.classList.add('show');
        }, 10);
    }
    function handleShare(type, username) {
        switch(type) {
            case 'message':
                alert('Opening messages to share post from ' + username);
                break;
            case 'link':
                navigator.clipboard.writeText(dummyLink).then(function() {
                    showToast('Link copied to clipboard!');
                    document.querySelector('.share-modal')?.remove(); 
                });
                break;
            case 'twitter':
                alert('Sharing to Twitter: Post from ' + username);
                break;
            case 'facebook':
                alert('Sharing to Facebook: Post from ' + username);
                break;
        }
    }//for styling, no file created for my convinience
    var style = document.createElement('style');
    style.textContent = `
        @keyframes floatHeart {
            0% {
                opacity: 1;
                transform: scale(0) translateY(0);
            }
            50% {
                opacity: 1;
                transform: scale(1) translateY(-30px);
            }
            100% {
                opacity: 0;
                transform: scale(1.2) translateY(-80px);
            }
        }
        .liked-animation {
            animation: likePopAnimation 0.6s ease !important;
        }

        @keyframes likePopAnimation {
            0% { transform: scale(1); }
            25% { transform: scale(1.3); }
            50% { transform: scale(0.9); }
            75% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        .save-animation {
            animation: saveAnimation 0.4s ease !important;
        }
        @keyframes saveAnimation {
            0%, 100% { transform: scale(1) rotate(0deg); }
            25% { transform: scale(1.2) rotate(-10deg); }
            50% { transform: scale(1.2) rotate(10deg); }
            75% { transform: scale(1.1) rotate(-5deg); }
        }
        .share-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.65);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .share-modal.show {
            opacity: 1;
        }
        .share-modal.fade-out {
            opacity: 0;
        }
        .share-modal-content {
            background: white;
            border-radius: 12px;
            width: 400px;
            max-width: 90%;
            animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        .share-modal-header {
            padding: 20px;
            border-bottom: 1px solid #dbdbdb;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .share-modal-header h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
        }
        .close-modal {
            font-size: 30px;
            cursor: pointer;
            color: #8e8e8e;
            line-height: 1;
        }
        .close-modal:hover {
            color: #262626;
        }
        .share-modal-body {
            padding: 20px;
        }
        .share-modal-body p {
            margin-bottom: 20px;
            color: #262626;
        }
        .share-options {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .share-option {
            padding: 12px 16px;
            border: 1px solid #dbdbdb;
            border-radius: 8px;
            background: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s ease;
        }.share-option:hover {
            background: #fafafa;
            border-color: #0095f6;
            transform: translateX(5px);
        }
        .share-option i {
            font-size: 18px;
            color: #0095f6;
        }
        .toast-notification {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: #262626;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            z-index: 10001;
            opacity: 0;
            transition: all 0.3s ease;
        }
        .toast-notification.show {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        .post-image {
            transition: transform 0.3s ease !important;
        }
        .reaction-wrapper img {
            transition: transform 0.2s ease !important;
        }
        .reaction-wrapper img:hover {
            transform: scale(1.15) !important;
        }
    `;
    document.head.appendChild(style);
});