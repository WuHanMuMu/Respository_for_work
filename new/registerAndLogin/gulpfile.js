/**
 * Created by jlch on 16/8/3.
 */
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const minifyCss = require('gulp-minify-css');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

// 编译并压缩js
gulp.task('convertJS', function(){
    return gulp.src('app/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

// 合并并压缩css
gulp.task('convertCSS', function(){
    return gulp.src('app/css/*.css')
        .pipe(concat('app.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename(function(path){
            path.basename += '.min';
        }))
        .pipe(gulp.dest('dist/css'));
})

// 监视文件变化，自动执行任务
gulp.task('watch', function(){
    gulp.watch('app/css/*.css', ['convertCSS']);
    gulp.watch('app/js/*.js', ['convertJS', 'browserify']);
    gulp.watch('dist/*.html', ['convertJS']);
})

// browserify
gulp.task("browserify", function () {
    var b = browserify({
        entries: "dist/js/app.js"
    });

    return b.bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task('start', ['convertJS', 'convertCSS', 'browserify', 'watch']);