document.addEventListener('DOMContentLoaded', () => {

    createNoiseBackground();
    document.getElementById('current-year').textContent = new Date().getFullYear();


const projects = [
    {
        title: "Large Language Model",
        description: "Built a Transformer-based LLM (400M parameters) with custom tokenizer and training loop, trained on multilingual web-crawled data for next-token prediction.",
        tags: ["Python", "PyTorch", "NLP", "Transformers"],
        link: "https://github.com/yourusername/large-language-model",
        media: {
            type: "gif",
            url: "assets/llm-preview.gif" 
        }
    },
    {
        title: "English-Tamil Translator",
        description: "Designed a bilingual Transformer model for translating English to Tamil, evaluated with BLEU scores and manual accuracy testing.",
        tags: ["Python", "PyTorch", "NLP", "Machine Translation"],
        link: "https://github.com/yourusername/english-tamil-translator",
        media: {
            type: "image",
            url: "assets/translator-preview.png" 
        }
    },
    {
        title: "Diffusion Model (DDPM)",
        description: "Trained a denoising diffusion model on the COCO dataset for image generation, optimizing noise schedule and training efficiency.",
        tags: ["Python", "PyTorch", "Computer Vision", "Generative AI"],
        link: "https://github.com/yourusername/diffusion-model",
        media: {
            type: "gif",
            url: "assets/diffusion-preview.gif" 
        }
    },
    {
        title: "Variational Autoencoder",
        description: "Implemented a VAE for encoding and reconstructing images, improving latent space control via KL-divergence tuning.",
        tags: ["Python", "PyTorch", "Generative Models"],
        link: "https://github.com/yourusername/variational-autoencoder",
        media: {
            type: "image",
            url: "./data/flowmatching_9.gif" 
        }
    },
    {
        title: "Flow Matching Model",
        description: "Built a generative model using flow matching and score-based methods, with efficient continuous-time step conditioning.",
        tags: ["Python", "PyTorch", "Generative AI"],
        link: "https://github.com/yourusername/flow-matching",
        media: {
            type: "gif",
            url: "./data/vae-coco-color.png"
        }
    },
    {
        title: "Cache Infrastructure Management",
        description: "Developed a framework for cache server management, including connection support, failover, upgrades, module integration, and security.",
        tags: ["C++", "Redis", "System Design", "Infrastructure"],
        link: "https://github.com/yourusername/cache-infrastructure",
        media: {
            type: "image",
            url: "assets/cache-infra-preview.png" 
        }
    },
    {
        title: "Auditorium Booking System",
        description: "Created a web-based system for real-time auditorium booking with automated approval, conflict resolution, and cancellation handling.",
        tags: ["JavaScript", "Node.js", "MongoDB", "React"],
        link: "https://github.com/yourusername/auditorium-booking",
        media: {
            type: "video",
            url: "assets/booking-system-demo.mp4" 
        }
    }
];

    const publications = [
       /* {
            title: "Publication One",
            authors: "Your Name, Co-author One, Co-author Two",
            venue: "Conference/Journal Name, Year",
            link: "https://doi.org/example"
        }*/
    ];

  
const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    let mediaHTML = '';
    if (project.media) {

        const img = new Image();
        img.src = project.media.url;

        img.onload = function() {
  
            const mediaContainer = document.createElement('div');
            mediaContainer.className = 'project-media-container';
            
            if (project.media.type === 'gif' || project.media.type === 'image') {
                mediaContainer.innerHTML = `<img class="project-media" src="${project.media.url}" alt="${project.title} preview">`;
            } else if (project.media.type === 'video') {
                mediaContainer.innerHTML = `
                    <video class="project-media" loop muted>
                        <source src="${project.media.url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            }
            
            projectCard.insertBefore(mediaContainer, projectCard.firstChild);
            
            const mediaElement = mediaContainer.querySelector('.project-media');
            if (mediaElement && mediaElement.tagName === 'VIDEO') {
                projectCard.addEventListener('mouseenter', () => {
                    mediaElement.play();
                });
                
                projectCard.addEventListener('mouseleave', () => {
                    mediaElement.pause();
                    mediaElement.currentTime = 0;
                });
            }
        };
        

        img.onerror = function() {

            console.log(`Media for "${project.title}" not found at ${project.media.url}`);
        };
    }
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'project-content';
    contentDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="github-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="github-icon">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>View on GitHub</span>
        </div>
    `;
    
    projectCard.appendChild(contentDiv);
    

    projectCard.addEventListener('click', () => {
        window.open(project.link, '_blank');
    });
    
    projectsGrid.appendChild(projectCard);
});


    /* const publicationsList = document.querySelector('.publications-list');
    publications.forEach(pub => {
        const publication = document.createElement('div');
        publication.className = 'publication';
        publication.innerHTML = `
            <h3><a href="${pub.link}" target="_blank">${pub.title}</a></h3>
            <p>${pub.authors}</p>
            <p><em>${pub.venue}</em></p>
        `;
        publicationsList.appendChild(publication);
    }); */


    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

function createNoiseBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 200;
    canvas.height = 200;
    
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
        const value = Math.floor(Math.random() * 25);
        data[i] = data[i + 1] = data[i + 2] = 255;
        data[i + 3] = value;
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    document.body.style.backgroundImage = `url(${canvas.toDataURL("image/png")})`;
}



