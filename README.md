<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="naughty.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css"/>
    <script src="https://kit.fontawesome.com/83ccd457ed.js" crossorigin="anonymous"></script>
    <title>VeeleLog</title>
</head>
<body>
 <nav class="navbar"> 
    <div class="navbar-wrapper">
        <p class = "logotext">VeeleLog😜</p>
        <input type="text" class="search" placeholder="Search"/>
        <div class="nav-items">
            <img src="home.png" class="icons" alt="home"/>
            <img src="share.png" class="icons" alt="messenger"/>
            <img src="instagram-stories.png" class="icons" alt="add"/>
            <img src="compass.png" class="icons" alt="explore"/>
            <img src="heart.png" class="icons" alt="like"/>
            <img src="user.png" class="icons user-account" alt="useraccount"/>  
        </div>
    </div>
</nav>
<nav class="navbar-mobile-top">
    <div class="navbar-wrapper">
        <img src="https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico" class="logo" alt="logo"/>
        <input type="text" class="search" placeholder="Search"/>
        <div class="nav-items">
            <img src="instagram-stories.png" class="icons" alt="add"/>
            <img src="heart.png" class="icons like-btn" alt = "like">
            <img src="messenger.png" class="icons" alt="messenger"/>
        </div>
    </div>
</nav> 
<nav class="navbar-mobile-bottom">
    <div class="navbar-wrapper">
        <div class="nav-items">
            <img src="home.png" class="icons" alt="home"/>
            <img src="share.png" class="icons" alt="send"/>
            <img src="compass.png" class="icons" alt="explore"/>
            <img src="chat-bubble.png" class="icons" alt="comments"/>
            <img src="user.png" class="icons user-account" alt="useraccount"/> 
        </div>
    </div>
