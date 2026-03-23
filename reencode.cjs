const ffmpeg = require('ffmpeg-static');
const { execFileSync } = require('child_process');

console.log('Using FFmpeg at:', ffmpeg);
try {
  execFileSync(ffmpeg, [
    '-y',
    '-i', 'C:\\Users\\jvnev\\.gemini\\antigravity\\scratch\\lp\\openart-video_cd91519d_1774280182734.mp4',
    '-g', '1',
    '-c:v', 'libx264',
    'C:\\Users\\jvnev\\.gemini\\antigravity\\scratch\\lp\\public\\hero_video.mp4'
  ], { stdio: 'inherit' });
  console.log('Re-encoding complete! Every frame is now a keyframe.');
} catch (e) {
  console.error('Re-encoding failed:', e);
  process.exit(1);
}
