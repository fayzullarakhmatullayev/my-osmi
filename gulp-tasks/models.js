"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";
import newer from "gulp-newer";
import browsersync from "browser-sync";

gulp.task("models", () => {
    return gulp.src(paths.models.src)
        .pipe(newer(paths.models.dist))
        .pipe(gulp.dest(paths.models.dist))
        .pipe(debug({
            "title": "Models"
        }))
        .pipe(browsersync.stream());
});