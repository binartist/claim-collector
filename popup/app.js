/**
 * Created by binartist on 9/15/16.
 */

var action_btn = document.querySelector('button')
var intranetid_input = document.querySelector('#intranetId');
var password_input = document.querySelector('#password');
var hint_label = document.querySelector('span');

var hint_container = document.querySelector('.hint-container');
var fading_circle = document.querySelector('.sk-fading-circle');


action_btn.onclick = function () {
    showHub();

    var user_info = {
        username: intranetid_input.value,
        password: password_input.value,
    };

    chrome.storage.local.set({
        user_info: user_info
    });

    chrome.runtime.sendMessage({
        username: user_info.username,
        password: user_info.password
    }, function (code, msg) {
        chrome.storage.local.get('last_update', function (res) {
            hideHub();

            hint_label.textContent = res.last_update.msg + res.last_update.datatime;
        });
    });
}

chrome.storage.local.get('user_info', function (res) {
    intranetid_input.value = res.user_info.username;
    password_input.value = res.user_info.password;
});

chrome.storage.local.get('last_update', function (res) {
    hint_label.textContent = (res.last_update.msg + res.last_update.datatime) || hint_label.textContent;
});

function showHub() {
    fading_circle.style.display = "block";
    hint_container.style.display = "none";
}

function hideHub() {
    setTimeout(function () {
        fading_circle.style.display = "none";
        hint_container.style.display = "block";
    }, 1500)
}