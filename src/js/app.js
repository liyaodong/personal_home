(() => {
    window.AMP = window.AMP || [];

    const getSubsiteHandler = subsite => {
        const subSiteList = [
            {
                match: name => name === 'blog',
                handler: loadBlog,
            },
            {
                match: name => name === 'reading',
                handler: loadReading,
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

    const loadReading = () => {
        fetch('/reading-list.json').then(res => res.json()).then(data => {
            const templateNode = document.querySelector('#reading-template');

            const generate = params => {
                return Object.keys(params).reduce((acc, key) => {
                    return acc.replace(`%%${key}%%`, params[key])
                }, templateNode.innerHTML).trim();
            }

            document.querySelector('#reading').innerHTML = data.list.map(x => generate(x)).join('');
        });
    };

    updateSubsite(); // for first page load
    window.onhashchange = updateSubsite;
})();
