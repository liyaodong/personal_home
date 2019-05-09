(() => {
    window.AMP = window.AMP || [];

    const getSubsiteHandler = subsite => {
        const subSiteList = [
            {
                match: name => name === 'blog',
                handler: loadBlog,
            },
            {
                match: name => name === 'photos',
                handler: loadPhotos,
            },
        ];

        const handlerFounded = subSiteList.find(x => x.match(subsite));
        if (handlerFounded) {
            return handlerFounded.handler;
        }

        return null;
    };

    const getSubsite = () => {
        const hash = window.location.hash.split('#');
        return hash[hash.length - 1] || 'home';
    };

    const setSubsiteClass = subsite =>
        document.body.setAttribute('data-subsite', subsite);

    const updateSubsite = () => {
        const subsite = getSubsite();
        setSubsiteClass(subsite);

        const handler = getSubsiteHandler(subsite);
        if (typeof handler === 'function') {
            handler(subsite);
        }
    };

    const loadBlog = () => {
        // const $blog = document.querySelector('.subsite--blog');
        // const shadow = $blog.attachShadow({ mode: 'open', delegatesFocus: false });
    };

    const loadPhotos = () => {
        const twitterScriptUrl = document.querySelector('.twitter-timeline').dataset.src;
        const twitterScript = document.createElement('script');
        twitterScript.src = twitterScriptUrl;
        document.body.append(twitterScript);
    };

    updateSubsite(); // for first page load
    window.onhashchange = updateSubsite;
})();
