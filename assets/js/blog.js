const themeswitcher = document.querySelector('#theme-switcher')
let container = document.querySelector('.container');
let mode = 'light'

function displayBlogPosts () {
    const blogPost = document.getElementById('blogPost');

    const blogList = JSON.parse(localStorage.getItem('blogList'));

    blogList.forEach(element => {
        const child = document.createElement('div')
        const title = document.createElement('h2')
        const userName = document.createElement('h3')
        const content = document.createElement('p')

        title.innerHTML = element.title
        title.innerHTML = element.userName
        title.innerHTML = element.text

        child.appendChild(title)
        child.appendChild(userName)
        child.appendChild(text)

        blogPost.appendChild(child)
    }); 

    }
    displayBlogPosts();

    themeswitcher.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
    container.setAttribute('class', 'light');    
    } else {
        mode = 'light';
    container.setAttribute('class', 'dark');
    } 
    });