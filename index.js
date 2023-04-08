import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminJpegRecompress from 'imagemin-jpeg-recompress';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import imageminZopfli from 'imagemin-zopfli';
 
(async () => {
    const files = await imagemin(['old_images/*.{jpg,png,jpeg}'], {
        destination: 'new_images/',
        plugins: [
            // imageminZopfli({
            //     more: true
            //     // iterations: 50 // very slow but more effective
            // }),
            // imageminOptipng({
            //     optimizationLevel: 1,
            //     colorTypeReduction: true,
            //     paletteReduction: true,
            // }),
            // imageminJpegRecompress({progressive: true, method: 'smallfry', quality: 'medium'}),
            imageminJpegtran(),
            imageminPngquant({
                speed: 1,
                quality: [0.5, 0.7]
            }),
            imageminMozjpeg({
                quality: 70,
            }),
        ]
    });
 
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();