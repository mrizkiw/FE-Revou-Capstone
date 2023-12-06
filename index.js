const container = document.getElementById('container');
const template = (item) => {
    return `
    <div>
        <a href="./detail.html?id=${item.id}">
            <p>Title: ${item.title}</p>
        </a>
    </div>`;
}

fetch('https://api-revou.mrizkiw.com/data/articles/newest')
    .then(response => response.json())
    .then(data => {
        let content = "";
        data.map(item => {
            content += template(item);
        });
        container.innerHTML = content;
    });
















    /*
    const container = document.getElementById('container');
const template = (item) => {
    return `
    <div>
        <a href="./detail.html?id=${item.id}">
            <p>Title: ${item.title}</p>
        </a>
    </div>`;
}

fetch('https://api-revou.mrizkiw.com/data/articles')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        if (Array.isArray(data)) {
            let content = "";
            data.forEach(item => {
                content += template(item);
            });
            container.innerHTML = content;
        } else {
            console.error("erro");
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

*/