const linksSocialMedia = {
    github: 'bhsouza',
    linkedin: 'in/brenohsouza',
    instagram: 'bh.souza_',
    facebook: 'breno.henrique.98284',
    twitter: 'bhsouza_'
}

function chandeSocialMediaLinks() {

    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}/`


    }

}

chandeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    fetch(url).then(response => response.json()).then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })

}

getGitHubProfileInfos()