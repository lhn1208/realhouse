var gulp = require('gulp'),
	uglify = require('gulp-uglify'),//js압축
	minifyCss = require('gulp-minify-css'),//css압축
	fileInclude = require('gulp-html-tag-include'), //파일 include
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	spritesmith = require('gulp.spritesmith'),
 	bs = require('browser-sync').create(''),
	reload = bs.reload;

var src='src',
	dist='dist';

var paths={
	js: src + '/js/*.js',
	css: src + '/css/*.css',
	html: src + '/**/*.html'
}

// 웹서버를 localhost:8000로 실행한다.
gulp.task('serve', function() {
	bs.init({
		server: {
			baseDir: "./"		
			//index: 'index.html'			
		},
		port:8000,
		ui: false,
		notify:false
	});
});

gulp.task('fileInclude', function() {
    gulp.src(paths.html)
    .pipe(fileInclude({}))
	.pipe(gulp.dest(dist + '/')).on('finish',reload);	
});

gulp.task('compile_js', function(){
	return gulp.src(paths.js)
	.pipe(plumber({errorHandler : onError}))
	.pipe(uglify( {mangle:{toplevel:true}} ) )
	.pipe(rename({suffix: '.min'}) )
	.pipe(gulp.dest(dist+'/js'))
	.pipe( bs.reload({stream: true}) );
});

gulp.task('compile_css', function(){
	return gulp.src(paths.css)
	.pipe(plumber({errorHandler : onError}))
	.pipe(minifyCss())
	.pipe(rename({suffix: '.min'}) )
	.pipe(gulp.dest(dist + '/css'))
	.pipe( bs.reload({stream: true}) );
});

gulp.task('compile_html', function(){
	return gulp.src(paths.html)
	.pipe(plumber({errorHandler : onError}))
	.pipe(gulp.dest(dist + '/'))
	.pipe( bs.reload({stream: true}) );
});

// image sprite
gulp.task('sprite', function(){
    var spriteData = gulp.src('./images/**/*.png')
    .pipe(spritesmith({
        imgName: 'sp_all.png',
        padding: 4,
        cssName: 'sp_all.css'
    }));
    spriteData.img.pipe(gulp.dest('./images'));
    spriteData.css.pipe(gulp.dest('./src/sp_css'));
});

//파일변경 감지 및 브라우저 재시작
gulp.task('watch', function(){
	gulp.watch(paths.js,['compile_js']);
	gulp.watch(paths.css,['compile_css']);
	gulp.watch(paths.html,['compile_html','fileInclude']);
});

var onError= function(err){
	console.log(err);
}

gulp.task('default', [
	 'serve',
	 'fileInclude',
	 'compile_js',
	 'compile_css',
	 'compile_html',
	 'watch'
]);
