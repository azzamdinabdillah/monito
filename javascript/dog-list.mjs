export const dogList = [
    {
        images: './assets/images/dog-1.png',
        name: 'MO502 - Poodle Tiny Yellow',
        gene: 'Female',
        age: '02 months',
        price: '3.900.000 VND'
    },
    {
        images: './assets/images/dog-2.png',
        name: 'MO231 - Pomeranian White',
        gene: 'Male',
        age: '02 months',
        price: '6.900.000 VND'
    },
    {
        images: './assets/images/dog-3.png',
        name: 'MO102 - Poodle Tiny Sepia',
        gene: 'Male',
        age: '02 months',
        price: '4.000.000 VND'
    },
    {
        images: './assets/images/dog-4.png',
        name: 'MO512 - Alaskan Malamute Grey',
        gene: 'Male',
        age: '02 months',
        price: '8.900.000 VND'
    },
    {
        images: './assets/images/dog-5.png',
        name: 'MO231 - Pembroke Corgi Cream',
        gene: 'Male',
        age: '03 months',
        price: '7.900.000 VND'
    },
    {
        images: './assets/images/dog-6.png',
        name: 'MO502 - Pembroke Corgi Tricolor',
        gene: 'Female',
        age: '03 months',
        price: '6.900.000 VND'
    },
    {
        images: './assets/images/dog-7.png',
        name: 'MO102 -  Pomeranian Grey',
        gene: 'Female',
        age: '02 months',
        price: '6.500.000 VND'
    },
    {
        images: './assets/images/dog-8.png',
        name: 'MO512 - Poodle Tiny Dairy Cow',
        gene: 'Male',
        age: '03 months',
        price: '5.000.000 VND'
    },
]

export const getDogs = () => {
    const dogsListElement = document.querySelector('.dogs-list');
    const dogLengthElement = document.querySelector('.dog-length');

    dogLengthElement.textContent = dogList.length + ' puppies';
    
    dogsListElement.innerHTML = dogList.map((value, index) => {
        return `
            <article>
                <div class="images">
                    <img src="${value.images}" alt="">
                </div>
                <div class="text">
                    <h4>${value.name}</h4>
                    <div class="sexuality">
                        <p>Gene: <span>${value.gene}</span></p>
                        <p>Age: <span>${value.age}</span></p>
                    </div>
                    <h4 class="price">${value.price}</h4>
                </div>
            </article>
        `;
    }).join('');
}