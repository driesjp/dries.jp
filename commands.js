log("dries.jp terminal");
log("&nbsp;");


// Help
register_cmd("help", function() {
    block_log("<br>You can use the following commands: help, doggy, music, exit</br>");
});

// Puppy
register_cmd("doggy", function() {
    block_log("<br><img src='icons/doggy.jpg'></br>");
});

// Exit
register_cmd("exit", function() {
    hideWindow('wndTerminal');
});

// Music
register_cmd("music", function() {
    block_log("<br><a target='_new' href='https://driesjp.bandcamp.com/album/the-last-collection-of-weird-synthy-stuff'><img src='icons/music/tlcowss.jpg' /> the last collection of weird synthy stuff</a></br>");
    block_log("<br><a target='_new' href='https://driesjp.bandcamp.com/album/waverunner'><img src='icons/music/waverunner.jpg' /> waverunner</a></br>");
    block_log("<br><a target='_new' href='https://driesjp.bandcamp.com/album/ninja-world-original-video-game-soundtrack'><img src='icons/music/nw.jpg' /> ninja world</a></br>");
    block_log("<br><a target='_new' href='https://driesjp.bandcamp.com/album/ok-computer-do-handel'><img src='icons/music/okdh.jpg' /> ok computer, do handel</a></br>");
    block_log("<br><a target='_new' href='https://driesjp.bandcamp.com/album/-'><img src='icons/music/eibeyuf.jpg' /> everyone is beautiful. even you, ugly fish.</a></br>");
});








update_user_title("user@dries.jp");