// عند تحميل الصفحة، ارسمها كصورة
function renderPageAsImage(pageNum) {
    pdfDoc.getPage(pageNum).then(page => {
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        page.render({ canvasContext: ctx, viewport: viewport }).promise.then(() => {
            // عرض الصورة بدلاً من النص
            document.getElementById('pdfContainer').innerHTML = '';
            document.getElementById('pdfContainer').appendChild(canvas);
        });
    });
}