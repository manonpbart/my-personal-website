// 🎮 PROJECT CONSTANTS - Keep all your project data organized here!

// Available tags for categorizing projects
export const PROJECT_TAGS = {
    MACHINE_LEARNING: "machine learning",
    OPTICAL_COMMUNICATION: "optical communication",
    QUANTUM: "quantum",
    OPTICAL_NEURAL_NETWORKS: "optical neural networks",
    LOCAL_APP: "local app"
};

// Research Projects Data
export const RESEARCH_PROJECTS = {
    ML_OPTICAL_COMM: {
        name: "ML for Optical Communication",
        slug: "ml-optical-comm",
        icon: "/icons/oam.png",
        tags: [PROJECT_TAGS.MACHINE_LEARNING, PROJECT_TAGS.OPTICAL_COMMUNICATION],
        description: "Machine learning approaches for improving optical communication systems",
        paperUrl: "https://doi.org/10.1364/OL.551297",
        githubUrl: "https://github.com/manonpbart/Machine-Learning-for-Optical-Communication"
    },
    OPTICAL_NEURAL_NETWORKS: {
        name: "Efficient Optical Neural Network Training",
        slug: "optical-neural-networks",
        icon: "/icons/delta.png",
        tags: [PROJECT_TAGS.MACHINE_LEARNING, PROJECT_TAGS.OPTICAL_NEURAL_NETWORKS],
        description: "Novel Fourier-based backpropagation algorithm for efficient training of diffractive neural network architectures",
        paperUrl: "https://arxiv.org/abs/2506.20833",
        githubUrl: "https://github.com/manonpbart/Efficient-Optical-Neural-Network-Training"
    }
    // Add more research projects here as constants
};

// Regular Projects Data
export const PROJECTS = {
    PIXEL_ART_CONVERTER: {
        name: "Pixel Art Converter",
        slug: "pixel-art-converter",
        icon: "/icons/heart.png",
        tags: [PROJECT_TAGS.LOCAL_APP],
        description: "Transform any image into retro pixel art with customizable sizes and color palettes!",
        url: "/projects/pixel-art-converter.html"
    }
    // Add more regular projects here
};

// Helper function to get projects by tag
export function getProjectsByTag(projects, tag) {
    return Object.values(projects).filter(project =>
        project.tags.includes(tag)
    );
}

// Helper function to create tag badges HTML
// Colors now live in global.css (.tag--<slug> classes) instead of inline styles,
// so the whole site restyles from one place.
export function createTagBadges(tags) {
    return tags
        .map(tag => `<span class="tag tag--${createSlug(tag)}">${tag}</span>`)
        .join('');
}

// Helper function to create URL-friendly slugs from project names
export function createSlug(name) {
    return name
        .toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, '')     // Remove special characters
        .replace(/--+/g, '-')           // Replace multiple hyphens with single
        .replace(/^-|-$/g, '');         // Remove leading/trailing hyphens
}

