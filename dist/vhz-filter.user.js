// ==UserScript==
// @name         vhz-filter
// @namespace    sucat.dev
// @version      0.0.1
// @author       monkey
// @description  숲(아프리카TV) 메인에서 버츄얼헤르츠의 채널만 보이게 필터링해주는 tampermonkey 스크립트입니다.
// @license      MIT
// @icon         data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" /> </svg>
// @match        https://www.afreecatv.com
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const filterChannel = [
    "vhzeque",
    "vhzaoadmiral",
    "vhznina",
    "vhzshune",
    "vhzgumi"
  ];
  function verifyVhzChannel(channel) {
    const detail = channel.querySelector("div.cBox-info > div.details > a");
    const channelId = detail == null ? void 0 : detail.getAttribute("user_id");
    if (!channelId) {
      return false;
    }
    if (filterChannel.includes(channelId)) {
      return true;
    }
    return false;
  }
  function verifyVhzCatch(catchElement) {
    const detail = catchElement.querySelector("a > div > button");
    const channelId = detail == null ? void 0 : detail.getAttribute("data-user-id");
    if (!channelId) {
      return false;
    }
    if (filterChannel.includes(channelId)) {
      return true;
    }
    return false;
  }
  function verifyVhzVod(vod) {
    const detail = vod.querySelector("div.cBox-info > div.details > div > div > a");
    const channelId = detail == null ? void 0 : detail.getAttribute("user_id");
    if (!channelId) {
      return false;
    }
    if (filterChannel.includes(channelId)) {
      return true;
    }
    return false;
  }
  setTimeout(() => {
    var _a, _b, _c, _d;
    const channels = document.querySelectorAll("#prefer_broadlist_area > ul > li");
    for (const channel of channels) {
      if (!verifyVhzChannel(channel)) {
        channel.remove();
      }
    }
    const catches = document.querySelectorAll("#recommendCatchList > ul > li");
    for (const catchElement of catches) {
      if (!verifyVhzCatch(catchElement)) {
        catchElement.remove();
      }
    }
    const vods = document.querySelectorAll("#prefer_vodlist_area > ul > li");
    for (const vod of vods) {
      if (!verifyVhzVod(vod)) {
        vod.remove();
      }
    }
    (_a = document.querySelector("#newHotArea")) == null ? void 0 : _a.remove();
    const catchStory = document.querySelectorAll("#pbjCatchStoryList > ul > li");
    for (const story of catchStory) {
      if (!verifyVhzCatch(story)) {
        story.remove();
      }
    }
    (_b = document.querySelector("#title_area")) == null ? void 0 : _b.remove();
    (_c = document.querySelector("#broadlist_area")) == null ? void 0 : _c.remove();
    (_d = document.querySelector("#topBnrArea")) == null ? void 0 : _d.remove();
  }, 1e3);

})();