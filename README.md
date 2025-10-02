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

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:focus{
    outline: none;
}

body{
    width: 100%;
    background: linear-gradient(135deg, #fff9e6 0%, #ffe4b3 100%);
    position: relative;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.navbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 59px;
    background: linear-gradient(90deg, #ff8c00f3 0%, #ff9100ef 100%);
    border-bottom: 1px solid #ffae00de;
    display: flex;
    justify-content: center;
    padding: 5px 0;
    z-index: 100;
}
.logotext{
    font-weight: bold;
    font-size: 30px;
    position: relative;
    font-family: 'instagram sans';
}
.navbar-wrapper{
    width: 70%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo{
    height: 85%;
    margin-top: 5px;
    cursor: pointer;
    filter: brightness(0) invert(1);
}

.search{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 267px;
    height: 36px;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 7px;
    color: #ffffff;
    font-size: 16px;
    padding-left: 15px;
}

.search::placeholder{
    color: rgba(255, 255, 255, 0.7);
}

.nav-items{
    height: 24px;
    position: relative;
    display: flex;
    gap: 20px;
}

.icons{
    height: 100%;
    cursor: pointer;
    filter: brightness(0) invert(1);
}

.user-account{
    width: 23px;
    border-radius: 50%;
    background-image: url(user.png);
    background-size: cover;
    filter: none;
    border: 2px solid #ffffff;
}

.main{
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.wrapper{
    width: 70%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-gap: 30px;
}
.left-col{
    display: flex;
    flex-direction: column;
}
.status-wrapper{
    width: 100%;
    height: 117px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: linear-gradient(135deg, #fffaeb 0%, #fff4d6 100%);
    border: 2px solid #ffcc66;
    border-radius: 8px;
    padding: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(255, 153, 0, 0.15);
}
.stories{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: absolute;
    left: 0;
    transition: 0.5s all ease-out;
}

.status-wrapper::-webkit-scrollbar{
    display: none;
}
.story--scroll{
    background: linear-gradient(135deg, #ffb347 0%, #ff8c00 100%);
    color: #ffffff;
    padding: 5px 8px;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 140, 0, 0.5);
    z-index: 1;
    margin: 0px 5px;
    transition: 0.7s;
}
.status-card{
    flex: 0 0 auto;
    width: 80px;
    max-width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
}
.status-pic{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    padding: 2px;
    background: linear-gradient(45deg, #ffcc00, #ff6600);
}
.status-pic img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
}
.username{
    width: 100%;
    overflow: hidden;
    text-align: center;
    font-size: 12px;
    margin-top: 5px;
    color: #332c2c;
}
.post{
    width: 100%;
    height: auto;
    background: linear-gradient(135deg, #fffcf5 0%, #fff7e6 100%);
    margin-top: 16px;
    border: 2px solid #ffd98e;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(255, 153, 0, 0.1);
}
.info{
    width: 100%;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.info .username{
    width: auto;
    font-weight: bold;
    color: #262626;
    font-size: 14px;
    margin-left: 10px;
}
.info .options{
    height: 20px;
    cursor: pointer;
}
.info .user{
    display: flex;
    align-items: center;
}
.info .status-pic{
    height: 40px;
    width: 40px;
    padding: 0;
    background: linear-gradient(45deg, #ffcc00, #ff6600);
}

.info .status-pic img{
    border: none;
}
.post-image{
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-top: 1px solid #ffe4b3;
    border-bottom: 1px solid #ffe4b3;
}
.post-content{
    width: 100%;
    padding: 20px;
}
.likes{
    font-weight: bold;
}
.description{
    margin: 10px 0;
    font-size: 14px;
    line-height: 20px;
}
.description span{
    font-weight: bold;
    margin-right: 10px;
}
.no-comments{
    color: #9c8e8e;
    font-size: 14px;
    margin-bottom: 15px;
    cursor: pointer;
}
.no-comments:hover{
    color: #ff8c00;
}
.post-time{
    color: #9c8e8e;
    font-size: 10px;
    margin-bottom: auto;
}
.comment-wrapper{
    width: 100%;
    height: 40px;
    border-top: 2px solid #ffe4b3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
.comment-wrapper .icons{
    height: 25px;
    margin-right: 10px;
    filter: none;
}
.comment-box{
    width: 80%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    background: transparent;
}
.comment-btn,
.action-btn,
.seeall-btn{
    height: 100%;
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    color: #ff8c00;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
}
.comment-btn:hover,
.action-btn:hover,
.seeall-btn:hover{
    color: #ff6600;
}
.comment-btn{
    padding-right: 0;
}
.reaction-wrapper{
    width: 100%;
    height: 50px;
    display: flex;
    margin-top: -20px;
    align-items: center;
}
.reaction-wrapper .icons{
    height: 25px;
    margin: 0;
    margin-right: 20px;
    filter: none;
}
.reaction-wrapper .icons.save{
    margin-left: auto;
    margin-right: 0;
}
.right-col{
    padding: 20px;
    background: linear-gradient(135deg, #fffcf5 0%, #fff7e6 100%);
    border: 2px solid #ffd98e;
    border-radius: 8px;
    height: fit-content;
    box-shadow: 0 2px 8px rgba(255, 153, 0, 0.1);
}
.profile-card{
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.profile-card .status-pic{
    flex: 0 0 auto;
    padding: 0;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background: linear-gradient(45deg, #ffcc00, #ff6600);
}
.profile-card:first-child .status-pic{
    width: 60px;
    height: 60px;
}
.profile-card .pro-user{
    font-weight: 600;
    font-size: 14px;
    color: #000;
}
.sub-text{
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 400;
    margin-top: 4px;
}
.action-div{
    margin-left: auto;
}
.action-btn{
    color: #ff8c00;
    opacity: 1;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
}
.suggestion-text{
    font-size: 14px;
    color: #8e8e8e;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
}
.seeall-btn{
    color: #000;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
}
.sug-text{
    color: #8e8e8e;
    font-size: 12px;
    font-weight: 400;
    margin-top: 4px;
}
.navbar-mobile-top{
    display: none;
}
.navbar-mobile-bottom{
    display: none;
}
.quick-links-wrapper{
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
}

.quick-links-wrapper .quick-link{
    font-size: 11px;
    color: #c2c0c0;
    cursor: pointer;
    margin-right: 5px;
}
.quick-links-wrapper .quick-link:hover{
    color: #ff8c00;
}
.quick-links-wrapper .quick-link::after{
    margin-left: 5px;
    content: "·";
}
.quick-links-wrapper .quick-link:last-child::after{
    content: "";
}
@media (max-width: 1100px){
    .right-col,
    .search{
        display: none;
    }
    .navbar-wrapper,
    .wrapper{
        width: 90%;
    }
    .wrapper{
        display: block; 
    }
}
@media(max-width: 550px){
    .navbar{
        display: none;
    }
    .navbar-mobile-top{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 59px;
        background: linear-gradient(90deg, #ff8c00 0%, #ff6600 100%);
        border-bottom: 1px solid #ff7700;
        display: flex;
        justify-content: center;
        padding: 5px 0;
        z-index: 100;
    }
    .navbar-mobile-bottom{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 59px;
        background: linear-gradient(90deg, #ff8c00 0%, #ff6600 100%);
        border-top: 1px solid #ff7700;
        display: flex;
        justify-content: center;
        padding: 5px 0;
        z-index: 100;
    }
    .navbar-mobile-bottom .navbar-wrapper{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .nav-items{
        display: flex;
        gap: 32px;
    }
    .post-image{
        height: 300px;
    }
}
.pointpoint{
    cursor: pointer;
}

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