// ============================================================
// NEWS — add new items at the TOP of the list (newest first)
// ============================================================
export const NEWS_ITEMS = [
    {
        date: "2026-05",
        text: "Our work studying ancient coins from Argos, Greece was accepted at the francophone Ion Beam Applications conference!"
    },
    {
        date: "2026-05",
        text: "Our research in the news! Tulane wrote about our optical AI research: \"At the Speed of Light\".",
        url: "https://sse.tulane.edu/speed-light-tulane-team-advances-optical-ai"
    },
    {
        date: "2026-05",
        text: "<b>New proceedings!</b> Our work on all-optical machine learning for noise robust information processing.",
        url: "https://photonicsforenergy.spiedigitallibrary.org/conference-proceedings-of-spie/14104/1410402/All-optical-machine-learning-for-noise-robust-information-processing/10.1117/12.3098337.short"
    },
    {
        date: "2026-05",
        text: "We traveled to Turin, Italy to present on bridging multiple modalities of data for machine learning at the International Symposium on Archaeometry.",
        url: "https://isa2026torino.it/poster_session_s8/"
    },
    {
        date: "2026-04",
        text: "<b>New paper!</b> \"Efficient Training for Diffractive Optical Computing\" is out in Machine Learning: Science and Technology.",
        url: "https://iopscience.iop.org/article/10.1088/2632-2153/ae59ed"
    },
    {
        date: "2026-04",
        text: "The PHOENIX Project — AI for cultural heritage conservation — is featured in Omalius Magazine, issue 37.",
        url: "https://www.unamur.be/en/university/today/omalius"
    },
    {
        date: "2026-03",
        text: "Gave an oral presentation on all-optical machine learning at SPIE Photonics Europe in Strasbourg!",
        url: "https://www.linkedin.com/posts/manonpb_spiephotonicseurope-opticalneuralnetworks-activity-7452624028504125440-0z9t"
    },
    {
        date: "2026-03",
        text: "<b>New paper!</b> \"Intensity Correlation Technique for Mode Detection and Information Encoding with Structured-Light Superpositions\" is out in Optics Express.",
        url: "https://opg.optica.org/oe/fulltext.cfm?uri=oe-34-8-14518"
    },
    {
        date: "2026-02",
        text: "I chatted with RTBF's Les Belges du Bout du Monde about my journey from Louisiana to Belgium and my research.",
        url: "https://auvio.rtbf.be/media/les-belges-du-bout-du-monde-joveneau-adrien-3432777"
    },
    {
        date: "2026-01",
        text: "Started my postdoc at the University of Namur working on AI for optical archaeometry!"
    },
    {
        date: "2025-12",
        text: "<b>New paper!</b> \"Classification of Single Photons in Higher-Order Spatial Modes via Neural Networks\" is out in Optics Letters.",
        url: "https://opg.optica.org/ol/abstract.cfm?uri=ol-50-9-2820"
    },
    {
        date: "2025-08",
        text: "Defended my PhD at Tulane University and am officially a doctor of theoretical physics. :)"
    },
    {
        date: "2025-06",
        text: "Traveled to Munich to attend the 2026 Optica Women Scholars conference, part of the World of Photonics congress.",
        url: "https://www.linkedin.com/posts/manonpb_very-grateful-to-have-been-a-part-of-the-ugcPost-7345216490331086848-iKhA/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABeSUR8BnLzeHEVXrlnclEN_XUIOAT6JYvQ"
    },
    {
        date: "2025-05",
        text: "Lovely time giving invited seminar on machine learning for optical communications at LSU's Interdisciplinary AI Journal Club."
    },
    {
        date: "2025-02",
        text: "Joined OPTICA's Engineer's Week webinar as a panelist to talk career journeys, research, and daily life in optics.",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7273762914006642690/"
    },
    {
        date: "2024-06",
        text: "Featured in Optics & Photonics News — \"Standing in Our Potential\", on women in optics and career development.",
        url: "https://www.optica-opn.org/home/career/2024/june/standing_in_our_potential/"
    },
    {
        date: "2023-08",
        text: "<b>New paper!</b> \"Deep Learning for Enhanced Free-Space Optical Communications\" is out in Machine Learning: Science and Technology.",
        url: "https://arxiv.org/abs/2208.07712"
    },
    {
        date: "2023-05",
        text: "Honored to be named an Optica Women Scholar!",
        url: "https://www.optica.org/foundation/opportunities/scholarships/optica_women_scholars/2023_optica_women_scholars/"
    },
    {
        date: "2023-02",
        text: "Travelled to Ghent to present my poster on multi-party quantum clock synchronization at the Quantum Information Processing conference"
    },
    {
        date: "2022-04",
        text: "Happy World Quantum Day! We created outreach activities with NASA for advancing quantum knowledge in K-12.",
        url: "https://www.nasa.gov/directorates/somd/space-communications-navigation-program/quantum-communications/"
    },
    {
        date: "2021-01",
        text: "I started my internship at NASA Goddard in DC!"
    },
    {
        date: "2021-01",
        text: "Awarded an NSF Graduate Research Fellowship for quantum optical communication."
    },
    {
        date: "2020-05",
        text: "I graduated from LSU with a BS in Physics and a BS in Chemical Engineering. :)"
    },
    {
        date: "2019-08",
        text: "The end to a very exciting internship at NYU in Shanghai working on quantum clock synchronization protocols."
    }
    // { date: "YYYY-MM", text: "…", url: "optional link" },
];

// ============================================================
// BLOG — quick text-only posts, newest first.
// LONG posts (headers, math, formatting) are markdown files in
// src/pages/blog/*.md — see HOW-TO.md. Never put the same post
// in both places, or the URLs will collide.
// ============================================================
export const BLOG_POSTS = [
    {
        title: "Opinion: Scientific writing.",
        slug: "scientific-comms",
        date: "2026-07",
        paragraphs: [
            "In progress."
        ]
    },
    {
        title: "Why optical neural networks?",
        slug: "why-optical-neural-networks",
        date: "2026-05",
        paragraphs: [
            "Light is a wonderful computer. When a beam passes through a phase mask, it performs a transformation on the whole optical field at once — massively parallel, and essentially free in energy once the mask exists.",
            "Compare that with a GPU: every multiply-accumulate costs energy and time, and moving the data around often costs more than the arithmetic itself. An optical system does its linear algebra as the field propagates.",
            "My recent work uses a Fourier-decomposition trick: because free-space propagation is diagonal in the angular spectrum basis, the gradients have a natural, efficient form there.",
            "I'll write a follow-up post walking through the math with pictures. For the impatient, the preprint and code are linked on the research page."
        ]
    },
    {
        title: "Hello from Paris",
        slug: "hello-from-paris",
        date: "2025-10",
        paragraphs: [
            "Welcome to the blog! After finishing my PhD at Tulane, I moved to Paris and have been splitting my time between personal research projects and exploring the city.",
            "This space is for short, informal posts: things I'm learning, projects in progress, and the occasional detour into math, art, or travel.",
            "A bit about how I got here: I grew up in Louisiana, studied chemical engineering and physics at LSU, then did my doctorate in theoretical physics at Tulane, working on classical and quantum optical communication and computing.",
            "If anything here resonates, my inbox and LinkedIn are always open. Thanks for reading!"
        ]
    }
    // { title: "…", slug: "url-friendly-slug", date: "YYYY-MM", paragraphs: ["intro shown in lists", "…"] },
];
