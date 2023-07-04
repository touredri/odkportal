let request = new XMLHttpRequest();
let data;
request.open('POST', 'data_base.php', true);
request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        data = JSON.parse(this.responseText);
        //console.log(data);
        card(data);
        popup(data);
        datas(data);
    }
}
request.send();
function datas (data) {
    return data;
}
let card_container = document.querySelector('.card_container');
let card = (data) => {
    //console.log(data);
    for(let i = 0; i < data.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.id = data[i].id;
        card.innerHTML = `
            <img src="${data[i].profile}" alt="profile">
            <div class="detail">
              <h3> ${data[i].name}  ${data[i].lastname}  </h3>
              <h4>Promo: ${data[i].promo} </h4>
              <h4>Certified:${data[i].certified_year
        } </h4>
            </div>
        `;
        card_container.appendChild(card);
    }
}
let modal_contain = document.querySelector('.modal_content');
let cards = document.querySelectorAll('.card');
let details = datas(data);
cards.forEach((card) => {
    card.addEventListener('click', () => {
        console.log(card.querySelector('img').id);
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
                <div class="close_modal"></div>
                <div class="modal_img">
                    <img src="${card.querySelector('img').src}" alt="profile">
                </div>
                <div class="modal_details">
                    <h3>${card.querySelector('h3').innerHTML}</h3>
                    <h4>${card.querySelector('h4').innerHTML}</h4>
                    <h4>${card.querySelector('h4:nth-child(3)').innerHTML}</h4>
                </div>
        `;
        modal_contain.appendChild(modal);
        let close = modal.querySelector('.close');
        close.addEventListener('click', () => {
            modal_contain.removeChild(modal);
        });
    });
});
let popup = (data, id) => {
    
}
