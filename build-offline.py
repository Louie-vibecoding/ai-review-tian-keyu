from pathlib import Path
p=Path(__file__).resolve().parent
h=(p/'index.html').read_text(encoding='utf8')
for name in ['style.css','version.css']:
    h=h.replace(f'<link rel="stylesheet" href="{name}">','<style>'+(p/name).read_text(encoding='utf8')+'</style>')
for name in ['data.js','app.js','data-v2.js','app-v2.js','editions.js']:
    h=h.replace(f'<script src="{name}"></script>','<script>'+(p/name).read_text(encoding='utf8')+'</script>')
h=h.replace('<a class="outline" href="offline.html" download="田柯宇事件-AI评审-三轮-20261024.html">↓ 三轮离线 H5</a>','<span class="outline">三轮离线 H5 · 10/24</span>')
(p/'offline.html').write_text(h,encoding='utf8')
print('Offline three-edition report built')
