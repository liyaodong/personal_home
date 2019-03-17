(() => {
    const getSubsite = () => {
        const hash = window.location.hash.split('#')
        return hash[hash.length - 1] || 'home';
    };

    const setSubsiteClass = subsite => document.body.setAttribute('data-subsite', subsite);

    const updateSubsiteName = () => {
        setSubsiteClass(getSubsite());
    };

    updateSubsiteName(); // for first page load
    window.onhashchange = updateSubsiteName;
})();
