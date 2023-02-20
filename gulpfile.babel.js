"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
  paths = {
    views: {
      src: ["./src/views/**/*.html", "./src/views/pages/*.html"],
      dist: "./dist/",
      watch: ["./src/blocks/**/*.html", "./src/views/**/*.html"],
    },
    styles: {
      src: "./src/styles/*.{scss,sass}",
      dist: "./dist/styles/",
      watch: ["./src/blocks/**/*.{scss,sass}", "./src/styles/**/*.{scss,sass}"],
      includePaths: ["./node_modules/"],
    },
    scripts: {
      src: "./src/js/index.js",
      dist: "./dist/js/",
      watch: ["./src/blocks/**/*.js", "./src/js/**/*.js"],
    },
    images: {
      src: [
        "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg,webp}",
        "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
      ],
      dist: "./dist/img/",
      watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}",
    },
    sprites: {
      src: "./src/img/svg/*.svg",
      dist: "./dist/img/sprites/",
      watch: "./src/img/svg/*.svg",
    },
    fonts: {
      src: "./src/fonts/**/*.{woff,woff2}",
      dist: "./dist/fonts/",
      watch: "./src/fonts/**/*.{woff,woff2}",
    },
    videos: {
      src: "./src/videos/*",
      dist: "./dist/videos/",
      watch: "./src/videos/*",
    },
    favicons: {
      src: "./src/img/favicon/*.{jpg,jpeg,png,gif}",
      dist: "./dist/img/favicons/",
    },
    models: {
      src: "./src/models/*",
      dist: "./dist/models/",
    },
    gzip: {
      src: "./src/.htaccess",
      dist: "./dist/",
    },
  };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series(
  "clean",
  "smart-grid",
  gulp.parallel([
    "views",
    "styles",
    "scripts",
    "images",
    "webp",
    "models",
    "sprites",
    "fonts",
    "videos",
    "favicons",
  ]),
  gulp.parallel("serve")
);

export const prod = gulp.series(
  "clean",
  gulp.parallel([
    "views",
    "styles",
    "scripts",
    "images",
    "webp",
    "models",
    "sprites",
    "fonts",
    "videos",
    "favicons",
    "gzip",
  ])
);

export default development;
