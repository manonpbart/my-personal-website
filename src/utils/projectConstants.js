// 🎮 PROJECT CONSTANTS - Keep all your project data organized here!
// Why constants? Easy to update, no more hunting through HTML for project names!

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
        icon: "/icons/delta.png", // 🎮 Learning: Custom image for ONN project
        tags: [PROJECT_TAGS.MACHINE_LEARNING, PROJECT_TAGS.OPTICAL_NEURAL_NETWORKS],
        description: "Novel Fourier-based backpropagation algorithm for efficient training of diffractive neural network architectures",
        paperUrl: "https://arxiv.org/abs/2506.20833",
        githubUrl: "https://github.com/manonpbart/Efficient-Optical-Neural-Network-Training"
    }
    // Add more research projects here as constants
};

// Regular Projects Data (like your pixel art converter)
export const PROJECTS = {
    PIXEL_ART_CONVERTER: {
        name: "Pixel Art Converter",
        slug: "pixel-art-converter", // 🎮 Learning: URL slug for nested structure
        icon: "/icons/heart.png",
        tags: [PROJECT_TAGS.LOCAL_APP],
        description: "Transform any image into retro pixel art with customizable sizes and color palettes!",
        url: "/projects/pixel-art-converter" // 🎮 Learning: New nested URL structure
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
export function createTagBadges(tags) {
    return tags.map(tag => {
        // Different colors for different tag types
        const tagColors = {
            [PROJECT_TAGS.MACHINE_LEARNING]: "#ff6b6b", // Red-ish
            [PROJECT_TAGS.OPTICAL_COMMUNICATION]: "#4ecdc4", // Teal
            [PROJECT_TAGS.QUANTUM]: "#45b7d1", // Blue
            [PROJECT_TAGS.OPTICAL_NEURAL_NETWORKS]: "#96ceb4", // Green
            [PROJECT_TAGS.LOCAL_APP]: "#6c757d" // Gray (your existing style)
        };
        
        const color = tagColors[tag] || "#6c757d";
        
        return `<div class="project-tag" style="background: ${color}; color: white; padding: 0.3rem 0.8rem; border-radius: 4px; font-size: 0.7rem; font-weight: bold; letter-spacing: 1px; margin: 0.2rem; display: inline-block; text-transform: uppercase;">${tag}</div>`;
    }).join('');
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