document.addEventListener('DOMContentLoaded', () => {

    let form = document.getElementById('form');
    let add_btn = document.getElementById('add_new');
    let add_st = document.getElementById('add_student');
    let modal = document.getElementById('modal');

    add_btn.addEventListener('click', () => {
        form.appendChild(registration);
        add_st.appendChild(add_std);
        modal.className = 'modal_';
    });

 let option_table = ['P1', 'P2', 'P3', 'P4'];

    let add_std = document.createElement('div');
    add_std.className = 'add_student';
    add_std.innerHTML = `<h3>ADD STUDENT</h3>
                    <i class="fa-solid fa-xmark fa-2xl close" id="close" style="color: #f58300;"></i>`;

    let registration = document.createElement('form');
    registration.id = 'registration-form';
    registration.className = 'registration-form'
    registration.method = 'Post';
    registration.action = 'data_base.php';
    registration.setAttribute('enctype', 'multipart/form-data');
    registration.innerHTML = `
        <div class="form-part">
            <input type="text" placeholder="Name" pattern="[a-z A-Z]*" name="name" required>
            <input type="text" placeholder="Lastname" pattern="[a-z A-Z]*" name="lastname" required>
            <input type="number" placeholder="Age"  pattern="[0-9]*" name="age" required>
            <input type="date" placeholder="Date of birth" name="birthday" required>
            <input type="email" placeholder="Email Address" name="email" required>
        </div>
        <div class="form-part">
            <input type="number" placeholder="Phone number"  pattern="[0-9]*" name="contact" required>
            <input type="file" accept="image/*" name="img" required>
            <select name="promotion" class="promo promo_option" required>
                <option value="default">Choose a Promotion</option>
                ${option_table.map((option) => {
                    return `<option value="${option}">${option}</option>`;
                }).join('')
    }
            </select>
            <input type="number" placeholder="Year of certification" name="certified_year" required>
            <div class="add_promotion_place"></div>
            <div class="send_btn">
                <button type="submit" name="submit">Submit</button>
                <button type="button" class="add_new_promo" onclick="(() => {
                    let add_promotion_place = document.querySelector('.add_promotion_place');
                    let add_promotion = document.createElement('input');
                    Object.assign(add_promotion, {
                                        type: 'text',
                                        maxLength: 2,
                                        className: 'new_promotion',
                                        placeholder: 'Ex: P4',
                                        name: 'new_promotion'
                                    });
                    add_promotion.onkeyup = () => {
                        add_promotion.value = add_promotion.value.toUpperCase();
                    }
                     let option_table = ['P1', 'P2', 'P3', 'P4'];
                    let add_new_button = document.createElement('button');
                    add_new_button.name = 'Add_new';
                    add_new_button.innerHTML = 'Add';
                    add_new_button.className = 'add_new';
                    add_new_button.formMethod = 'Post';
                    add_new_button.onclick = () => {
                        let new_promotion_val = document.querySelector('.new_promotion').value;
                        let promo_option = document.querySelector('.promo_option');
                        let new_option = document.createElement('option');
                        new_option.value = new_promotion_val;
                        new_option.innerHTML = new_promotion_val;
                        promo_option.appendChild(new_option);
                        option_table.push(new_promotion_val);
                    }
                   
                    if (add_promotion_place.childElementCount < 1) {
                        add_promotion_place.appendChild(add_promotion);
                        add_promotion_place.appendChild(add_new_button);
                    }             
                })()" id="new">Add new promotion</button>
            </div> 
        </div>
    `;

    let close = add_std.querySelector('.close');
    close.addEventListener('click', () => {
        //console.log("ok");
        form.removeChild(registration);
        add_st.removeChild(add_std);
        modal.className = modal.className.replace('modal_', '');
    });

});

