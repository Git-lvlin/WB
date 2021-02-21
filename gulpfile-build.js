// 加载gulp，并结构需要的方法
let {task,src,dest,watch,series,parallel} = require('gulp')
let load = require('gulp-load-plugins')()//自动加载其他gulp插件
let del = require('del')//删除文件

// 删除dist目录
task('delDist',async ()=>{
  await del('./dist')
})

// 处理css
task('style',async ()=>{
  src('./style/*.css')
  .pipe(load.rev())//给文件名添加哈希值
  .pipe(load.minifyCss())//压缩css
  .pipe(dest('./dist/style'))//写入到dist目录下
  .pipe(load.rev.manifest())//生成记录哈希值的json文件
  .pipe(dest('./rev/css'))//将记录哈希值的json文件保存rev目录
})

// 处理js
task('script',async ()=>{
  src('./script/*.js')
  .pipe(load.rev())
  .pipe(load.babel({
    presets: ['@babel/env']
  }))
  .pipe(load.uglify())
  .pipe(dest('./dist/script'))
  .pipe(load.rev.manifest())
  .pipe(dest('./rev/js'))
})

//处理php
task('php',async ()=>{
  src('./php/*.php')
  .pipe(dest('./dist/php'))
  .pipe(load.connect.reload())
})

//处理json
task('json',async ()=>{
  src('./json/*.json')
  .pipe(dest('./dist/json'))
  .pipe(load.connect.reload())
})

// 压缩图片
task('images',async ()=>{
  src('./images/*.*')
  .pipe(load.imageminChangba())
  .pipe(dest('./dist/images'))
})

// 处理html
task('html',async ()=>{
  setTimeout(()=>{
    src(['./rev/**/*.json','./views/*.html'])
    .pipe(load.revCollector({replaceReved:true}))//使用带哈希值的文件替换原文件
    .pipe(load.minifyHtml())
    .pipe(dest('./dist'))
  },2000)
})

// 打包（生产环境）
task('build',series('delDist','style','script','images','html','php','json'))
