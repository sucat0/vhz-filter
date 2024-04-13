const filterChannel = [
    'vhzeque',
    'vhzaoadmiral',
    'vhznina',
    'vhzshune',
    'vhzgumi',
]

function verifyVhzChannel(channel: Element) {
    const detail = channel.querySelector('div.cBox-info > div.details > a')
    const channelId = detail?.getAttribute('user_id')

    if (!channelId) {
        return false
    }

    if (filterChannel.includes(channelId)) {
        return true
    }

    return false
}

function verifyVhzCatch(catchElement: Element) {
    const detail = catchElement.querySelector('a > div > button')
    const channelId = detail?.getAttribute('data-user-id')

    if (!channelId) {
        return false
    }

    if (filterChannel.includes(channelId)) {
        return true
    }

    return false
}

function verifyVhzVod(vod: Element) {
    const detail = vod.querySelector('div.cBox-info > div.details > div > div > a')
    const channelId = detail?.getAttribute('user_id')

    if (!channelId) {
        return false
    }

    if (filterChannel.includes(channelId)) {
        return true
    }

    return false
}

setTimeout(() => {
    // Filter recommend channel
    const channels = document.querySelectorAll('#prefer_broadlist_area > ul > li')
    for (const channel of channels) {
        if (!verifyVhzChannel(channel)) {
            channel.remove()
        }
    }

    // Filter catch
    const catches = document.querySelectorAll('#recommendCatchList > ul > li')
    for (const catchElement of catches) {
        if (!verifyVhzCatch(catchElement)) {
            catchElement.remove()
        }
    }

    const vods = document.querySelectorAll('#prefer_vodlist_area > ul > li')
    for (const vod of vods) {
        if (!verifyVhzVod(vod)) {
            vod.remove()
        }
    }

    document.querySelector('#newHotArea')?.remove()

    const catchStory = document.querySelectorAll('#pbjCatchStoryList > ul > li')
    for (const story of catchStory) {
        if (!verifyVhzCatch(story)) {
            story.remove()
        }
    }

    document.querySelector('#title_area')?.remove()
    document.querySelector('#broadlist_area')?.remove()
    document.querySelector('#topBnrArea')?.remove()
}, 1000)
