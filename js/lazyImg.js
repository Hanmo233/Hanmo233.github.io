
// 使用IntersectionObserver构造函数
// IntersectionObserver实例有两个方法,observe(观察一个节点)和unobserve（解除观察）
const images = document.querySelectorAll('img');
const callback = (entries) => {
    entries.forEach(entry => {
        // 每个entry数组都有一个isIntersecting属性(是否在可视区域)
        if (entry.isIntersecting) {
            // target代表着目标元素
            const image = entry.target;
            const data_src = image.getAttribute('data-src');
            image.setAttribute('src', data_src);
            observer.unobserve(image);
            console.log('触发了')
        }
    })
}
const observer = new IntersectionObserver(callback);
images.forEach(image => {
    observer.observe(image);
})
