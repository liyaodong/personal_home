(() => {
    const getSubsiteHandler = subsite => {
        const subSiteList = [
            {
                match: name => name === 'blog',
                handler: loadBlog,
            },
            {
                match: name => /^posts/.test(name),
                handler: loadPost,
            },
        ];

        const handlerFounded = subSiteList.find(x => x.match(subsite));
        if (handlerFounded) {
            return handlerFounded.handler;
        }

        return null;
    };

    const getSubsite = () => {
        const hash = window.location.hash.split('#')
        return hash[hash.length - 1] || 'home';
    };

    const setSubsiteClass = subsite => document.body.setAttribute('data-subsite', subsite);

    const updateSubsite = () => {
        const subsite = getSubsite();
        setSubsiteClass(subsite);

        const handler = getSubsiteHandler(subsite);
        if (typeof handler === 'function') {
            handler(subsite);
        }
    };

    const loadBlog = () => {
        const url = 'https://blog.liyaodong.com/';
        fetch(url)
            .then(res => res.text())
            .then(parseBlogBody)
            .then(updateBlogList);
    };

    const parseBlogBody = html => {
        const el = document.createElement('html');
        el.innerHTML = html;
        return el.querySelectorAll('article.article-item');
    };

    const changeToHashUrl = a => {
        const href = a.getAttribute('href');
        a.setAttribute('href', href.replace(/^\//, '#'));
    };

    const updateBlogList = content => {
        const $container = document.querySelector('.subsite--blog .subsite__body');
        $container.innerHTML = '';

        content.forEach(x => {
            x.querySelectorAll('a').forEach(changeToHashUrl);
            $container.append(x);
        })
    };

    const loadPost = path => {
        const $postPage = document.querySelector('.subsite--post');
        const $container = document.querySelector('.subsite--post .subsite__article');
        $container.innerHTML = '';
        $postPage.classList.add('is-loading');

        fetch(`https://blog.liyaodong.com/${path}`)
            .then(res => res.text())
            .then(html => {
                const el = document.createElement('html');
                el.innerHTML = html;
                const title = el.querySelector('title').innerText;
                document.title = title;
                return el.querySelector('section.single');
            })
            .then(content => {
                $postPage.classList.remove('is-loading');
                $container.append(content);
                window.scrollTo(0, 0);
            });
    };

    updateSubsite(); // for first page load
    window.onhashchange = updateSubsite;
})();
