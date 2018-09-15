var gulp = require('gulp');
var concat = require('gulp-concat');
var filelog = require('gulp-filelog');
var gulpangulartemplatecache = require('gulp-angular-templatecache');

var config = {
    app: {
        distRoot: './dist/',
        sources: [
            './src/app/models/auto.model.js',
            './src/app/views/auto/auto.controller.js',
            './src/app/views/auto/auto.config.js',
            './src/app/views/auto/auto.js',
            './src/app/views/home/home.controller.js',
            './src/app/views/home/home.config.js',
            './src/app/views/home/home.js',
            './src/app/views/view.js',
            './src/app/app.config.js',
            './src/app/app.js',
        ],
        destFile: 'app.bundle.js'
    },
    static: {
        distRoot: './dist',
        baseRoot: './src',
        sources: [
            './src/index.html',
            './src/site.css',
            './src/data/*'
        ],
    },
    templates: {
        sources: './src/app/**/*.html',
        distRoot: './dist/templates',
        file: 'templates.js',
        options: {
            module: 'app',
            standAlone: false,
            root: '/templates/'
        }
    },
    vendors: {
        distRoot: './dist/lib/',
        js: {
            sources: [
                'node_modules/angular/angular.js',
                'node_modules/angular-resource/angular-resource.js',
                'node_modules/angular-ui-router/release/angular-ui-router.js'
            ],
            destFile: 'vendors.js'
        },
        css: {
            sources: [
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/angular/angular-csp.css'
            ],
            destFile: 'vendors.css'
        }
    }
};

gulp.task('default', [
    'build:app',
    'build:static',
    'build:templates',
    'build:vendorjs',
    'build:vendorcss']);

gulp.task('build:app', () => {
    return gulp.src(config.app.sources)
        .pipe(filelog())
        .pipe(concat(config.app.destFile))
        .pipe(gulp.dest(config.app.distRoot));
});

gulp.task('build:static', () => {
    return gulp.src(config.static.sources, { base: config.static.baseRoot })
        .pipe(filelog())
        .pipe(gulp.dest(config.static.distRoot));
});

gulp.task('build:templates', () => {
    var templateDir = config.templates.sources;

    gulp.src(templateDir)
        .pipe(filelog())
        .pipe(gulpangulartemplatecache(
            config.templates.file,
            config.templates.options))
        .pipe(gulp.dest(config.templates.distRoot));

});

gulp.task('build:vendorjs', () => {
    return gulp.src(config.vendors.js.sources)
        .pipe(filelog())
        .pipe(concat(config.vendors.js.destFile))
        .pipe(gulp.dest(config.vendors.distRoot));
});

gulp.task('build:vendorcss', () => {
    return gulp.src(config.vendors.css.sources)
        .pipe(filelog())
        .pipe(concat(config.vendors.css.destFile))
        .pipe(gulp.dest(config.vendors.distRoot));
});
