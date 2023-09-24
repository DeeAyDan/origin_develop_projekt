const headerLinks = document.querySelectorAll('.selectable');

        headerLinks.forEach(link => {
            link.addEventListener('click', () => {
                event.preventDefault();
                headerLinks.forEach(l => {
                    l.classList.remove('selectedHeaderLink');
                    l.classList.add('headerLink');
                });

                link.classList.add('selectedHeaderLink');
            });
        });