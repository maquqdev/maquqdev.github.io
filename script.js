document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.25
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });


        const fullTitle = "Welcome to My Portfolio";
        let currentTitle = "";
        let index = 0;

        function typeTitle() {
            if (index < fullTitle.length) {
                currentTitle += fullTitle.charAt(index);
                document.title = currentTitle; 
                index++;
                setTimeout(typeTitle, 150); 
            } else {
                
            }
        }

        
        window.onload = typeTitle;
});