</nav>
<section class="main">
    <div class="wrapper">
        <div class="left-col">
            <div class="status-wrapper">
                <button class="story--scroll" id="scroll-left" onclick="scrollHorizantal(1)"><i class="fas fa-chevron-left"></i></button>
                <button class="story--scroll" id="scroll-right" onclick="scrollHorizantal(-1)"><i class="fas fa-chevron-right"></i></button>
                <div class="stories">
                    <div class="status-card">
                        <div class="status-pic">
                            <img src="user.png" alt="status"/>
                        </div>
                        <p class="username">Sanjiban Panda</p>
                    </div>
                    <div class="status-card">
                        <div class="status-pic">
                            <img src="status.png" alt="status of user"/>
                        </div>
                        <p class="username">Shahrukh Khan</p>
                    </div>
                    <div class="status-card">
                        <div class="status-pic">
                            <img src="Connor.webp" alt="status 2"/>
                        </div>
                        <p class="username">Connor The Fighter</p>
                    </div>
                    <div class="status-card">
                        <div class="status-pic">
                            <img src="selmon bhai.jpg" alt="status 3"/>
                        </div>
                        <p class="username">Salmon Bhai</p>
                    </div>
                    <div class="status-card">
                        <div class="status-pic">
                            <img src="kaleen.jpeg" alt="status 4"/>
                        </div>
                        <p class="username">Pankaj Tripathi</p>
                    </div>
                    <div class="status-card">
                        <div class="status-pic">
                            <img src="Khabib.jpeg" alt="status 5"/>
                        </div>
                        <p class="username">Khabib Fighter</p>
                    </div>
                    <div class="status-card">
                        <div class="status-pic">
                            <img src="tomHardy.webp" alt="status 6"/>
                        </div>
                        <p class="username">Tom Hardy</p>
                    </div>
                    <div class="status-card">
                        <div class="status-pic">
                            <img src="geeksforgeeks.png" alt="status 7"/>
                        </div>
                        <p class="username">Geeksforgeeks</p>
                    </div>
                </div>
            </div>
            <div class="post">
                <div class="info">
                    <div class="user">
                        <div class="status-pic">
                            <img src="status.png" alt="user"/>
                        </div>
                        <p class="username">Shahrukh Khan</p>
                    </div>
                    <img src="option.png" class="options" alt="options"/> 
                </div>
                <img src="srk.webp" class="post-image" alt="post"/>
                <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src="heart.png" class="icons like-btn"/>
                        <img src="chat-bubble.png" class="icons" alt="comments"/>
                        <img src="share.png" class="icons" alt="share"/>
                        <img src="save.svg" class="save icons" alt="save"/>
                    </div>
                    <p>Liked by <b>Shahrukh Khan</b>and<b>12222 others</b></p>
                    <p class="description">
                        <span>Aryan Khan:</span> *OMG DADDY!!!!
                    </p>
                    <p class="no-comments">View all 45 comments</p>
                    <p class="post-time">2 days ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src="smile.jpg" class="icons" alt="smile"/>
                    <input type="text" class="comment-box" placeholder="Add a comment.."/>
                    <button class="comment-btn">Post</button>
                </div>
            </div>

            <div class="post">
                <div class="info">
                    <div class="user">
                        <div class="status-pic">
                            <img src="Tom-Hiddleston.png" alt="status 10"/>
                        </div>
                        <p class="username">Tom-Hiddleston</p>
                    </div>
                    <img src="option.png" class="options" alt="options"/>
                </div>
                <img src="Loki122.jpg" class="post-image" alt="post"/>
                <div class="post-content">
                    <div class="reaction-wrapper"> 
                        <img src="heart.png" class="icons like-btn" alt = "like"/>
                        <img src="chat-bubble.png" class="icons" alt="comment"/>
                        <img src="share.png" class="icons" alt="send"/>
                        <img src="save.svg" class="save icons" alt="save"/>
                    </div>
                    <p class="likes">4,5637 likes</p>
                    <p class="description">
                        <span>Tom-Hiddleston:</span>Verified which of these pins remind you of your bfff(best birb friend forver)?<br/>
                        Tag that below!<br/>Psst: you can get these Friendship enabled pins from Tom Hiddleston friend shop<br/>link in bio
                    </p>
                    <p class="no-comments">View all 283 comments</p>
                    <p class="post-time">23 days ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src="smile.jpg" class="icons" alt="smile"/>
                    <input type="text" class="comment-box" placeholder="Add a comment..."/>
                    <button class="comment-btn">Post</button>
                </div>
            </div>

            <div class="post">
                <div class="info">
                    <div class="user">
                        <div class="status-pic">
                            <img src="lion.png" class="icons" alt="lion"/>
                        </div>
                        <p class="username">Lion</p>
                    </div>
                    <img src="option.png" class="options" alt="options"/>
                </div>
                <img src="lion.png" class="post-image" alt="post"/>
                <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src="heart.png" class="icons like-btn" alt = "like"/>
                        <img src="chat-bubble.png" class="icons" alt="comment"/>
                        <img src="share.png" class="icons" alt="send"/>
                        <img src="save.svg" class="save icons" alt="save"/>
                    </div>
                    <p class="likes">4,345 likes</p>
                    <p class="description">
                        <span>Lion:</span>Verified which of these pins remind you of your bfff(best birb friend forver)?<br/>
                        Tag that below!<br/>Psst: you can get these Friendship enabled pins from Lion friend shop<br/>link in bio
                    </p>
                    <p class="no-comments">View All the Comments</p>
                    <p class="post-time">7 days ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src="smile.jpg" class="icons" alt="smile"/>
                    <input type="text" class="comment-box" placeholder="Add a comment....."/>
                    <button class="comment-btn">Post</button>
                </div>
            </div>

            <div class="post">
                <div class="info">
                    <div class="user">
                        <div class="status-pic">
                            <img src="user.png" class="icons" alt="lion"/>
                        </div>
                        <p class="username">Iron Man</p>
                    </div>
                    <img src="option.png" class="options" alt="options"/>
                </div>
                <img src="ironMan.jpg" class="post-image" alt="post"/>
                <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src="heart.png" class="icons like-btn"alt = "likes"/>
                        <img src="chat-bubble.png" class="icons" alt="comment"/>
                        <img src="share.png" class="icons" alt="send"/>
                        <img src="save.svg" class="save icons" alt="save"/>
                    </div>
                    <p class="likes">19,345 likes</p>
                    <p class="description">
                        <span>Iron Man:</span>Verified which of these pins remind you of your bfff(best birb friend forver)?<br/>
                        Tag that below!<br/>Psst: you can get these Friendship enabled pins Iron Man friend shop<br/>link in bio
                    </p>
                    <p class="no-comments">View All the Comments</p>
                    <p class="post-time">6 days ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src="smile.jpg" class="icons" alt="smile"/>
                    <input type="text" class="comment-box" placeholder="Add a comment....."/>
                    <button class="comment-btn">Post</button>
                </div>
            </div>
        </div>

        <div class="right-col">
            <div class="profile-card">
                <div class="status-pic">
                    <img src="user.png" alt="user"/>
                </div>
                <div>
                    <p class="pro-user">RaushanTheGoat</p>
                    <p class="sub-text">Raushan Kumar</p>
                    <p class = "sub-text">Bio: Nothing much</p>
                </div>
                <div class="action-div">
                    <button class="action-btn">Switch</button>
                </div>
            </div>

            <div class="profile-card">
                <div>
                    <p class="suggestion-text">Suggestion for You</p>
                </div>
                <div class="action-div">
                    <button class="seeall-btn">See All</button>
                </div>
            </div>

            <div class="profile-card">
                <div class="status-pic">
                    <img src="RobertDowney.jfif" alt="follow"/>
                </div>
                <div>
                    <p class="pro-user">Robert Downey Jr</p>
                    <p class="sug-text">New to Instagram</p>
                </div>
                <div class="action-div">
                    <button class="action-btn">follow</button>
                </div>
            </div>

            <div class="profile-card">
                <div class="status-pic">
                    <img src="HrithikRoshan.jfif" alt="follow 2"/>
                </div>
                <div>
                    <p class="pro-user">VisuallyWise</p>
                    <p class="sug-text">New to Instagram</p>
                </div>
                <div class="action-div">
                    <button class="action-btn">Follow</button>
                </div>
            </div>

            <div class="profile-card">
                <div class="status-pic">
                    <img src="AnaDeArmas.jfif" alt="follow 3"/>
                </div>
                <div>
                    <p class="pro-user">vertasium</p>
                    <p class="sug-text">Suggested For you</p>
                </div>
                <div class="action-div">
                    <button class="action-btn">Follow</button>
                </div>
            </div>

            <div class="profile-card">
                <div class="status-pic">
                    <img src="isreal Adsenya.webp" alt="follow 4"/>
                </div>
                <div>
                    <p class="pro-user">JustAnotherUser</p>
                    <p class="sug-text">Suggested For you</p>
                </div>
                <div class="action-div">
                    <button class="action-btn">Follow</button>
                </div>
            </div>

            <div class="profile-card">
                <div class="status-pic">
                    <img src="user.png" alt="follow 5"/>
                </div>
                <div>
                    <p class="pro-user">lifeisdn</p>
                    <p class="sug-text">Suggested For you</p>
                </div>
                <div class="action-div">
                    <button class="action-btn">Follow</button>
                </div>
            </div>

            <div class="profile-card">
                <div class="status-pic">
                    <img src="user.png" alt="follow 6"/>
                </div>
                <div>
                    <p class="pro-user">blablahbahl</p>
                    <p class="sug-text">Suggested For you</p>
                </div>
                <div class="action-div">
                    <button class="action-btn">Follow</button>
                </div>
            </div>

            <div class="quick-links-wrapper" style="padding-top: 15px;">
                <div class="quick-link">About</div>
                <div class="quick-link">Help</div>
                <div class="quick-link">Press</div>
                <div class="quick-link">API</div>
                <div class="quick-link">Jobs</div>
                <div class="quick-link">Privacy</div>
                <div class="quick-link">Terms and Conditions</div>
            </div>

            <div class="quick-links-wrapper">
                <div class="quick-link">Locations</div>
                <div class="quick-link">Language</div>
            </div>

            <div class="quick-links-wrapper" style="padding-top: 10px;">
                <div class="quick-link">@Mygram from Raushan</div>
            </div>
        </div>
    </div>
    <script src = "script.js"></script>
</section>
</body>
</html>
