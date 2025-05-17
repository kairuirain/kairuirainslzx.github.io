document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('showData').addEventListener('click', () => {
        const container = document.getElementById('imageContainer');
        container.innerHTML = `<img src="/CXF/PNG/1.jpg" alt="操行分数据图" class="data-image">`;
    });
});