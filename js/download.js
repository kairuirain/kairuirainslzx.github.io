document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/DOWNLOAD/download.json');
        const files = await response.json();
        
        const listContainer = document.getElementById('downloadList');
        files.forEach(file => {
            const link = document.createElement('a');
            link.href = file.url;
            link.className = 'download-btn';
            link.download = true;
            link.textContent = `下载 ${file.filename}`;
            listContainer.appendChild(link);
        });
    } catch (error) {
        console.error('加载下载列表失败:', error);
        listContainer.innerHTML = '<p>无法加载下载列表，请稍后再试</p>';
    }
});