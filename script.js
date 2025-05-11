// Simple navigation logic
function showSection(sectionId) {
    const sections = document.querySelectorAll('.course-section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Enhance code blocks with color (minimal)
document.addEventListener('DOMContentLoaded', function() {
    // Add basic syntax highlighting by coloring tags (for demo)
    document.querySelectorAll('code.language-html').forEach(block => {
        block.innerHTML = block.innerHTML
            .replace(/(&lt;\/?[a-z0-9]+.*?&gt;)/gi, '<span style="color: #22863a;">$1</span>')
            .replace(/(&quot;.*?&quot;)/g, '<span style="color: #032f62;">$1</span>');
    });
    document.querySelectorAll('code.language-css').forEach(block => {
        block.innerHTML = block.innerHTML
            .replace(/([.#]?[a-zA-Z0-9_-]+)\s*\{/g, '<span style="color: #6f42c1;">$1</span>{');
    });
    document.querySelectorAll('code.language-js').forEach(block => {
        block.innerHTML = block.innerHTML
            .replace(/(function|const|let|var|document|alert|prompt)/g, '<span style="color: #005cc5;">$1</span>');
    });
});
