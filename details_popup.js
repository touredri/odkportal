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
let modal_container = document.querySelector('.modal_container');
let card = (data) => {
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
        card.addEventListener('click', function() {
            let modal = document.createElement('div');
            let modal_content = document.createElement('div');
            modal_content.classList.add('modal_content');
            modal.classList.add('modal', 'popup_modal');
            modal.innerHTML = `  
                    <div class="modal_img">
                        <img src="${data[i].profile}" alt="profile">
                    </div>
                    <div class="modal_detail">
                        <div>
                            <h3> ${data[i].name}</h3>
                            <h3> ${data[i].lastname}</h3>
                            <h3>Promo: ${data[i].promo}</h3>
                            <h3>Certified:${data[i].certified_year}</h3>
                        </div>
                        <div>
                          <h3>Age: ${data[i].age}</h3>
                           <h3>Date of birth: ${data[i].birthday}</h3>
                           <h3>Email: ${data[i].email}</h3>
                           <h3>Phone: ${data[i].phone}</h3>
                        </div>
                    </div>
                    <div class="modal_config">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                        <button class="close_modal">Close</button>
                    </div>    
        `;
            modal_content.appendChild(modal);
            modal_container.appendChild(modal_content);
            let close = modal.querySelector('.close_modal');
            close.addEventListener('click', function() {
                modal_container.removeChild(modal_content);
            });
            let edit = modal.querySelector('.edit');
            edit.addEventListener('click', function() {
                modal_content.removeChild(modal_content.lastChild);
                let edit_form = document.createElement('form');
                edit_form.classList.add('edit_form', 'registration-form');
                edit_form.innerHTML = `
                            <div class="edit_form_container_left form-part">                               
                                <input type="text" name="name" placeholder="Nom" id="name" value="${data[i].name}">                               
                                <input type="text" name="lastname" placeholder="Prenom" id="lastname" value="${data[i].lastname}">                              
                                <select name="promotion" class="promo promo_option" required>
                                    <option value="default">${data[i].promo}</option>
                                    <option>P1</option>
                                    <option>P2</option>
                                    <option>P3</option>
                                    <option>P4</option>
                                </select>                              
                                <input type="text" name="certified_year" placeholder="Année de certification" id="certified_year" value="${data[i].certified_year}">
                            </div>
                            <div class="edit_form_container_right form-part">
                                <input type="file" accept="image/*" name="img" required>
                                <input type="text" name="age" placeholder="Age" id="age" value="${data[i].age}">
                                <input type="text" name="birthday" placeholder="Date de naissance" id="birthday" value="${data[i].birthday}">                              
                                <input type="text" name="email" placeholder="Email" id="email" value="${data[i].email}">        
                                <input type="text" name="phone" placeholder="Numero" id="phone" value="${data[i].contact}">
                            </div>                     
                            <div class="edit_form_config">
                                <button class="edit_form_submit">Submit</button>
                                <button class="edit_form_cancel">Cancel</button>
                            </div>
                `;
            });
        });
    }
}

let cards = document.querySelectorAll('.card');

let popup = (data) => {
    let details = data;
}
