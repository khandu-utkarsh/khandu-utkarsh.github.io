"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var projectDetails = require('../data/projectDetails.json');
// Simple slugify function since we can't import from the Next.js app
var createSlug = function (text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};
// Get the correct path for output directory
var scriptDir = __dirname;
var markdownDir = path.join(scriptDir, 'src', 'data', 'markdown');
// Create directory if it doesn't exist
if (!fs.existsSync(markdownDir)) {
    fs.mkdirSync(markdownDir, { recursive: true });
}
projectDetails.projects.forEach(function (project) {
    var fileName = createSlug(project.heading) + '.md';
    var content = "# ".concat(project.heading, "\n\n**Date:** ").concat(project.date, "\n\n").concat(project.introContent, "\n\n## Keywords\n").concat(project.keywords.map(function (k) { return "- ".concat(k); }).join('\n'), "\n\n").concat(project.content ? "\n## Content\n".concat(project.content) : '', "\n\n").concat(project.link ? "\n[Read more](".concat(project.link, ")") : '', "\n");
    // Write markdown files
    fs.writeFileSync(path.join(markdownDir, fileName), content);
    console.log("Created: ".concat(fileName));
});
