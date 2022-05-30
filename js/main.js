console.log('geladen');

const container = document.querySelector('.container');

let html = '<div class="card">';

for (let i = 0; i < 2; i++) {
    const object = data[i];

    html += '<div class="card">'
    html += `<h4>John Doe">${object.title}</h4>`;
    html += `<p>software developer">${object.discription}</p>`;
    html += `<<img src="${object.Image}" alt="Avatar"`;
    html += '</div>';

}


html += '</div>';

container.innerHTML += html;
