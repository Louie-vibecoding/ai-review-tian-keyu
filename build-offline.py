from pathlib import Path
p=Path(__file__).resolve().parent
h=(p/'index.html').read_text(encoding='utf8')
for name in ['style.css','version.css']:
    h=h.replace(f'<link rel="stylesheet" href="{name}">','<style>'+(p/name).read_text(encoding='utf8')+'</style>')
for name in ['data.js','app.js','data-v2.js','app-v2.js']:
    h=h.replace(f'<script src="{name}"></script>','<script>'+(p/name).read_text(encoding='utf8')+'</script>')
h=h.replace('<a class="outline" href="offline.html" download="田柯宇事件-AI评审-双版本-20261019.html">↓ 双版离线 H5</a>','<span class="outline">双版离线 H5 · 10/19</span>')
(p/'offline.html').write_text(h,encoding='utf8')
print('Offline dual-version report built')
